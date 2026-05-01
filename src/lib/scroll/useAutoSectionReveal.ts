"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

import type { AutoAnimateGroup, SectionAnimationOptions } from "@/types";

import { collectAutoAnimateGroups } from "./helpers";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function getRevealVars(element: HTMLElement, group: AutoAnimateGroup) {
  const tagName = element.tagName.toLowerCase();

  if (group.kind === "repeated") {
    return { autoAlpha: 0, y: 36, scale: 0.98 };
  }

  if (/^h[1-6]$/.test(tagName)) {
    return { autoAlpha: 0, y: 42 };
  }

  if (tagName === "p") {
    return { autoAlpha: 0, y: 26 };
  }

  if (tagName === "img") {
    return { autoAlpha: 0, y: 44, scale: 0.94 };
  }

  return { autoAlpha: 0, y: 20, scale: 0.98 };
}

// AR: هذا الهوك يربط كل قسم بـ GSAP و ScrollTrigger ويطبق أنيميشن دخول تلقائي بحسب العناصر الأهم بصريًا.
// EN: This hook connects a section to GSAP and ScrollTrigger and applies automatic reveal animation based on the most visual elements.
export function useAutoSectionReveal(
  sectionRef: RefObject<HTMLElement | null>,
  options: SectionAnimationOptions = {},
) {
  const { once = true, start = "top 78%" } = options;

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const groups = collectAutoAnimateGroups(section);

      groups.forEach((group) => {
        const elements = group.elements.filter((element) => element.isConnected);

        if (elements.length === 0) {
          return;
        }

        gsap.set(elements, { willChange: "opacity, transform" });

        const timeline = gsap.timeline({
          defaults: {
            duration: group.kind === "repeated" ? 0.8 : 0.72,
            ease: "power2.out",
          },
          scrollTrigger: {
            trigger: group.container,
            start,
            once,
            toggleActions: once ? "play none none none" : "play none none reverse",
          },
        });

        if (group.kind === "repeated") {
          timeline.fromTo(
            elements,
            getRevealVars(elements[0], group),
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              stagger: 0.14,
              clearProps: "willChange",
            },
            0,
          );

          return;
        }

        elements.forEach((element, index) => {
          timeline.fromTo(
            element,
            getRevealVars(element, group),
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              clearProps: "willChange",
            },
            index === 0 ? 0 : "<+=0.1",
          );
        });
      });
    },
    {
      scope: sectionRef,
      dependencies: [once, start],
      revertOnUpdate: true,
    },
  );
}
