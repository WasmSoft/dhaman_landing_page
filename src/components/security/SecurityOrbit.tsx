import Image from "next/image";

import { cn } from "@/lib/utils";
import type { SecurityNode, SecurityNodeId } from "@/types";

const nodePositions: Record<SecurityNodeId, string> = {
  "secure-link": "left-[62%] top-[3%] lg:left-[65%] lg:top-[3%]",
  "clear-record": "left-[4%] top-[21%] lg:left-[9.5%] lg:top-[23%]",
  "visible-policies": "left-[13%] top-[70%] lg:left-[18%] lg:top-[73%]",
  "payment-status": "left-[66%] top-[74%] lg:left-[70%] lg:top-[78%]",
  "ai-review": "left-[76%] top-[34%] lg:left-[85%] lg:top-[38%]",
};

type SecurityOrbitProps = {
  coreImage: string;
  coreImageAlt: string;
  nodes: SecurityNode[];
};

export function SecurityOrbit({
  coreImage,
  coreImageAlt,
  nodes,
}: SecurityOrbitProps) {
  return (
    <div className="relative aspect-square w-full max-w-[800px]">
      <div
        aria-hidden="true"
        className="absolute inset-[10%] rounded-full border border-[#e4dfff]/10 shadow-[inset_0_0_50px_1px_rgb(109_93_252_/_0.05)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-[20%] rounded-full border border-[#e4dfff]/20 shadow-[inset_0_0_30px_1px_rgb(109_93_252_/_0.1)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-[30%] rounded-full border border-[#e4dfff]/30 shadow-[inset_0_0_20px_1px_rgb(109_93_252_/_0.15)]"
      />

      <div className="absolute left-1/2 top-1/2 size-[52%] max-h-48 max-w-48 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-[#6d5dfc]/60 bg-[#111426]/90 shadow-[0_0_60px_0_rgb(109_93_252_/_0.5)] backdrop-blur-md md:size-[32%] lg:size-[24%]">
        <Image
          src={coreImage}
          alt={coreImageAlt}
          fill
          sizes="(min-width: 1024px) 192px, 52vw"
          className="scale-105 object-cover opacity-90"
          priority
        />
      </div>

      {nodes.map((node) => (
        <SecurityOrbitNode key={node.id} node={node} />
      ))}
    </div>
  );
}

type SecurityOrbitNodeProps = {
  node: SecurityNode;
};

function SecurityOrbitNode({ node }: SecurityOrbitNodeProps) {
  return (
    <div
      className={cn(
        "absolute flex -translate-x-1/2 flex-col items-center gap-2",
        nodePositions[node.id],
      )}
    >
      <div className="relative flex size-14 items-center justify-center rounded-2xl border border-white/20 bg-[#201f28]/60 p-px shadow-[0_8px_16px_rgb(109_93_252_/_0.2)] backdrop-blur-md sm:size-16 lg:size-20 lg:rounded-[24px]">
        <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full border border-[#e4dfff]/20 bg-[#35343e] text-[10px] font-medium leading-none tracking-[0.02em] text-[#e4dfff]/90 shadow-sm lg:-right-3 lg:-top-3 lg:size-7 lg:text-xs">
          {node.number}
        </span>
        <Image
          src={node.icon}
          alt=""
          width={33}
          height={33}
          className="size-7 object-contain lg:size-[33px]"
        />
      </div>

      <span className="whitespace-nowrap text-center text-sm font-medium leading-6 text-[#e5e0ee] lg:text-base">
        {node.label}
      </span>
    </div>
  );
}
