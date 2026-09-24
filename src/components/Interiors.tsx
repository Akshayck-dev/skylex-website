import { motion } from "framer-motion";
import { IMAGES, INTERIOR_CATEGORIES } from "../data/content";
import { ClipReveal, Eyebrow, Reveal } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Interiors() {
  return (
    <section id="interiors" className="scroll-mt-24 overflow-hidden bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Images */}
          <div className="relative lg:col-span-6">
            <ClipReveal>
              <img
                src={IMAGES.interiorsMain}
                alt="Warm minimal living room interior by Skylex"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </ClipReveal>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
              className="absolute -bottom-10 -right-4 hidden w-56 border-8 border-cream shadow-2xl md:block lg:-right-10 lg:w-72"
            >
              <img
                src={IMAGES.interiorsAlt}
                alt="Interior material and lighting detail"
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal>
              <Eyebrow>Interiors</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-5xl font-medium leading-[1.05] tracking-tight text-charcoal text-balance md:text-6xl">
                Interiors with <em className="italic text-clay">Character.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/70 md:text-lg">
                We design interiors that balance material, light, proportion
                and everyday living — rooms composed for the way you actually
                live, not just the way they photograph.
              </p>
            </Reveal>

            <div className="mt-10">
              {INTERIOR_CATEGORIES.map((category, i) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.07 }}
                  className="group flex cursor-default items-center justify-between border-b border-charcoal/12 py-4"
                >
                  <span className="text-[13px] font-medium uppercase tracking-[0.24em] text-charcoal/75 transition-all duration-300 group-hover:translate-x-2 group-hover:text-charcoal">
                    {category}
                  </span>
                  <span className="font-display text-sm italic text-stone transition-colors duration-300 group-hover:text-clay">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
