"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types";

type FaqAccordionProps = {
  items: FaqItem[];
  defaultOpenId: string;
};

export function FaqAccordion({ items, defaultOpenId }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);

  return (
    <div className="flex w-full flex-col gap-4">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-button-${item.id}`;

        return (
          <article
            key={item.id}
            className={cn(
              "overflow-hidden rounded-xl border bg-[#111426]/80 p-px backdrop-blur-md transition-[border-color,box-shadow,background-color] duration-300",
              isOpen
                ? "border-[#6d5dfc]/50 shadow-[0_0_20px_0_rgb(109_93_252_/_0.3)]"
                : "border-white/10",
            )}
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className={cn(
                "flex w-full items-center justify-between gap-5 p-6 text-right transition-colors duration-300",
                isOpen && "bg-[#6d5dfc]/5",
              )}
            >
              <span
                className={cn(
                  "text-xl font-bold leading-[30px] transition-colors duration-300",
                  isOpen ? "text-[#6d5dfc]" : "text-white",
                )}
              >
                {item.question}
              </span>

              <ChevronDown
                aria-hidden="true"
                className={cn(
                  "size-4 shrink-0 text-[#9ca3af] transition-[color,transform] duration-300",
                  isOpen && "rotate-180 text-[#6d5dfc]",
                )}
                strokeWidth={2.2}
              />
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="px-6 pb-[25px] text-right text-base leading-[25.6px] text-[#9ca3af]">
                  {item.answer}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
