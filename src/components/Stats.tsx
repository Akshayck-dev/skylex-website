import { STATS } from "../data/content";
import { Reveal } from "./shared";

/** Quiet editorial facts strip — no counters, no animation gimmicks. */
export function Stats() {
  return (
    <section className="border-y border-charcoal/15 bg-cream" aria-label="Studio facts">
      <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 gap-px bg-charcoal/15 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="bg-cream">
              <Reveal delay={i * 0.06} className="h-full">
                <div className="flex h-full flex-col justify-between px-6 py-10 md:px-8 md:py-14">
                  <p className="font-display text-6xl font-medium tracking-tight text-charcoal md:text-7xl">
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.28em] text-stone">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
