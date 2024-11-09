import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import Testimonials from "@/components/testimonials";
import CTASection from "@/components/cta-section";

export default function Home() {
  return (
    <main className="dark min-h-screen bg-black text-white">
      {/* <BackgroundGradientAnimation /> */}
      <div className="absolute inset-0 z-10">
        <HeroSection />
        <FeaturesSection />
        {/* <BenefitsSection /> */}
        <Testimonials />
        <CTASection />
      </div>
    </main>
  );
}