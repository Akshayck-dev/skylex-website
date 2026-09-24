import { Contact } from "../components/Contact";
import { PageHero } from "../components/PageHero";

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's talk about your project."
        sub="Tell us a little about what you're dreaming of — we'll take it from there."
      />
      <Contact />
    </>
  );
}
