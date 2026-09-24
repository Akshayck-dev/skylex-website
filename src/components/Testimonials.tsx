import { TESTIMONIALS } from "../data/content";
import { Eyebrow, Reveal } from "./shared";

/** A single confident client quote — no carousel chrome. */
export function Testimonials() {
  const t = TESTIMONIALS[0];

  return (
    <section className="bg-beige py-28 md:py-40" aria-label="Client words">
      <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
        <Reveal>
          <Eyebrow>Kind words</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <blockquote className="mt-10 max-w-5xl font-display text-4xl font-medium leading-[1.15] tracking-tight text-charcoal text-balance md:text-6xl">
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
              <p className="mt-1 text-[12px] uppercase tracking-[0.22em] text-stone">
                {t.project}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
