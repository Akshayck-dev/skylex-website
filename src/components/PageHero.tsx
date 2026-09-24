import { motion } from "framer-motion";
import { Reveal } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
}

/** Editorial banner used at the top of every inner page. */
export function PageHero({ eyebrow, title, sub }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal pt-40 pb-20 md:pt-52 md:pb-28">
      {/* soft bronze glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-bronze/15 blur-[140px]"
      />
      <div className="relative mx-auto max-w-shell px-6 md:px-10 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-[11px] font-medium uppercase tracking-[0.34em] text-bronze"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
          className="mt-5 max-w-4xl font-display text-5xl font-medium leading-[1.02] tracking-tight text-cream text-balance md:text-7xl"
        >
          {title}
        </motion.h1>
        {sub && (
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/65 md:text-lg">
              {sub}
            </p>
          </Reveal>
        )}
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-cream/10" />
    </section>
  );
}
