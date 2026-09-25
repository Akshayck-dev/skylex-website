import { IMAGES } from "../data/content";
import { ClipReveal, Eyebrow, Reveal } from "./shared";

const FACTS = [
  { label: "Founded", value: "2014 — Kerala, India" },
  { label: "Practice", value: "Architecture · Construction · Interiors" },
  { label: "Belief", value: "Build less, but better." },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-cream py-28 md:py-44">
      <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
        <Reveal>
          <Eyebrow>Studio</Eyebrow>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 lg:grid-cols-12 lg:gap-10">
          {/* Left — the line */}
          <div className="lg:col-span-5">
            <Reveal delay={0.05}>
              <h2 className="font-display text-5xl font-medium leading-[1.02] tracking-tight text-charcoal text-balance md:text-6xl lg:text-[4.25rem]">
                Engineers by training.
                <br />
                Designers at heart.
              </h2>
            </Reveal>
          </div>

          {/* Middle — the story */}
          <div className="lg:col-span-4 lg:pt-3">
            <Reveal delay={0.12}>
              <p className="text-base leading-relaxed text-charcoal/80 md:text-lg">
                Skylex is a design-led practice of engineers, architects and
                craftsmen. We take on a small number of residential projects
                each year — and see each one through ourselves.
              </p>
              <p className="mt-5 text-base leading-relaxed text-charcoal/65">
                Design, construction and interiors under one roof means nothing
                is lost between drawing and dwelling. What we imagine is what
                gets built — down to the last joint.
              </p>
            </Reveal>
          </div>

          {/* Right — facts */}
          <div className="lg:col-span-3 lg:pt-3">
            <Reveal delay={0.18}>
              <dl className="border-t border-charcoal/15">
                {FACTS.map((fact) => (
                  <div key={fact.label} className="border-b border-charcoal/15 py-5">
                    <dt className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone">
                      {fact.label}
                    </dt>
                    <dd className="mt-2 text-[15px] leading-snug text-charcoal">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        {/* Offset image composition */}
        <div className="mt-20 md:mt-28 lg:ml-[16.666%] lg:w-[75%]">
          <ClipReveal>
            <img
              src={IMAGES.about}
              alt="A Skylex residence — concrete, light and restraint"
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
          </ClipReveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-stone">
              A Skylex residence — concrete, light, restraint
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
