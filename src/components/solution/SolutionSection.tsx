import { solutionContent } from "@/constants";

import { SolutionStepCard } from "./SolutionStepCard";

// AR: هذا القسم يحوّل رحلة الاتفاق إلى مخطط خطوات واضح ومتجاوب من الجوال إلى سطح المكتب.
// EN: This section turns the agreement journey into a clear responsive step flow from mobile to desktop.
export function SolutionSection() {
  return (
    <section
      id="solution"
      dir="rtl"
      className="relative isolate overflow-hidden bg-[#070812] px-6 py-16 text-[#e5e0ee] md:px-8"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-16">
        <header className="flex w-full max-w-[768px] flex-col items-center gap-[15px] text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-[#6d5dfc]/20 bg-[#6d5dfc]/10 px-[17px] py-[5px] text-xs font-medium leading-3 tracking-[0.02em] text-[#6d5dfc]">
            {solutionContent.eyebrow}
          </span>

          <h2 className="max-w-[322px] pt-2 text-[32px] font-bold leading-[41.6px] text-[#e5e0ee] md:max-w-[768px]">
            {solutionContent.title}
          </h2>

          <p className="max-w-[332px] text-lg leading-[28.8px] text-[#c8c4d8] md:max-w-[754px]">
            {solutionContent.description}
          </p>
        </header>

        <div className="relative w-full">
          <div className="pointer-events-none absolute left-0 right-0 top-1/4 hidden h-px bg-[#474555]/30 md:block" />
          <div className="pointer-events-none absolute left-0 right-0 top-3/4 hidden h-px bg-[#474555]/30 md:block" />
          <div className="pointer-events-none absolute bottom-1/4 left-[16.66%] top-1/4 hidden w-px bg-[#474555]/30 md:block" />
          <div className="pointer-events-none absolute bottom-1/4 right-[16.66%] top-1/4 hidden w-px bg-[#474555]/30 md:block" />

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
            {solutionContent.steps.map((step) => (
              <SolutionStepCard key={step.number} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
