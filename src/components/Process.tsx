import { motion } from "framer-motion";
import { PROCESS_STEPS } from "../data/content";
import { Eyebrow, Reveal } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>06 — Process</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-5xl font-medium tracking-tight text-charcoal md:text-6xl lg:text-7xl">
              From vision to handover
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 text-[15px] leading-relaxed text-charcoal/65 md:text-base">
              Five documented stages. You always know what is happening, what
              it costs and what comes next.
            </p>
          </Reveal>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="relative mt-20 hidden lg:block">
          <div className="absolute left-0 right-0 top-[7px] h-px bg-charcoal/15" aria-hidden="true" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.6, ease: EASE }}
            className="absolute left-0 right-0 top-[7px] h-px origin-left bg-bronze"
            aria-hidden="true"
          />
          <ol className="grid grid-cols-5 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.li
                key={step.index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.12 }}
                className="relative pt-10"
              >
                <span
                  className="absolute left-0 top-[3px] h-[9px] w-[9px] rotate-45 bg-bronze"
                  aria-hidden="true"
                />
                <p className="font-display text-sm italic text-stone">{step.index}</p>
                <h3 className="mt-2 text-[13px] font-semibold uppercase tracking-[0.26em] text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-charcoal/60">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Mobile/tablet: vertical timeline */}
        <ol className="relative mt-14 space-y-0 lg:hidden">
          <div className="absolute bottom-4 left-[5px] top-4 w-px bg-charcoal/15" aria-hidden="true" />
          {PROCESS_STEPS.map((step, i) => (
            <motion.li
              key={step.index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.06 }}
              className="relative pb-10 pl-10 last:pb-0"
            >
              <span
                className="absolute left-[1px] top-1.5 h-[9px] w-[9px] rotate-45 bg-bronze"
                aria-hidden="true"
              />
              <p className="font-display text-sm italic text-stone">{step.index}</p>
              <h3 className="mt-1 text-[13px] font-semibold uppercase tracking-[0.26em] text-charcoal">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-charcoal/60">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
