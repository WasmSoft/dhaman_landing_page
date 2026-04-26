import {
  Bot,
  BriefcaseBusiness,
  Handshake,
  ShieldCheck,
  SquareCode,
  WalletCards,
} from "lucide-react";

import { cn } from "@/lib/utils";
import type { HeroDashboard, HeroDashboardCardIcon } from "@/types";

type HeroPreviewProps = {
  dashboard: HeroDashboard;
};

const cardIcons: Record<HeroDashboardCardIcon, typeof WalletCards> = {
  wallet: WalletCards,
  agreement: Handshake,
  review: Bot,
};

export function HeroPreview({ dashboard }: HeroPreviewProps) {
  return (
    <div className="relative mx-auto w-full max-w-[822px] overflow-hidden rounded-[14px] border border-white/[0.06] bg-[#0d0e1d] shadow-[0_34px_90px_rgb(0_0_0_/_0.45)]">
      <div className="flex min-h-[53px] items-center justify-between bg-[#232433] px-5 sm:px-7">
        <div className="flex items-center gap-3">
          <span className="inline-flex size-7 items-center justify-center rounded-full bg-[#7561ff] text-white shadow-[0_0_22px_rgb(117_97_255_/_0.32)]">
            <BriefcaseBusiness className="size-4" />
          </span>
          <h2 className="text-base font-bold text-white sm:text-[17px]">
            {dashboard.title}
          </h2>
        </div>

        <div className="flex items-center gap-2" dir="ltr" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-white/10" />
          <span className="size-2.5 rounded-full bg-white/10" />
          <span className="size-2.5 rounded-full bg-white/10" />
        </div>
      </div>

      <div className="bg-[#10111f] px-5 py-6 sm:px-7 sm:py-6">
        <div className="grid gap-5 md:grid-cols-3">
          {dashboard.cards.map((card) => {
            const Icon = cardIcons[card.icon];

            return (
              <article
                key={card.label}
                className={cn(
                  "relative min-h-[99px] overflow-hidden rounded-[9px] border border-white/[0.06] bg-[#151625]/80 p-5 text-right",
                  card.accent && "shadow-[inset_0_1px_0_rgb(116_92_255_/_0.28)]",
                )}
              >
                {card.accent ? (
                  <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-l from-[#0ea5ff] to-[#755cff]" />
                ) : null}

                <div className="flex items-start justify-between gap-5">
                  <div className="min-w-0">
                    <p className="text-[11px] leading-5 text-[#8b899c]">{card.label}</p>
                    <p className="mt-1 text-lg font-bold leading-7 text-white sm:text-xl">
                      {card.value}
                    </p>
                  </div>
                  <Icon className="mt-1 size-4 shrink-0 text-[#b5b8ff]" />
                </div>

                {typeof card.progress === "number" ? (
                  <div className="mt-4 flex items-center gap-2" dir="ltr">
                    <span className="text-[9px] font-medium text-[#a6a4b6]">
                      {card.progress}%
                    </span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.08]">
                      <div
                        className="h-full rounded-full bg-[#755cff]"
                        style={{ width: `${card.progress}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <p className="mt-1 text-[11px] leading-5 text-[#8b899c]">
                    {card.description}
                  </p>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col gap-5 rounded-[11px] border border-white/[0.05] bg-[#141523]/70 p-5 text-right sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-4">
            <span className="inline-flex size-9 items-center justify-center rounded-full border border-[#2d73ba]/55 bg-[#173456]/45 text-[#87bdff]">
              <SquareCode className="size-4" />
            </span>
            <div>
              <h3 className="text-sm font-medium text-[#d7d5e8]">
                {dashboard.milestone.title}
              </h3>
              <p className="mt-0.5 text-[10px] text-[#767588]">
                {dashboard.milestone.project}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 sm:gap-7">
            <div>
              <p className="text-[10px] text-[#8b899c]">
                {dashboard.milestone.valueLabel}
              </p>
              <p className="mt-0.5 text-xs font-medium text-[#d9d7e8]">
                {dashboard.milestone.value}
              </p>
            </div>
            <span className="inline-flex h-6 items-center gap-1.5 rounded-full border border-[#0d9083]/55 bg-[#053f43]/65 px-3 text-[10px] font-medium text-[#2ed9c7]">
              <ShieldCheck className="size-3" />
              {dashboard.milestone.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
