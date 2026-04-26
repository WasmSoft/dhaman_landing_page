import { securityContent } from "@/constants";

import { SecurityOrbit } from "./SecurityOrbit";

export function SecuritySection() {
  return (
    <section
      id="security"
      dir="rtl"
      className="relative isolate flex justify-center overflow-hidden bg-[#070812] px-8 py-[72px] text-[#e5e0ee] lg:py-16"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 size-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d5dfc]/10 blur-[60px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-[-27%] bottom-[-6%] top-[25%] rounded-full bg-[#046dd9]/10 blur-[50px] lg:inset-x-[25%] lg:bottom-[15%] lg:top-[33%]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center gap-16">
        <header className="flex w-full max-w-[768px] flex-col items-center gap-[15px] text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-[#6d5dfc]/30 bg-[#6d5dfc]/20 px-[17px] py-[5px] text-xs font-medium leading-3 tracking-[0.02em] text-[#e4dfff] backdrop-blur-sm">
            {securityContent.eyebrow}
          </span>

          <h2 className="max-w-[300px] text-balance text-5xl font-bold leading-[1.2] text-[#e5e0ee] lg:max-w-[768px]">
            {securityContent.title}
          </h2>

          <p className="max-w-[324px] pt-2 text-lg leading-[28.8px] text-[#c8c4d8] lg:max-w-[748px]">
            {securityContent.description}
          </p>
        </header>

        <SecurityOrbit
          coreImage={securityContent.coreImage}
          coreImageAlt={securityContent.coreImageAlt}
          nodes={securityContent.nodes}
        />
      </div>
    </section>
  );
}
