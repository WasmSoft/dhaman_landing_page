import type { AutoAnimateGroup } from "@/types";

const ANIMATABLE_SELECTOR =
  "h1, h2, h3, h4, h5, h6, p, img, button, a, [data-slot='button']";

const SEMANTIC_GROUP_TAGS = new Set(["HEADER", "NAV", "ARTICLE", "FIGURE", "UL", "OL"]);

function isVisibleElement(element: HTMLElement) {
  const style = window.getComputedStyle(element);

  return (
    !element.hidden &&
    style.display !== "none" &&
    style.visibility !== "hidden" &&
    element.getClientRects().length > 0
  );
}

function hasMeaningfulContent(element: HTMLElement) {
  if (element.tagName === "IMG") {
    return true;
  }

  const text = element.textContent?.replace(/\s+/g, " ").trim() ?? "";

  return text.length > 0 || Boolean(element.querySelector("img, svg, video, canvas"));
}

function getElementSignature(element: HTMLElement) {
  const classSignature = [...element.classList].sort().join(".");

  return `${element.tagName.toLowerCase()}.${classSignature}`;
}

function getRepeatedSiblingGroups(section: HTMLElement) {
  const groups: AutoAnimateGroup[] = [];

  for (const parent of section.querySelectorAll<HTMLElement>("*")) {
    const siblings = [...parent.children].filter((child): child is HTMLElement => {
      if (!(child instanceof HTMLElement)) {
        return false;
      }

      return isVisibleElement(child) && hasMeaningfulContent(child);
    });

    if (siblings.length < 2) {
      continue;
    }

    const groupedBySignature = new Map<string, HTMLElement[]>();

    siblings.forEach((child) => {
      const signature = getElementSignature(child);
      const group = groupedBySignature.get(signature) ?? [];
      group.push(child);
      groupedBySignature.set(signature, group);
    });

    groupedBySignature.forEach((elements) => {
      if (elements.length < 2) {
        return;
      }

      const hasAnimatableContent = elements.every(
        (element) =>
          element.matches("article, li, a, button, [data-slot='button']") ||
          Boolean(element.querySelector(ANIMATABLE_SELECTOR)),
      );

      if (!hasAnimatableContent) {
        return;
      }

      groups.push({
        container: parent,
        elements,
        kind: "repeated",
      });
    });
  }

  return groups;
}

function getGroupContainer(element: HTMLElement, section: HTMLElement) {
  let current: HTMLElement | null = element;

  while (current && current !== section) {
    if (current.parentElement === section || SEMANTIC_GROUP_TAGS.has(current.tagName)) {
      return current;
    }

    current = current.parentElement;
  }

  return section;
}

function getStandaloneGroups(section: HTMLElement, repeatedGroups: AutoAnimateGroup[]) {
  const blockedElements = new Set<HTMLElement>();

  repeatedGroups.forEach((group) => {
    group.elements.forEach((element) => blockedElements.add(element));
  });

  const candidates = [...section.querySelectorAll<HTMLElement>(ANIMATABLE_SELECTOR)].filter(
    (element) => {
      if (!isVisibleElement(element) || !hasMeaningfulContent(element)) {
        return false;
      }

      return ![...blockedElements].some((blockedElement) => blockedElement.contains(element));
    },
  );

  const groupedByContainer = new Map<HTMLElement, HTMLElement[]>();

  candidates.forEach((element) => {
    const container = getGroupContainer(element, section);
    const group = groupedByContainer.get(container) ?? [];
    group.push(element);
    groupedByContainer.set(container, group);
  });

  return [...groupedByContainer.entries()].map(([container, elements]) => ({
    container,
    elements,
    kind: "content" as const,
  }));
}

// AR: هذه الدالة تحلل محتوى القسم وتلتقط العناصر البصرية المهمة ثم تجمعها في مجموعات منطقية للأنيميشن.
// EN: This helper inspects a section, picks visually important elements, and groups them into logical animation batches.
export function collectAutoAnimateGroups(section: HTMLElement) {
  const repeatedGroups = getRepeatedSiblingGroups(section);
  const standaloneGroups = getStandaloneGroups(section, repeatedGroups);

  return [...standaloneGroups, ...repeatedGroups]
    .filter((group) => group.elements.length > 0)
    .sort(
      (firstGroup, secondGroup) =>
        firstGroup.container.getBoundingClientRect().top -
        secondGroup.container.getBoundingClientRect().top,
    );
}
