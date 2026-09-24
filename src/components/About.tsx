import { IMAGES } from "../data/content";
import { ClipReveal, Eyebrow, Reveal } from "./shared";

const EXPERTISE = ["Architecture", "Construction", "Interior Design", "Turnkey Projects"];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
        <Reveal>
          <Eyebrow>About us</Eyebrow>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <h2 className="font-display text-5xl font-medium leading-[1.04] tracking-tight text-charcoal text-balance md:text-6xl lg:text-[4.6rem]">
                Engineers by training.
                <br />
                Designers at heart.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:pt-4">
            <Reveal delay={0.12}>
              <p className="text-base leading-relaxed text-charcoal/75 md:text-lg">
                Skylex Engineering Solutions is a design-led studio of engineers,
                architects and craftsmen. We take homes and workplaces from
                first sketch to final handover — one team, one vision, zero
                compromises.
              </p>
              <p className="mt-5 text-base leading-relaxed text-charcoal/75">
                Every project is engineered with intent and finished with care,
                so the spaces we deliver don&rsquo;t just stand — they endure,
                and they belong.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="mt-10 space-y-0 border-t border-charcoal/15">
                {EXPERTISE.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 border-b border-charcoal/15 py-4"
                  >
                    <span className="h-1.5 w-1.5 bg-clay" aria-hidden="true" />
                    <span className="text-[13px] font-medium uppercase tracking-[0.24em] text-charcoal">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 lg:mt-28 lg:pl-[8.333%] lg:pr-[16.666%]">
          <ClipReveal>
            <img
              src={IMAGES.about}
              alt="Modern residence designed and built by Skylex"
              loading="lazy"
              className="aspect-[16/8] w-full object-cover"
            />
          </ClipReveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-stone">
              A Skylex residence — where engineering meets restraint
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
