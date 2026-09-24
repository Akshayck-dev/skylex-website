import { CTA } from "../components/CTA";
import { PageHero } from "../components/PageHero";
import { Process } from "../components/Process";
import { Services } from "../components/Services";

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title={
          <>
            End-to-end design
            <br />
            <em className="italic text-bronze">&amp; build expertise.</em>
          </>
        }
        sub="From the first sketch to the final handover — architecture, construction, interiors and turnkey delivery under one accountable roof."
      />
      <Services />
      <Process />
      <CTA />
    </>
  );
}
