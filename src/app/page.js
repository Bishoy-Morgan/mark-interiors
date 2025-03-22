import AdvantagesSection from "./components/AdvantagesSection";
import ContactSection from "./components/ContactSection";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";


export default function Home() {
  return (
    <main>
      <Hero />
      <AdvantagesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
