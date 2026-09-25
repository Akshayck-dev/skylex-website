import { TESTIMONIALS } from "../data/content";
import { Eyebrow, Reveal } from "./shared";

/** Minimal editorial quote — no cards, no chrome. */
export function Testimonials() {
  const t = TESTIMONIALS[0];

  return (
    <section className="bg-cream py-28 md:py-44" aria-label="Client words">
      <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
        <div className="lg:ml-[8.333%] lg:w-[83.333%]">
          <Reveal>
            <Eyebrow>Client words</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <blockquote className="mt-10 font-display text-3xl font-medium leading-[1.18] tracking-tight text-charcoal text-balance md:text-5xl lg:text-[3.4rem]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-10 flex items-center gap-5">
              <span className="h-px w-14 bg-clay" aria-hidden="true" />
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-charcoal">
                  {t.client}
                </p>
                <p className="mt-1.5 text-[12px] uppercase tracking-[0.22em] text-stone">
                  {t.project}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
