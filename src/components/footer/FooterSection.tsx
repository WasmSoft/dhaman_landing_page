import { footerContent } from "@/constants";

import { FinalCtaCard } from "./FinalCtaCard";

export function FooterSection() {
  return (
    <div className="isolate flex flex-col bg-[#070812] pt-0 lg:pt-[124px]">
      <FinalCtaCard cta={footerContent.cta} />

      <footer className="relative z-10 border-t border-white/5 bg-[#020617] pt-px text-right shadow-[0_-10px_20px_rgb(0_0_0_/_0.5)]">
        <div className="mx-auto w-full max-w-[1280px] px-8 py-16">
          <div className="grid gap-8 border-b border-white/10 pb-8 lg:grid-cols-4 lg:gap-12">
            <div className="flex flex-col items-end gap-2 lg:col-start-4">
              <p className="text-[30px] font-black leading-9 tracking-[-0.025em] text-[#f8fafc]">
                {footerContent.brand.name}
              </p>
              <p className="pt-[7px] text-base font-bold leading-[25.6px] text-[#c8c4d8]">
                {footerContent.brand.tagline}
              </p>
              <p className="max-w-[292px] text-sm leading-[21px] text-[#928ea1] lg:max-w-[248px]">
                {footerContent.brand.description}
              </p>
            </div>

            <nav
              aria-label="روابط تذييل الصفحة"
              className="grid grid-cols-2 gap-x-6 gap-y-8 lg:col-span-3 lg:col-start-1 lg:row-start-1 lg:grid-cols-3"
            >
              {footerContent.columns.map((column) => (
                <div key={column.title} className="flex flex-col items-end gap-6">
                  <h3 className="text-xl font-bold leading-[30px] text-[#e5e0ee]">
                    {column.title}
                  </h3>
                  <ul className="flex flex-col items-end gap-4">
                    {column.links.map((link) => (
                      <li key={`${column.title}-${link.label}`}>
                        <a
                          href={link.href}
                          className="text-base leading-[26px] text-[#64748b] transition-colors hover:text-[#abc7ff]"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center justify-between gap-5 pt-[25px] lg:flex-row-reverse">
            <p className="max-w-[320px] text-center text-sm leading-[21px] text-[#928ea1] lg:max-w-none lg:text-right">
              {footerContent.copyright}
            </p>

            <nav
              aria-label="روابط قانونية ومساندة"
              className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:justify-start"
            >
              {footerContent.bottomLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm leading-[22.75px] text-[#64748b] transition-colors hover:text-[#abc7ff]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
