import About from "@/components/About";
import Architecture from "@/components/Architecture";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import HeroScene from "@/components/hero/HeroScene";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100">
      <Navigation />
      <HeroScene />
      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Architecture />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
