import { useNavigate } from "react-router-dom";
import { IMAGES, STATS } from "../data/content";
import { useCountUp } from "../hooks/useCountUp";
import { cn } from "../lib/utils";
import { Reveal } from "./shared";
import { Button } from "./ui/button";

/** Arcadia-style full-screen dark hero with stats strip. */
export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-[100svh] flex-col bg-ink" aria-label="Introduction">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <img
          src={IMAGES.hero}
          alt=""
          className="h-full w-full animate-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-shell flex-1 flex-col justify-center px-6 pb-16 pt-36 md:px-10 md:pt-40 lg:px-16">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
            Construction · Interiors · Turnkey
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-4xl font-display text-6xl font-medium leading-[1.02] tracking-tight text-cream text-balance md:text-7xl lg:text-8xl">
            Building Homes.
            <br />
            Creating Lifestyles.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
            From concept to completion, we design and build beautiful spaces
            that inspire better living.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button variant="gold" size="lg" onClick={() => navigate("/projects")}>
              Explore Projects
            </Button>
            <Button variant="outlineLight" size="lg" onClick={() => navigate("/contact")}>
              Get Consultation
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 border-t border-cream/15">
        <div className="mx-auto grid max-w-shell grid-cols-2 px-6 md:grid-cols-4 md:px-10 lg:px-16">
          {STATS.map((stat, i) => (
            <StatCell key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCell({ value, suffix, label, index: i }: { value: number; suffix: string; label: string; index: number }) {
  const { ref, value: n } = useCountUp(value);
  return (
    <Reveal
      delay={i * 0.06}
      className={cn(
        "py-8 md:py-10",
        i > 0 && "border-l border-cream/15 pl-6 md:pl-10",
        i >= 2 && "max-md:border-t max-md:border-cream/15",
        i === 2 && "max-md:border-l-0 max-md:pl-0"
      )}
    >
      <p className="font-display text-4xl font-medium text-cream md:text-5xl">
        <span ref={ref}>{n}</span>
        <span className="text-gold">{suffix}</span>
      </p>
      <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.24em] text-cream/60">
        {label}
      </p>
    </Reveal>
  );
}
