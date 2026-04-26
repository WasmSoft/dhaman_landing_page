import Image from "next/image";

import { cn } from "@/lib/utils";
import type { ScenarioStep } from "@/types";

type ScenarioVisualProps = {
  step: ScenarioStep;
};

export function ScenarioVisual({ step }: ScenarioVisualProps) {
  const glowClass =
    step.tone === "orange"
      ? "bg-[#ba5c00]/5 lg:inset-[16px_16px_-16px_-16px]"
      : step.tone === "violet"
        ? "bg-[#6d5dfc]/10 lg:inset-[16px_-16px_-16px_16px]"
        : "bg-[#6d5dfc]/5 lg:inset-[16px_-16px_-16px_16px]";

  return (
    <div className="relative flex w-full flex-col items-start">
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-[16px_-16px_-16px_16px] rounded-xl blur-xl",
          glowClass,
        )}
      />

      <div className="relative w-full rounded-xl border border-[#474555]/30 bg-[#2a2933]/80 p-[17px] shadow-[0_25px_50px_-12px_rgb(0_0_0_/_0.25)] backdrop-blur-md">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg opacity-90 mix-blend-screen">
          <Image
            src={step.image}
            alt={step.imageAlt}
            fill
            sizes="(min-width: 1024px) 550px, calc(100vw - 66px)"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-lg bg-white/20 mix-blend-saturation"
          />
        </div>
      </div>
    </div>
  );
}
