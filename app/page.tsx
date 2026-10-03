import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ExamplesSection } from "@/components/ExamplesSection";
import { PricingSection } from "@/components/PricingSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { FaqSection } from "@/components/FaqSection";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <ExamplesSection />
      <PricingSection />
      <ComparisonSection />
      <BenefitsSection />
      <FaqSection />
      <CtaBanner />
      <Footer />
    </main>
  );
}