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
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};

const item = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export function Hero() {
  const navigate = useNavigate();
  const ref = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const sliderY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

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
    <section ref={ref} className="bg-cream pt-28 md:pt-36">
      <div className="mx-auto flex max-w-shell flex-col px-6 md:px-10 lg:px-16">
        <motion.div variants={container} initial="hidden" animate="visible" className="contents">
          {/* Meta rule */}
          <motion.div
            variants={item}
            className="order-1 flex items-center justify-between border-b border-charcoal/15 pb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-stone"
          >
            <span>Architecture · Construction · Interiors</span>
            <span className="hidden sm:block">Kerala, India</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="order-2 mt-8 font-display text-[12.5vw] font-medium leading-[0.95] tracking-tight text-charcoal text-balance sm:text-7xl md:mt-10 md:text-8xl lg:text-[8.5rem]"
          >
            Homes designed with intent, built to last.
          </motion.h1>

          <motion.div
            variants={item}
            className="order-4 mt-8 flex flex-col gap-8 md:order-3 md:mt-10 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-md text-base leading-relaxed text-charcoal/65 md:text-lg">
              A Kerala-based studio of engineers and designers — taking homes
              from first sketch to final handover, under one roof.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="clay" size="lg" onClick={() => navigate("/projects")}>
                Explore Projects
                <ArrowRight aria-hidden="true" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate("/contact")}>
                Start Your Project
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Autoplay slider — first on mobile, below the intro on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 64 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.65 }}
          className="order-3 mt-8 w-full md:order-4 md:mt-20"
        >
          <div className="relative h-[58vh] overflow-hidden rounded-[1.75rem] md:h-[80vh] md:rounded-[2.5rem]">
            <motion.div style={{ y: sliderY }} className="absolute inset-0 scale-[1.16]">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={index}
                  src={slide.image}
                  alt={`${slide.name} — ${slide.location}`}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.4, ease: EASE }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
            </motion.div>
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent"
              aria-hidden="true"
            />

            {/* Caption + controls */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <p className="font-display text-2xl font-medium tracking-tight text-cream md:text-4xl">
                    {slide.name}
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.28em] text-cream/70">
                    {slide.location} · {slide.year}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center gap-3">
                <span className="mr-1 hidden font-display text-sm italic text-cream/80 sm:block">
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
                        i === index ? "w-10 bg-cream" : "w-5 bg-cream/35 group-hover:bg-cream/70"
                      )}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
