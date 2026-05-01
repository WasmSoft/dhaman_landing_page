"use client";

import { useRef } from "react";

import { problemContent } from "@/constants";
import { useProblemCardFlip } from "@/lib/scroll";

import { ProblemCard } from "./ProblemCard";

// AR: يعرض هذا القسم أسباب تعثر اتفاقات العمل الحر بتسلسل قصصي مطابق لتصميم فيجما.
// EN: This section presents why freelance agreements fail using the storytelling sequence from Figma.
export function ProblemSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useProblemCardFlip(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="problem"
      dir="rtl"
      className="relative isolate overflow-hidden bg-[#070812] px-8 py-16 text-[#e5e0ee]"
    >
      <div className="pointer-events-none absolute inset-0 mx-auto max-w-[1000px] bg-[linear-gradient(180deg,rgb(109_93_252_/_0)_0%,rgb(109_93_252_/_0.05)_50%,rgb(109_93_252_/_0)_100%)] blur-[60px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-center gap-14 lg:gap-10">
        <header className="flex w-full max-w-[768px] flex-col items-center text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-[#474555]/30 bg-[#2a2933]/50 px-[25px] py-[9px] text-xs font-medium uppercase leading-3 tracking-[0.1em] text-[#abc7ff] backdrop-blur-md">
            {problemContent.eyebrow}
          </span>

          <h2 className="mt-6 max-w-[330px] text-balance text-5xl font-bold leading-[1.2] text-[#e5e0ee] lg:max-w-[768px]">
            <span>{problemContent.headlinePrefix} </span>
            <span className="bg-gradient-to-l from-[#6d5dfc] to-[#abc7ff] bg-clip-text text-transparent">
              {problemContent.headlineHighlight}
            </span>
            <span> {problemContent.headlineSuffix}</span>
          </h2>

          <p className="mt-6 max-w-[320px] text-pretty text-lg leading-[1.6] text-[#c8c4d8] lg:max-w-[672px]">
            {problemContent.description}
          </p>
        </header>

        <div className="problem-card-stage flex w-full flex-col items-center gap-[50px] pb-16 [perspective:1400px] [transform-style:preserve-3d] lg:gap-[25px] lg:pb-14">
          {problemContent.cards.map((card) => (
            <ProblemCard key={card.number} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
