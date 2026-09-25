import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HERO_SLIDES } from "../data/content";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

const EASE = [0.16, 1, 0.3, 1] as const;
const AUTOPLAY_MS = 5200;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

/** Classic full-screen image hero with autoplay slider background. */
export function Hero() {
  const navigate = useNavigate();
  const ref = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

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
      {/* Slider background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={index}
            src={slide.image}
            alt={`${slide.name} — ${slide.location}`}
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.4, ease: EASE },
              scale: { duration: 7, ease: "linear" },
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Legibility overlays */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-charcoal/40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-charcoal/60 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="absolute inset-0 flex items-end"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="w-full px-6 pb-28 md:px-10 md:pb-32 lg:px-16"
        >
          <motion.p
            variants={item}
            className="text-[11px] font-medium uppercase tracking-[0.3em] text-cream/70"
          >
            Architecture · Construction · Interiors — Kerala, India
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-5 max-w-5xl font-display text-[13vw] font-medium leading-[0.95] tracking-tight text-cream text-balance sm:text-7xl md:text-8xl"
          >
            Homes designed with intent, built to last.
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg"
          >
            A Kerala-based studio of engineers and designers — taking homes
            from first sketch to final handover, under one roof.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Button variant="clay" size="lg" onClick={() => navigate("/projects")}>
              Explore Projects
              <ArrowRight aria-hidden="true" />
            </Button>
            <Button variant="outlineLight" size="lg" onClick={() => navigate("/contact")}>
              Start Your Project
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Slide caption + controls */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-6 pb-8 md:px-10 md:pb-10 lg:px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-cream"
          >
            <p className="font-display text-lg font-medium tracking-tight md:text-xl">
              {slide.name}
            </p>
            <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.28em] text-cream/60">
              {slide.location} · {slide.year}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-3">
          <span className="mr-1 hidden font-display text-sm italic text-cream/70 sm:block">
            {String(index + 1).padStart(2, "0")} / {String(HERO_SLIDES.length).padStart(2, "0")}
          </span>
          {HERO_SLIDES.map((s, i) => (
            <button
              key={s.image}
              onClick={() => go(i)}
              aria-label={`Show slide ${i + 1}: ${s.name}`}
              className="group flex h-8 items-center"
            >
              <span
                className={cn(
                  "h-[3px] rounded-full transition-all duration-500",
                  i === index ? "w-10 bg-cream" : "w-5 bg-cream/30 group-hover:bg-cream/60"
                )}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        aria-hidden="true"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-cream/50">
          Scroll
        </span>
        <div className="h-10 w-px overflow-hidden bg-cream/20">
          <motion.div
            animate={{ y: [-40, 40] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1/2 w-px bg-cream/80"
          />
        </div>
      </motion.div>
    </section>
  );
}
