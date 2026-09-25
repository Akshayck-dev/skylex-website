import { CTA } from "../components/CTA";
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
      <Services />
      <Projects />
      <Testimonials />
      <CTA />
    </>
  );
}
