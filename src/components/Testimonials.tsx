import { Star } from "lucide-react";
import { TESTIMONIALS } from "../data/content";
import { Reveal, SectionHead } from "./shared";

/** Arcadia-style testimonial cards with gold star ratings. */
export function Testimonials() {
  return (
    <section className="bg-sand py-24 md:py-32" aria-label="Testimonials">
      <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
        <SectionHead
          align="center"
          eyebrow="Testimonials"
          title="What Our Clients Say"
          sub="Real stories from real people."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-16 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.client} delay={i * 0.08} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-7 md:p-8">
                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="size-4 fill-gold text-gold"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-display text-lg font-normal leading-relaxed text-ink/80 md:text-xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-ink/10 pt-5">
                  <p className="text-[15px] font-semibold text-ink">{t.client}</p>
                  <p className="mt-1 text-[13px] uppercase tracking-[0.16em] text-stone">
                    {t.project}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
