import { CTA } from "../components/CTA";
import { Interiors } from "../components/Interiors";
import { PageHero } from "../components/PageHero";

export function InteriorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Interiors"
        title="Rooms with a point of view."
        sub="Interiors that feel personal — layered with texture, light and materials chosen for the way you actually live."
      />
      <Interiors />
      <CTA />
    </>
  );
}
