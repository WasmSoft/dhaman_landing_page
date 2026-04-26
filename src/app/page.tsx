import { HeroSection } from "@/components/hero";
import { ProblemSection } from "@/components/problem";

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <ProblemSection />
    </main>
  );
}
