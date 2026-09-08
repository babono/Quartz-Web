import { Hero } from "@/components/home/Hero";
import { QuotaSection } from "@/components/home/QuotaSection";
import { GymSection } from "@/components/home/GymSection";
import { EconomySection } from "@/components/home/EconomySection";
import { LeaderboardSection } from "@/components/home/LeaderboardSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { AccessibilitySection } from "@/components/home/AccessibilitySection";
import { CtaSection } from "@/components/home/CtaSection";
import { FaqSection } from "@/components/home/FaqSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuotaSection />
      <GymSection />
      <EconomySection />
      <LeaderboardSection />
      <TechStackSection />
      <AccessibilitySection />
      <CtaSection />
      <FaqSection />
    </>
  );
}
