import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HERO_SLIDES } from "../data/content";
import { cn } from "../lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;
const AUTOPLAY_MS = 6500;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.5 } },
};

const item = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE } },
};

/**
 * Cinematic full-screen hero — one architectural image at a time,
 * slow crossfade, restrained typography, a single editorial CTA.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const restart = useCallback(() => {
    if (timer.current) window.clearInterval(timer.current);
    timer.current = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, AUTOPLAY_MS);
  }, []);

  useEffect(() => {
    restart();
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [restart]);

  const go = (i: number) => {
    setIndex(i);
    restart();
  };

  const slide = HERO_SLIDES[index];

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-charcoal">
      {/* Slow cinematic crossfade */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={index}
            src={slide.image}
            alt={`${slide.name} — ${slide.location}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 2, ease: "easeInOut" },
              scale: { duration: 8, ease: "linear" },
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Restraint: gradient only where the type sits */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-charcoal/50 to-transparent"
        aria-hidden="true"
      />

      {/* Type block */}
      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="absolute inset-0">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex h-full flex-col justify-end px-6 pb-24 md:px-10 md:pb-28 lg:px-16"
        >
          <motion.p
            variants={item}
            className="text-[11px] font-medium uppercase tracking-[0.32em] text-cream/65"
          >
            Skylex Engineering Solutions — Kerala, India
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-6 max-w-6xl font-display text-[12.5vw] font-medium leading-[0.94] tracking-tight text-cream text-balance sm:text-7xl md:text-8xl lg:text-[8.75rem]"
          >
            Architecture, built with intention.
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-base leading-relaxed text-cream/80 md:text-xl"
          >
            Residential spaces shaped by light, material and place.
          </motion.p>
          <motion.div variants={item} className="mt-10">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-4 text-[13px] font-semibold uppercase tracking-[0.28em] text-cream"
            >
              <span className="border-b border-cream/40 pb-1.5 transition-colors duration-300 group-hover:border-cream">
                View our works
              </span>
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1.5"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Quiet slide index */}
      <div className="absolute bottom-8 right-6 flex items-center gap-3 md:right-10 lg:right-16">
        <span className="font-display text-sm italic text-cream/60">
          {String(index + 1).padStart(2, "0")} / {String(HERO_SLIDES.length).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-2">
          {HERO_SLIDES.map((s, i) => (
            <button
              key={s.image}
              onClick={() => go(i)}
              aria-label={`Show slide ${i + 1}: ${s.name}`}
              className="flex h-6 items-center"
            >
              <span
                className={cn(
                  "h-px transition-all duration-500",
                  i === index ? "w-8 bg-cream" : "w-4 bg-cream/30 hover:bg-cream/60"
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
