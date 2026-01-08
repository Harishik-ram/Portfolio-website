import { ThemeToggle } from "../components/ThemeToggle";
import { CosmicBackground } from "../components/CosmicBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectSection";
import { Contact } from "lucide-react";
import { ContactSection } from "../components/ContactSection";
import { FooterSection } from "../components/FooterSection"

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      {/* Theme Toggle */}
      <ThemeToggle></ThemeToggle>

      {/* Background Effects */}
      <CosmicBackground></CosmicBackground>

      {/* Navbar */}
      <Navbar></Navbar>

      {/* Main content */}
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <ProjectsSection></ProjectsSection>
      <ContactSection></ContactSection>
      <FooterSection></FooterSection>

      </div>
  )
};
