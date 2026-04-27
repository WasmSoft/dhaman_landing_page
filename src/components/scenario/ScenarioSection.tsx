import { scenarioContent } from "@/constants";
import { cn } from "@/lib/utils";

import { ScenarioVisual } from "./ScenarioVisual";

export function ScenarioSection() {
  return (
    <section
      id="scenario"
      dir="rtl"
      className="relative isolate overflow-hidden bg-[#070812] px-4 py-16 text-[#e5e0ee] md:px-8"
    >
      <div className="mx-auto flex w-full max-w-[1216px] flex-col items-center gap-16">
        <header className="flex w-full max-w-[768px] flex-col items-center gap-[15px] text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-[#474555]/30 bg-[#2a2933] px-[17px] py-[5px] text-xs font-medium leading-3 tracking-[0.02em] text-[#6d5dfc]">
            {scenarioContent.eyebrow}
          </span>

          <h2 className="max-w-[350px] text-balance text-5xl font-bold leading-[1.2] text-[#e5e0ee] lg:max-w-[768px]">
            {scenarioContent.title}
          </h2>

          <p className="max-w-[352px] pt-2 text-lg leading-[28.8px] text-[#c8c4d8] lg:max-w-[766px]">
            {scenarioContent.description}
          </p>
        </header>

        <div className="flex w-full flex-col gap-16">
          {scenarioContent.steps.map((step) => {
            const imageFirstOnDesktop = step.desktopImageSide === "left";

            return (
              <article
                key={step.number}
                className="flex w-full flex-col items-center gap-12 lg:flex-row lg:gap-12 lg:[direction:ltr]"
              >
                <div
                  className={cn(
                    "order-1 flex w-full flex-col  items-start text-right lg:min-w-0 lg:flex-1 lg:[direction:rtl]",
                    imageFirstOnDesktop ? "lg:order-2" : "lg:order-1",
                  )}
                >
                  <span
                    className={cn(
                      "text-xs font-bold uppercase leading-3 tracking-[0.1em] opacity-80",
                      step.tone === "orange"
                        ? "text-[#ffb787]"
                        : step.tone === "violet"
                          ? "text-[#c5c0ff]"
                          : "text-[#abc7ff]",
                    )}
                  >
                    {step.label}
                  </span>

                  <h3 className="mt-[15px] text-2xl font-bold leading-[33.6px] text-[#e5e0ee]">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-[356px] text-base leading-[26px] text-[#c8c4d8] lg:max-w-[575px]">
                    {step.description}
                  </p>
                </div>

                <div
                  className={cn(
                    "order-2 w-full lg:min-w-0 lg:flex-1",
                    imageFirstOnDesktop ? "lg:order-1" : "lg:order-2",
                  )}
                >
                  <ScenarioVisual step={step} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
