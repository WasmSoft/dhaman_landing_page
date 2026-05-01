"use client";

import Image from "next/image";

import { useSecurityOrbitAnimation } from "@/lib/security";
import type { SecurityNode } from "@/types";

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
  const orbitRef = useSecurityOrbitAnimation({ nodes });

  return (
    // AR: هذا المدار يبني دوائر الحماية المتداخلة ويضع كل نقطة على نصف قطر محسوب لتدور بسلاسة حول المركز.
    // EN: This orbit builds the nested protection rings and places each node on a computed radius so it can orbit smoothly around the center.
    <div ref={orbitRef} className="relative aspect-square w-full max-w-[800px]">
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
      data-orbit-node={node.id}
      className="orbit-node pointer-events-none absolute flex items-start justify-center"
      style={{ inset: node.orbitInset, rotate: `${node.startAngle}deg` }}
    >
      <div className="orbit-anchor relative -translate-y-1/2">
        <div className="orbit-card flex flex-col items-center gap-2">
          <div
            data-orbit-shell
            className="relative flex size-10 items-center justify-center rounded-2xl border border-white/20 bg-[#201f28]/60 p-px shadow-[0_8px_16px_rgb(109_93_252_/_0.2)] backdrop-blur-md sm:size-16 md:size-14 lg:size-20 lg:rounded-[24px]"
          >
            <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full border border-[#e4dfff]/20 bg-[#35343e] text-[10px] font-medium leading-none tracking-[0.02em] text-[#e4dfff]/90 shadow-sm lg:-right-3 lg:-top-3 lg:size-7 lg:text-xs">
              {node.number}
            </span>
            <Image
              data-orbit-icon
              src={node.icon}
              alt=""
              width={33}
              height={33}
              className="size-6 object-contain lg:size-8.5"
            />
          </div>

          <span
            data-orbit-label
            className="whitespace-nowrap text-center text-xs font-medium leading-6 text-[#e5e0ee] md:text-sm lg:text-base"
          >
            {node.label}
          </span>
        </div>
      </div>
    </div>
  );
}
