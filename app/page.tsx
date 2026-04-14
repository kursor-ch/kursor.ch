"use client";

import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import OpportunitySection from "@/components/OpportunitySection";
import StatsBand from "@/components/StatsBand";
import NewsletterSection from "@/components/NewsletterSection";

export default function HomePage() {
  // iOS Safari :active fix (preserved from previous implementation)
  useEffect(() => {
    document.body.addEventListener("touchstart", function () {}, { passive: true });
  }, []);

  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <ServicesSection />
      <OpportunitySection />
      <StatsBand />
      <NewsletterSection />
    </>
  );
}
