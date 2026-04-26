import { FileText, Gavel, ImageIcon, Puzzle, WalletCards } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ProblemCard as ProblemCardType, ProblemCardIcon } from "@/types";

const iconMap: Record<ProblemCardIcon, LucideIcon> = {
  document: FileText,
  wallet: WalletCards,
  puzzle: Puzzle,
  image: ImageIcon,
  gavel: Gavel,
};

type ProblemCardProps = {
  card: ProblemCardType;
};

// AR: كرت المشكلة يحافظ على حركة البطاقات المائلة كما في تصميم فيجما مع تخطيط متجاوب.
// EN: The problem card keeps the tilted Figma card motion while adapting its layout responsively.
export function ProblemCard({ card }: ProblemCardProps) {
  const Icon = iconMap[card.icon];
  const isWarning = card.icon === "gavel";

  return (
    <article
      className={cn(
        "relative w-full max-w-[326px] overflow-hidden rounded-[32px] border border-white/10 bg-[#111426]/80 p-8 text-right shadow-[0_30px_60px_-15px_rgb(0_0_0_/_0.5)] backdrop-blur-lg transition-transform duration-300 lg:max-w-[896px] lg:p-[33px]",
        card.rotation,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#6d5dfc]/20 to-transparent opacity-50 blur-xl" />

      <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center">
        <div className="order-2 flex min-w-0 flex-1 flex-col items-start gap-[7px] lg:order-1">
          <span className="text-xs font-medium uppercase leading-3 tracking-wider text-[#928ea1]">
            مشكلة {card.number}
          </span>

          <h3 className="text-2xl font-bold leading-[1.4] text-[#e5e0ee]">
            {card.title}
          </h3>

          <p className="max-w-[260px] text-pretty text-base leading-[26px] text-[#c8c4d8] lg:max-w-none">
            {card.description}
          </p>
        </div>

        <div className="order-1 flex size-16 shrink-0 items-center justify-center rounded-full border border-[#474555]/30 bg-[#201f28]/50 lg:order-2">
          <Icon
            className={cn("size-6", isWarning ? "text-[#ff9b9b]" : "text-[#abc7ff]")}
            strokeWidth={2.2}
            aria-hidden="true"
          />
        </div>
      </div>
    </article>
  );
}
