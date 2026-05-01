"use client";

import { useRef } from "react";

import { faqContent } from "@/constants";
import { useAutoSectionReveal } from "@/lib/scroll-animation";

import { FaqAccordion } from "./FaqAccordion";

export function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useAutoSectionReveal({ sectionRef });

  return (
    <section
      ref={sectionRef}
      id="faq"
      dir="rtl"
      className="relative isolate flex justify-center overflow-hidden bg-[#070812] px-6 py-16 text-white md:px-8 lg:py-[78px]"
    >
      {/* AR: هذا القسم يعرض الأسئلة الشائعة مع حركة دخول تدريجية تُبرز العنوان والعناصر المتكررة بدون التأثير على سلوك الأكورديون.
      EN: This section presents the FAQ with staggered reveal motion that highlights the heading and repeated items without affecting accordion behavior. */}
      <div className="mx-auto flex w-full max-w-[960px] flex-col items-center gap-12">
        <header className="flex w-full flex-col items-center gap-[15px] text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-[#6d5dfc]/20 bg-[#6d5dfc]/10 px-[17px] py-[5px] text-xs font-medium leading-3 tracking-[0.02em] text-[#c5c0ff]">
            {faqContent.eyebrow}
          </span>

          <h2 className="max-w-[330px] pt-2 text-balance text-5xl font-bold leading-[1.2] text-white md:max-w-[672px]">
            {faqContent.title}
          </h2>

          <p className="max-w-[322px] text-lg leading-[28.8px] text-[#9ca3af] md:max-w-[672px]">
            {faqContent.description}
          </p>
        </header>

        <FaqAccordion
          items={faqContent.items}
          defaultOpenId={faqContent.defaultOpenId}
        />
      </div>
    </section>
  );
}
