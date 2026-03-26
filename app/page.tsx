import dynamic from "next/dynamic";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";

const DiagnosticApp = dynamic(
  () => import("@/components/diagnostic/DiagnosticApp"),
  {
    loading: () => (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-2 border-amber/30 border-t-amber rounded-full animate-spin" />
      </div>
    ),
  }
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <DiagnosticApp />
    </>
  );
}
