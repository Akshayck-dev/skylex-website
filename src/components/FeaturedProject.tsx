import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FEATURED_PROJECT } from "../data/content";
import { Reveal } from "./shared";

const MotionLink = motion(Link);

/** Villa Aurelia — full-bleed parallax feature break, Arcadia dark + gold. */
export function FeaturedProject() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink" aria-label="Featured project">
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110" aria-hidden="true">
        <img
          src={FEATURED_PROJECT.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-ink/40"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[92vh] w-full max-w-shell flex-col justify-end px-6 pb-20 md:px-10 md:pb-28 lg:px-16">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            {FEATURED_PROJECT.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="mt-5 font-display text-6xl font-medium tracking-tight text-cream text-balance md:text-8xl lg:text-[7rem]">
            {FEATURED_PROJECT.name}
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.22em] text-cream/60">
            {FEATURED_PROJECT.meta}
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-gold/25 pt-8 sm:grid-cols-4">
            {FEATURED_PROJECT.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-[11px] font-medium uppercase tracking-[0.28em] text-cream/55">
                  {stat.label}
                </dt>
                <dd className="mt-2 text-[15px] font-medium tracking-wide text-goldsoft">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.2}>
          <MotionLink
            to="/contact"
            whileHover={{ x: 6 }}
            transition={{ duration: 0.3 }}
            className="group mt-10 inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.24em] text-gold"
          >
            Start your project
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </MotionLink>
        </Reveal>
      </div>
    </section>
  );
}
