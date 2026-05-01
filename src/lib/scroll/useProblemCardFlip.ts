"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ProblemCardFlipOptions = {
  once?: boolean;
  start?: string;
};

// AR: هذا الهوك يطبق قلبة ثلاثية الأبعاد لكل بطاقة مشكلة بشكل مستقل عند دخولها إلى مجال الرؤية.
// EN: This hook applies an independent 3D flip animation to each problem card as it enters the viewport.
export function useProblemCardFlip(
  sectionRef: RefObject<HTMLElement | null>,
  options: ProblemCardFlipOptions = {},
) {
  const { once = true, start = "top 85%" } = options;

  useGSAP(
    () => {
      const section = sectionRef.current;

      if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const cards = gsap.utils.toArray<HTMLElement>(".card", section).filter((card) => card.isConnected);

      cards.forEach((card, index) => {
        const glow = card.querySelector<HTMLElement>("[data-card-glow]");

        gsap.set(card, {
          opacity: 0,
          rotateX: 85,
          yPercent: 10,
          z: -48,
          filter: "blur(10px) brightness(0.72)",
          transformPerspective: 1400,
          transformOrigin: "center bottom",
          transformStyle: "preserve-3d",
          willChange: "transform, opacity, filter",
          force3D: true,
        });

        if (glow) {
          gsap.set(glow, {
            opacity: 0.3,
            yPercent: 8,
            scaleY: 0.92,
            willChange: "transform, opacity",
          });
        }

        const timeline = gsap.timeline({
          defaults: {
            ease: "back.out(1.2)",
          },
          scrollTrigger: {
            trigger: card,
            start,
            once,
            toggleActions: once ? "play none none none" : "play none none reverse",
          },
        });

        timeline.to(
          card,
          {
            opacity: 1,
            rotateX: -6,
            yPercent: 0,
            z: 0,
            filter: "blur(0px) brightness(1)",
            duration: 0.52,
            delay: index * 0.05,
          },
          0,
        );

        timeline.to(
          card,
          {
            rotateX: 0,
            duration: 0.56,
            ease: "power3.out",
            clearProps: "willChange",
          },
          ">-0.02",
        );

        if (glow) {
          timeline.to(
            glow,
            {
              opacity: 0.62,
              yPercent: 0,
              scaleY: 1,
              duration: 0.55,
              ease: "power2.out",
              clearProps: "willChange",
            },
            0.08,
          );
        }
      });
    },
    {
      scope: sectionRef,
      dependencies: [once, start],
      revertOnUpdate: true,
    },
  );
}
