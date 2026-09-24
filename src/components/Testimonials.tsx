import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/content";
import { Eyebrow, Reveal } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const t = TESTIMONIALS[index];

  return (
    <section className="bg-beige py-28 md:py-40" aria-label="Client testimonials">
      <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
        <Reveal>
          <Eyebrow>07 — Testimonials</Eyebrow>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <Quote className="size-10 text-bronze" aria-hidden="true" />
            <div className="relative mt-6 min-h-[240px] md:min-h-[220px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.figure
                  key={index}
                  custom={direction}
                  initial={{ opacity: 0, x: 48 * direction }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -48 * direction }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <blockquote className="font-display text-3xl font-medium leading-[1.25] tracking-tight text-charcoal text-balance md:text-[2.75rem]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8">
                    <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-charcoal">
                      {t.client}
                    </p>
                    <p className="mt-1 text-[12px] uppercase tracking-[0.22em] text-stone">
                      {t.project}
                    </p>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-end justify-between lg:col-span-3 lg:flex-col lg:items-end lg:justify-end">
            <p className="font-display text-lg italic text-stone">
              {String(index + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/25 text-charcoal transition-all duration-300 hover:border-charcoal hover:bg-charcoal hover:text-cream"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/25 text-charcoal transition-all duration-300 hover:border-charcoal hover:bg-charcoal hover:text-cream"
              >
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
