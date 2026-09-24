import { CTA } from "../components/CTA";
import { PageHero } from "../components/PageHero";
import { Process } from "../components/Process";
import { Testimonials } from "../components/Testimonials";

export function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title="A clear path from idea to handover."
        sub="Five considered steps. One accountable team. You'll always know what's happening, what's next, and what it costs."
      />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
