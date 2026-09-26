import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { HERO_SLIDES } from "../data/content";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Reveal } from "./shared";

const SLIDE_HEADINGS = [
  <>Building Homes.<br />Creating Lifestyles.</>,
  <>Designing your<br />perfect space</>,
  <>Beauty in<br />every detail</>,
  <>Where design<br />meets comfort</>,
];

const AUTOPLAY_MS = 5200;

/** Brique-style full-width slider hero with Forum headlines. */
export function Hero() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  const go = useCallback((i: number) => {
    setActive(((i % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setTimeout(() => go(active + 1), AUTOPLAY_MS);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [active, paused, go]);

  const slide = HERO_SLIDES[active];

  return (
    <section
      className="relative overflow-hidden bg-mist pt-[76px]"
      aria-label="Introduction"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <div className="relative h-[78svh] min-h-[560px] w-full">
        {HERO_SLIDES.map((s, i) => (
          <div
            key={s.image}
            className={cn(
              "absolute inset-0 transition-opacity duration-[1200ms] ease-out",
              i === active ? "opacity-100" : "pointer-events-none opacity-0"
            )}
            aria-hidden={i !== active}
          >
            <img
              src={s.image}
              alt=""
              className={cn("h-full w-full object-cover", i === active && "animate-kenburns")}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-branddeep/85 via-branddeep/45 to-branddeep/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-branddeep/60 via-transparent to-transparent" />
          </div>
        ))}

        {/* Giant watermark letter, like Brique's mark-slider */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 top-1/2 hidden -translate-y-1/2 select-none font-display text-[26rem] leading-none text-white/10 lg:block"
        >
          S
        </span>

        {/* Content */}
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full w-full max-w-shell flex-col justify-center px-6 md:px-10 lg:px-16">
            <Reveal key={`eyebrow-${active}`}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-tealbright">
                Construction · Interiors · Turnkey
              </p>
            </Reveal>
            <h1
              key={`heading-${active}`}
              className="mt-6 max-w-4xl font-display text-6xl leading-[1.02] text-white text-balance md:text-7xl lg:text-8xl"
            >
              {SLIDE_HEADINGS[active]}
            </h1>
            <Reveal key={`cta-${active}`} delay={0.15}>
              <div className="mt-10">
                <Button variant="gold" size="lg" onClick={() => navigate("/contact")}>
                  Start Your Project
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom bar: caption + controls */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto flex w-full max-w-shell items-end justify-between gap-6 px-6 pb-8 md:px-10 lg:px-16">
            <div key={`cap-${active}`} className="text-white">
              <p className="font-display text-2xl">{slide.name}</p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.28em] text-white/60">
                {slide.location} · {slide.year}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(active - 1)}
                aria-label="Previous slide"
                className="flex size-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-tealbright hover:text-tealbright"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(active + 1)}
                aria-label="Next slide"
                className="flex size-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-tealbright hover:text-tealbright"
              >
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
          {/* Progress segments */}
          <div className="flex gap-2 px-6 pb-6 md:px-10 lg:px-16">
            <div className="mx-auto flex w-full max-w-shell gap-2">
              {HERO_SLIDES.map((s, i) => (
                <button
                  key={s.image}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="group h-6 flex-1"
                >
                  <span
                    className={cn(
                      "block h-[3px] w-full overflow-hidden rounded-full bg-white/25",
                    )}
                  >
                    <span
                      className={cn(
                        "block h-full rounded-full bg-tealbright",
                        i === active && !paused && "animate-heroprogress",
                        i < active && "w-full",
                        i > active && "w-0"
                      )}
                      style={
                        i === active && !paused
                          ? { animationDuration: `${AUTOPLAY_MS}ms` }
                          : undefined
                      }
                    />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
