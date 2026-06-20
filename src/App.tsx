import { ThemeProvider } from "@/hooks/useTheme";
import { ResumeProvider } from "@/components/shared/ResumeModal";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress, ScrollToTop } from "@/components/layout/ScrollUtils";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function App() {
  return (
    <ThemeProvider>
      <ResumeProvider>
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Certifications />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </ResumeProvider>
    </ThemeProvider>
  );
}
