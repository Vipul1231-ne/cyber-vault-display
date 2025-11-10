import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HighlightsSection from "@/components/HighlightsSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="relative overflow-hidden">
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
};

export default Index;
