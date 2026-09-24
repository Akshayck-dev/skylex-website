import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { STATS } from "../data/content";
import { Reveal } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2.2,
      ease: EASE,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="bg-charcoal py-24 md:py-32" aria-label="Studio statistics">
      <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="border-l border-cream/15 pl-6 md:pl-8">
                <motion.dd
                  className="font-display text-6xl font-medium tracking-tight text-cream md:text-7xl"
                  aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
                >
                  <Counter to={stat.value} suffix={stat.suffix} />
                </motion.dd>
                <dt className="mt-3 text-[11px] font-medium uppercase tracking-[0.28em] text-cream/55">
                  {stat.label}
                </dt>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
