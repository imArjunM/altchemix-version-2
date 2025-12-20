import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { TechnologySection } from "@/components/TechnologySection";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <IndustriesSection />
        <ProductsSection />
        <TechnologySection />
        {/* <CTASection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
