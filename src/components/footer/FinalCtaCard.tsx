import { Button } from "@/components/shared/button";
import type { FooterCtaContent } from "@/types";

type FinalCtaCardProps = {
  cta: FooterCtaContent;
};

export function FinalCtaCard({ cta }: FinalCtaCardProps) {
  return (
    <section
      id="start"
      dir="rtl"
      className="relative z-20 w-full bg-[#070812] px-4 py-16 lg:px-32"
    >
      <div className="relative mx-auto flex w-full max-w-[1024px] flex-col items-center gap-[15px] overflow-hidden rounded-xl border border-white/10 bg-[#111426]/80 p-8 text-center text-[#e5e0ee] shadow-[0_0_40px_0_rgb(109_93_252_/_0.15)] backdrop-blur-md lg:p-12">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 bottom-1/2 bg-gradient-to-b from-[#6d5dfc]/20 to-[#6d5dfc]/0 blur-[32px]"
        />

        <span className="relative inline-flex items-center justify-center rounded-full bg-[#6d5dfc]/10 px-4 py-2 text-xs font-medium uppercase leading-3 tracking-[0.05em] text-[#6d5dfc]">
          {cta.eyebrow}
        </span>

        <h2 className="relative max-w-[304px] pt-2 text-[32px] font-bold leading-[41.6px] md:max-w-[768px]">
          {cta.title}
        </h2>

        <p className="relative max-w-[304px] text-lg leading-[28.8px] text-[#c8c4d8] md:max-w-[672px]">
          {cta.description}
        </p>

        <div className="relative flex w-full flex-col gap-4 pt-4 md:w-auto md:flex-row-reverse md:justify-center">
          <Button
            asChild
            size="lg"
            className="h-[58px] w-full rounded-lg bg-[#6d5dfc] px-8 text-base font-normal leading-[25.6px] text-white shadow-[0_0_10px_rgb(109_93_252_/_0.3)] hover:bg-[#7d6dff] md:w-auto"
          >
            <a href={cta.primaryAction.href}>{cta.primaryAction.label}</a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-[58px] w-full rounded-lg border-[#abc7ff] bg-transparent px-8 text-base font-normal leading-[25.6px] text-[#abc7ff] hover:bg-[#abc7ff]/10 hover:text-[#d5e3ff] md:w-auto"
          >
            <a href={cta.secondaryAction.href}>{cta.secondaryAction.label}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
