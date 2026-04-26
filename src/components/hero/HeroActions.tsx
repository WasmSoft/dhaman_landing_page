import { Button } from "@/components/shared/button";
import type { HeroAction } from "@/types";

type HeroActionsProps = {
  action: HeroAction;
};

export function HeroActions({ action }: HeroActionsProps) {
  return (
    <Button
      asChild
      size="lg"
      className="h-[41px] rounded-full bg-[#745cff] px-8 text-[13px] font-bold text-white shadow-[0_14px_32px_rgb(116_92_255_/_0.38)] hover:bg-[#836dff]"
    >
      <a href={action.href}>{action.label}</a>
    </Button>
  );
}
