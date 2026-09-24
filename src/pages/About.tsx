import { About } from "../components/About";
import { CTA } from "../components/CTA";
import { PageHero } from "../components/PageHero";
import { Stats } from "../components/Stats";
import { WhyChooseUs } from "../components/WhyChooseUs";

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Studio"
        title="Driven by engineers. Built for excellence."
        sub="Skylex Engineering Solutions is a Kerala-based architecture, construction and interiors studio — a team of engineers and designers obsessed with getting the details right."
      />
      <About />
      <WhyChooseUs />
      <Stats />
      <CTA />
    </>
  );
}
