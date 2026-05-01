"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import type { SecurityNode } from "@/types";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type UseSecurityOrbitAnimationOptions = {
  nodes: SecurityNode[];
};

// AR: هذا الهوك يربط كل عقدة بمسار دائري مستقل ويجعل الحركة مستمرة بدون قفزة عند نهاية كل دورة.
// EN: This hook gives each node its own circular orbit and keeps the motion continuous without a jump at the end of each loop.
export function useSecurityOrbitAnimation({
  nodes,
}: UseSecurityOrbitAnimationOptions) {
  const scopeRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const scope = scopeRef.current;
      if (!scope || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const orbitNodes = nodes
        .map((node) => {
          const element = scope.querySelector<HTMLElement>(
            `[data-orbit-node="${node.id}"]`,
          );

          return element ? { config: node, element } : null;
        })
        .filter(
          (entry): entry is { config: SecurityNode; element: HTMLElement } =>
            Boolean(entry),
        );

      if (!orbitNodes.length) {
        return;
      }

      let hasStarted = false;

      const introTimeline = gsap.timeline({
        paused: true,
        defaults: {
          ease: "power2.out",
          duration: 1.1,
        },
      });

      orbitNodes.forEach(({ element }, index) => {
        const shell = element.querySelector<HTMLElement>("[data-orbit-shell]");
        const label = element.querySelector<HTMLElement>("[data-orbit-label]");
        const icon = element.querySelector<HTMLElement>("[data-orbit-icon]");

        gsap.set(element, {
          opacity: 0,
          scale: 0.82,
          y: 18,
          willChange: "transform, opacity",
          transformOrigin: "center center",
        });

        if (icon) {
          gsap.set(icon, {
            willChange: "transform, opacity",
            transformOrigin: "center center",
          });
        }

        introTimeline.to(
          element,
          {
            opacity: 1,
            scale: 1,
            y: 0,
          },
          index * 0.08,
        );

        if (shell) {
          introTimeline.fromTo(
            shell,
            { boxShadow: "0 0 0 rgba(109, 93, 252, 0)" },
            {
              boxShadow: "0 10px 30px rgba(109, 93, 252, 0.22)",
              duration: 0.9,
            },
            index * 0.08,
          );
        }

        if (label) {
          introTimeline.fromTo(
            label,
            { opacity: 0.45 },
            { opacity: 1, duration: 0.8 },
            index * 0.08 + 0.14,
          );
        }
      });

      const orbitTweens = orbitNodes.flatMap(({ config, element }, index) => {
        const shell = element.querySelector<HTMLElement>("[data-orbit-shell]");
        const icon = element.querySelector<HTMLElement>("[data-orbit-icon]");
        const direction = config.orbitDirection;

        const tweens = [
          gsap.to(element, {
            rotation: direction === 1 ? "+=360" : "-=360",
            duration: config.orbitDuration,
            ease: "none",
            repeat: -1,
            paused: true,
            force3D: true,
            transformOrigin: "center center",
          }),
        ];

        if (shell) {
          tweens.push(
            gsap.to(shell, {
              rotation: direction === 1 ? "-=360" : "+=360",
              duration: config.orbitDuration,
              ease: "none",
              repeat: -1,
              paused: true,
              force3D: true,
              transformOrigin: "center center",
            }),
          );
        }

        if (icon) {
          tweens.push(
            gsap.to(icon, {
              scale: 1.08,
              opacity: 0.92,
              duration: 2 + index * 0.12,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
              paused: true,
            }),
          );
        }

        return tweens;
      });

      ScrollTrigger.create({
        trigger: scope,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          if (!hasStarted) {
            introTimeline.play(0);
            hasStarted = true;
          }

          orbitTweens.forEach((tween) => tween.play());
        },
        onEnterBack: () => {
          orbitTweens.forEach((tween) => tween.play());
        },
        onLeave: () => {
          orbitTweens.forEach((tween) => tween.pause());
        },
        onLeaveBack: () => {
          orbitTweens.forEach((tween) => tween.pause());
        },
      });
    },
    { dependencies: [nodes], scope: scopeRef },
  );

  return scopeRef;
}
