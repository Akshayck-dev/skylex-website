import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/content";
import { cn } from "../lib/utils";
import { Reveal } from "./shared";
import { Button } from "./ui/button";

/** Brique-style "User Feedback" — quote slider with review CTA. */
export function Testimonials() {
  const [active, setActive] = useState(0);
  const timer = useRef<number | null>(null);

  const go = useCallback((i: number) => {
    setActive(((i % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    timer.current = window.setTimeout(() => go(active + 1), 6000);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [active, go]);

  const t = TESTIMONIALS[active];

  return (
    <section className="bg-white py-20 md:py-28" aria-label="Testimonials">
      <div className="mx-auto w-full max-w-shell px-6 md:px-10 lg:px-16">
        <Reveal>
          <div className="text-center">
            <p className="section-title">Testimonials</p>
            <h2 className="section-heading">User Feedback</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-14 max-w-3xl rounded-3xl bg-mist px-8 py-12 text-center md:px-14 md:py-14">
            <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-brand text-white">
              <Quote className="size-7" aria-hidden="true" />
            </span>
            <blockquote
              key={active}
              className="mt-8 font-display text-2xl leading-snug text-ink text-balance md:text-3xl"
            >
              “{t.quote}”
            </blockquote>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              {t.client}
            </p>
            <p className="mt-1 text-[12px] uppercase tracking-[0.2em] text-ink/45">
              {t.project}
            </p>

            {/* Dots */}
            <div className="mt-8 flex items-center justify-center gap-2.5">
              {TESTIMONIALS.map((item, i) => (
                <button
                  key={item.client}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300",
                    i === active ? "w-8 bg-brand" : "w-2.5 bg-ink/20 hover:bg-ink/40"
                  )}
                />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(active - 1)}
              aria-label="Previous testimonial"
              className="flex size-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
            </button>
            <Button variant="outline" onClick={() => window.open("https://www.google.com/maps", "_blank")}>
              Write A Review
            </Button>
            <button
              type="button"
              onClick={() => go(active + 1)}
              aria-label="Next testimonial"
              className="flex size-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
