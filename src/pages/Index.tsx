import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AssetsSection from "@/components/AssetsSection";
import TeamSection from "@/components/TeamSection";
import InternationalSection from "@/components/InternationalSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-cs-dark">
      <Header />
      <HeroSection />
      <AboutSection />
      <AssetsSection />
      <TeamSection />
      <InternationalSection />
      <ContactSection />
    </div>
  );
};

export default Index;
