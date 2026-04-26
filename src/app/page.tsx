import { FaqSection } from "@/components/faq";
import { HeroSection } from "@/components/hero";
import { ProblemSection } from "@/components/problem";
import { ScenarioSection } from "@/components/scenario";
import { SecuritySection } from "@/components/security";
import { SolutionSection } from "@/components/solution";

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ScenarioSection />
      <SecuritySection />
      <FaqSection />
    </main>
  );
}
