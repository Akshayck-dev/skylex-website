import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FEATURED_PROJECT } from "../data/content";
import { Eyebrow, Reveal } from "./shared";

export function FeaturedProject() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-charcoal" aria-label="Featured project">
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110" aria-hidden="true">
        <img
          src={FEATURED_PROJECT.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-charcoal/40" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/40"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-shell flex-col justify-between px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <Reveal>
          <Eyebrow light>{FEATURED_PROJECT.eyebrow}</Eyebrow>
        </Reveal>

        <div>
          <Reveal delay={0.05}>
            <h2 className="font-display text-6xl font-medium tracking-tight text-cream text-balance md:text-8xl lg:text-[7rem]">
              {FEATURED_PROJECT.name}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 text-[12px] font-medium uppercase tracking-[0.3em] text-cream/70">
              {FEATURED_PROJECT.meta}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-cream/20 pt-8">
              {FEATURED_PROJECT.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[11px] font-medium uppercase tracking-[0.28em] text-cream/55">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-display text-2xl font-medium text-cream md:text-3xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.24}>
            <motion.a
              href="#contact"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.3 }}
              className="group mt-10 inline-flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.24em] text-cream"
            >
              View Case Study
              <ArrowRight
                className="size-4 text-bronze transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </motion.a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
