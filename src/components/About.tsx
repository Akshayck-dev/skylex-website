import { useNavigate } from "react-router-dom";
import { IMAGES } from "../data/content";
import { Reveal } from "./shared";
import { Button } from "./ui/button";

/** Brique-style about: two offset images + eyebrow/heading/copy/button. */
export function About() {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-20 md:py-28" aria-label="About Skylex">
      <div className="mx-auto grid w-full max-w-shell items-center gap-14 px-6 md:px-10 lg:grid-cols-2 lg:gap-20 lg:px-16">
        {/* Images */}
        <div className="relative">
          <Reveal className="w-[82%]">
            <img
              src={IMAGES.about}
              alt="Skylex project exterior"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[0_30px_60px_rgba(4,86,109,0.15)]"
              loading="lazy"
            />
          </Reveal>
          <Reveal
            delay={0.15}
            className="absolute -bottom-10 right-0 w-[52%] border-8 border-white shadow-[0_30px_60px_rgba(4,86,109,0.18)]"
          >
            <img
              src={IMAGES.interiorsAlt}
              alt="Skylex interior detail"
              className="aspect-square w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </Reveal>
          {/* Experience badge */}
          <Reveal
            delay={0.25}
            className="absolute -top-6 right-6 rounded-2xl bg-brand px-6 py-5 text-white shadow-[0_20px_40px_rgba(4,86,109,0.35)]"
          >
            <p className="font-display text-4xl leading-none">12+</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70">
              Years of practice
            </p>
          </Reveal>
        </div>

        {/* Copy */}
        <div className="pt-8 lg:pt-0">
          <Reveal>
            <p className="section-title">About Us</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="section-heading">Creating spaces that inspire</h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 text-base leading-relaxed text-ink/65 md:text-lg">
              Skylex Engineering Solutions is a Kerala-born practice of
              engineers and designers who believe every space has a story to
              tell. We work closely with our clients to understand their
              vision — then design and build homes and interiors that reflect
              the way they actually live.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/65">
              From the first sketch to final handover, one team owns your
              project: architecture, construction and interiors under a single
              contract, with honest budgets and weekly updates.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8">
              <Button variant="gold" onClick={() => navigate("/about")}>
                Learn More
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
