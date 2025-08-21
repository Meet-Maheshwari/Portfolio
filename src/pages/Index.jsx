import { ThemeProvider } from "@/components/ThemeProvider.jsx";
import Navigation from "@/components/Navigation.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import AboutSection from "@/components/AboutSection.jsx";
import SkillsSection from "@/components/SkillsSection.jsx";
import ProjectsSection from "@/components/ProjectsSection.jsx";
import ExperienceSection from "@/components/ExperienceSection.jsx";
import ContactSection from "@/components/ContactSection.jsx";
import Footer from "@/components/Footer.jsx";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
