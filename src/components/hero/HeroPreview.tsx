import Image from "next/image";

import type { HeroDashboard } from "@/types";

type HeroPreviewProps = {
  dashboard: HeroDashboard;
};

export function HeroPreview({ dashboard }: HeroPreviewProps) {
  return (
    <div className="mx-auto w-full max-w-[822px] px-4 sm:px-0">
      {/* AR: هذه الحاوية تعرض صورة المعاينة الحقيقية في المنتصف مع توهج علوي عند المرور.
          EN: This wrapper centers the real preview image and reveals a top glow on hover. */}
      <div className="group relative flex justify-center">
        <div className="pointer-events-none absolute left-1/2 top-0 h-20 w-[68%] -translate-x-1/2 rounded-full bg-[#7c6cff]/35 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0e1d] shadow-[0_34px_90px_rgb(0_0_0_/_0.45)] transition-transform duration-300 group-hover:-translate-y-1">
          <Image
            src="/hero/images/image.png"
            alt={dashboard.title}
            width={2500}
            height={1800}
            className="h-auto w-full max-w-[822px] rounded-[28px] object-cover"
            priority
          />
        </div>
      </div>
       </div> 

  );
}
