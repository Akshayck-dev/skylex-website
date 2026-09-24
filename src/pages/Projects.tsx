import { CTA } from "../components/CTA";
import { FeaturedProject } from "../components/FeaturedProject";
import { PageHero } from "../components/PageHero";
import { Projects } from "../components/Projects";

export function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected Works"
        title="Work we're proud of."
        sub="A few of the homes and spaces we've shaped across Kerala and India — each one designed to live beautifully."
      />
      <Projects />
      <FeaturedProject />
      <CTA />
    </>
  );
}
