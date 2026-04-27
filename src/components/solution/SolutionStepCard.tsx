import {
  CheckCircle2,
  FileText,
  LogIn,
  ShieldCheck,
  Sparkles,
  UploadCloud,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import type { SolutionStep, SolutionStepIcon } from "@/types";

const iconMap: Record<SolutionStepIcon, LucideIcon> = {
  agreement: FileText,
  milestones: LogIn,
  shield: ShieldCheck,
  upload: UploadCloud,
  ai: Sparkles,
  release: CheckCircle2,
};

type SolutionStepCardProps = {
  step: SolutionStep;
};

// AR: كرت خطوة الحل يعرض رقم المرحلة وأيقونتها وحالتها البصرية بنفس ترتيب فيجما.
// EN: The solution step card presents the phase number, icon, and visual state in the Figma order.
export function SolutionStepCard({ step }: SolutionStepCardProps) {
  const Icon = iconMap[step.icon];
  const isAi = step.tone === "ai";
  const isSuccess = step.tone === "success";

  return (
    <article
      className={cn(
        "relative z-10 flex min-h-[218px] flex-col items-start gap-2 rounded-xl border bg-[#111426]/80 p-[33px] text-right shadow-[0_24px_60px_-34px_rgb(0_0_0_/_0.8)] backdrop-blur-md",
        isAi
          ? "border-[#6d5dfc]/30 shadow-[#6d5dfc]/30"
          : isSuccess
            ? "border-[#10b981]/30 shadow-[#10b981]/10"
            : "border-white/10",
      )}
    >
      <div
        className={cn(
          "flex size-12 items-center justify-center rounded-lg border",
          isAi
            ? "border-[#6d5dfc]/50 bg-[linear-gradient(135deg,rgb(109_93_252_/_0.2),rgb(4_109_217_/_0.2))]"
            : isSuccess
              ? "border-[#10b981]/20 bg-[#10b981]/10"
              : "border-white/5 bg-[#201f28]",
        )}
      >
        <Icon
          aria-hidden="true"
          className={cn(
            "size-[22px]",
            isAi ? "text-[#6d5dfc]" : isSuccess ? "text-[#10b981]" : "text-[#a49cff]",
          )}
          strokeWidth={2.2}
        />
      </div>

      <h3
        className={cn(
          "pt-4 text-xl font-bold leading-[30px]",
          isAi ? "text-[#6d5dfc]" : isSuccess ? "text-[#10b981]" : "text-[#e5e0ee]",
        )}
      >
        {step.title}
      </h3>

      <p className="max-w-[304px] text-sm leading-[21px] text-[#c8c4d8]">
        {step.description}
      </p>

      <span
        className={cn(
          "absolute right-8 top-[-16px] flex size-8 items-center justify-center rounded-full border text-xs font-medium leading-3 tracking-[0.02em]",
          isAi
            ? "border-[#c5c0ff] bg-[#6d5dfc] text-white"
            : isSuccess
              ? "border-[#10b981]/50 bg-[#10b981]/20 text-[#10b981]"
              : "border-[#928ea1] bg-[#35343e] text-[#e5e0ee]",
        )}
      >
        {step.number}
      </span>
    </article>
  );
}
