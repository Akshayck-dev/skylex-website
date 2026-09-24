import { About } from "../components/About";
import { CTA } from "../components/CTA";
import { FeaturedProject } from "../components/FeaturedProject";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Services } from "../components/Services";
import { Stats } from "../components/Stats";
import { Testimonials } from "../components/Testimonials";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <FeaturedProject />
      <Testimonials />
      <Stats />
      <CTA />
    </>
  );
}
