import { About } from "../components/About";
import { CTA } from "../components/CTA";
import { Faq } from "../components/Faq";
import { Hero } from "../components/Hero";
import { Marquee } from "../components/Marquee";
import { Projects } from "../components/Projects";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";

export function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Faq />
      <Services />
      <Projects />
      <Testimonials />
      <CTA />
    </>
  );
}
