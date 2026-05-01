"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type UseAutoSectionRevealOptions = {
  sectionRef: RefObject<HTMLElement | null>;
  start?: string;
};

type AnimationGroup = {
  elements: HTMLElement[];
  trigger: HTMLElement;
};

const PRIORITY_SELECTOR = "h1, h2, h3, h4, h5, h6, p, img, button, a";
const REPEATED_ITEM_SELECTOR =
  'article, li, [role="listitem"], [data-animate-group]';

// AR: تتحقق هذه الدالة من قابلية العنصر للعرض حتى لا نحرك عناصر مخفية أو هيكلية فقط.
// EN: This helper checks whether an element is visually renderable so hidden or structural-only nodes are ignored.
function isVisibleElement(element: HTMLElement): boolean {
  if (element.hidden) {
    return false;
  }

  const style = window.getComputedStyle(element);

  if (style.display === "none" || style.visibility === "hidden") {
    return false;
  }

  return element.getClientRects().length > 0;
}

// AR: تجمع هذه الدالة العناصر البصرية المهمة داخل المجموعة الواحدة حتى تتحرك ككتلة مرتبطة.
// EN: This helper collects the meaningful visual targets within one group so related content animates together.
function collectTargets(root: HTMLElement): HTMLElement[] {
  const candidates = root.matches(PRIORITY_SELECTOR)
    ? [root]
    : Array.from(root.querySelectorAll<HTMLElement>(PRIORITY_SELECTOR));

  return candidates.filter((candidate, index, array) => {
    if (!isVisibleElement(candidate)) {
      return false;
    }

    return array.indexOf(candidate) === index;
  });
}

// AR: تحدد هذه الدالة العناصر المكررة داخل القسم مثل الكروت أو عناصر القائمة وتمنحها حركة مستقلة لكل مجموعة.
// EN: This helper finds repeated section items such as cards or list entries and gives each item its own grouped reveal.
function collectRepeatedItems(section: HTMLElement): HTMLElement[] {
  const candidates = Array.from(
    section.querySelectorAll<HTMLElement>(REPEATED_ITEM_SELECTOR),
  );

  return candidates.filter((candidate) => {
    if (!isVisibleElement(candidate)) {
      return false;
    }

    const parent = candidate.parentElement;

    if (!parent) {
      return false;
    }

    const siblings = Array.from(parent.children).filter((child) => {
      if (!(child instanceof HTMLElement)) {
        return false;
      }

      return (
        child.tagName === candidate.tagName &&
        child.className === candidate.className &&
        isVisibleElement(child)
      );
    });

    return siblings.length > 1;
  });
}

// AR: تبني هذه الدالة مجموعات الحركة حسب التسلسل البصري داخل القسم لتقليل التكرار ومنع تضارب العناصر المتداخلة.
// EN: This helper builds visual animation groups in reading order to avoid duplicates and nested trigger conflicts.
function collectAnimationGroups(section: HTMLElement): AnimationGroup[] {
  const groups: AnimationGroup[] = [];
  const consumed = new Set<HTMLElement>();
  const repeatedItems = collectRepeatedItems(section);

  const registerGroup = (trigger: HTMLElement) => {
    const elements = collectTargets(trigger).filter(
      (element) => !consumed.has(element),
    );

    if (!elements.length) {
      return;
    }

    elements.forEach((element) => consumed.add(element));
    groups.push({ elements, trigger });
  };

  const header = section.querySelector<HTMLElement>("header");
  if (header && isVisibleElement(header)) {
    registerGroup(header);
  }

  repeatedItems.forEach((item) => {
    const elements = collectTargets(item).filter((element) => !consumed.has(element));

    if (!elements.length) {
      return;
    }

    elements.forEach((element) => consumed.add(element));
    groups.push({ elements, trigger: item });
  });

  const standaloneTargets = Array.from(
    section.querySelectorAll<HTMLElement>(PRIORITY_SELECTOR),
  ).filter((element) => isVisibleElement(element) && !consumed.has(element));

  standaloneTargets.forEach((element) => {
    consumed.add(element);
    groups.push({ elements: [element], trigger: element });
  });

  return groups;
}

// AR: يضيف هذا الهوك حركات دخول تلقائية داخل أي قسم مع ScrollTrigger بناءً على العناصر المهمة بصريًا.
// EN: This hook adds automatic ScrollTrigger reveal animations to any section by prioritizing visually important elements.
export function useAutoSectionReveal({
  sectionRef,
  start = "top 78%",
}: UseAutoSectionRevealOptions) {
  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        return;
      }

      const groups = collectAnimationGroups(section);

      groups.forEach(({ elements, trigger }) => {
        gsap.fromTo(
          elements,
          {
            autoAlpha: 0,
            y: 28,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            stagger: elements.length > 1 ? 0.12 : 0,
            overwrite: "auto",
            scrollTrigger: {
              trigger,
              start,
              once: true,
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );
}
