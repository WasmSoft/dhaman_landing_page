import { ShieldCheck } from "lucide-react";

import { Button } from "@/components/shared/button";
import { heroContent } from "@/constants";
import { cn } from "@/lib/utils";

import { HeroActions } from "./HeroActions";
import { HeroPreview } from "./HeroPreview";

export function HeroSection() {
  return (
    <section
      id="hero"
      dir="rtl"
      className="relative isolate min-h-screen overflow-hidden bg-[#030518] px-4 pb-12 pt-5 text-[#f4f1ff] sm:px-8 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_13%_10%,rgb(118_92_255_/_0.2),transparent_30%),radial-gradient(circle_at_80%_26%,rgb(17_70_134_/_0.18),transparent_34%),linear-gradient(135deg,#110d2a_0%,#030817_48%,#020511_100%)]" />
      <div className="pointer-events-none absolute -left-40 top-0 size-[420px] rounded-full bg-[#725cff]/15 blur-[110px]" />
      <div className="pointer-events-none absolute -right-48 top-12 size-[480px] rounded-full bg-[#0b3269]/20 blur-[120px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[898px] flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:justify-between">
        <div className="flex items-center gap-8 md:gap-10">
          <a href="#hero" className="text-[22px] font-extrabold leading-none text-white">
            {heroContent.brand}
          </a>

          <nav className="hidden items-center gap-7 text-[11px] font-medium text-[#8e91a6] sm:flex">
            {heroContent.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "relative py-1 transition-colors hover:text-white",
                  item.isActive && "font-bold text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-[#7760ff]",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <Button
          asChild
          className="h-6 rounded-full bg-[#715bff] px-5 text-[11px] font-bold text-white shadow-[0_10px_26px_rgb(113_91_255_/_0.32)] hover:bg-[#806cff]"
        >
          <a href={heroContent.headerAction.href}>{heroContent.headerAction.label}</a>
        </Button>
      </div>

      <div className="relative z-10 mx-auto mt-[22px] flex max-w-[660px] flex-col items-center text-center">
        <div className="inline-flex h-[22px] items-center gap-1.5 rounded-full border border-white/[0.07] bg-[#1b1d2b]/90 px-3 text-[10px] font-medium text-[#c1bfd3] shadow-[0_8px_22px_rgb(0_0_0_/_0.2)]">
          <ShieldCheck className="size-3 text-[#dad7ff]" />
          {heroContent.eyebrow}
        </div>

        <h1 className="mt-6 max-w-[680px] text-balance text-[2.35rem] font-extrabold leading-[1.24] tracking-[-0.045em] text-[#f6f2ff] sm:text-[3.2rem] lg:text-[3.35rem]">
          {heroContent.headline}
        </h1>

        <p className="mt-5 max-w-[520px] text-pretty text-sm font-medium leading-7 text-[#a7a6b8] sm:text-[15px] sm:leading-8">
          {heroContent.description}
        </p>

        <div className="mt-9">
          <HeroActions action={heroContent.primaryAction} />
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-[74px] w-full">
        <HeroPreview dashboard={heroContent.dashboard} />
      </div>
    </section>
  );
}
