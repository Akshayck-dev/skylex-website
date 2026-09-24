import { ArrowUpRight } from "lucide-react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { CTA } from "./components/CTA";
import { FeaturedProject } from "./components/FeaturedProject";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Interiors } from "./components/Interiors";
import { Navbar } from "./components/Navbar";
import { Process } from "./components/Process";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Button } from "./components/ui/button";

function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/10 bg-cream/95 px-5 py-3 backdrop-blur-md md:hidden">
      <Button
        variant="default"
        className="w-full"
        onClick={() => (window.location.hash = "#contact")}
      >
        Start a Project
        <ArrowUpRight aria-hidden="true" />
      </Button>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:bg-charcoal focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <FeaturedProject />
        <Interiors />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Stats />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
