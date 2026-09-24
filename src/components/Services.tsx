import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "../data/content";
import { cn } from "../lib/utils";
import { Eyebrow, Reveal } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="scroll-mt-24 bg-beige py-28 md:py-40">
      <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <Eyebrow>02 — Services</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-5xl font-medium tracking-tight text-charcoal md:text-6xl lg:text-7xl">
                What We Do
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-[15px] leading-relaxed text-charcoal/65">
              Four disciplines, one studio. Each service is complete on its own —
              together, they deliver a home without seams.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-charcoal/15 md:mt-20">
          {SERVICES.map((service, i) => {
            const isActive = active === i;
            return (
              <div
                key={service.index}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                tabIndex={0}
                role="button"
                aria-label={`${service.name} — ${service.description}`}
                className="group relative grid cursor-pointer grid-cols-12 items-center gap-4 border-b border-charcoal/15 py-10 outline-none transition-colors duration-500 md:py-12"
              >
                {/* Number */}
                <div className="col-span-2 md:col-span-1">
                  <span
                    className={cn(
                      "font-display text-lg italic transition-colors duration-500 md:text-xl",
                      isActive ? "text-bronze" : "text-stone"
                    )}
                  >
                    {service.index}
                  </span>
                </div>

                {/* Name + description */}
                <div className="col-span-8 md:col-span-6">
                  <h3
                    className={cn(
                      "font-display text-3xl font-medium uppercase tracking-wide transition-all duration-500 md:text-5xl",
                      isActive ? "translate-x-2 text-charcoal" : "text-charcoal/90"
                    )}
                  >
                    {service.name}
                  </h3>
                  <p
                    className={cn(
                      "mt-3 max-w-xl text-[15px] leading-relaxed transition-all duration-500",
                      isActive ? "text-charcoal/75" : "text-charcoal/55"
                    )}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Hover image (desktop) */}
                <div className="pointer-events-none absolute right-20 top-1/2 hidden h-56 w-80 -translate-y-1/2 lg:block">
                  <AnimatePresence>
                    {isActive && (
                      <motion.img
                        key={service.index}
                        src={service.image}
                        alt={service.imageAlt}
                        loading="lazy"
                        initial={{ opacity: 0, scale: 0.92, x: 24 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.94, x: 12 }}
                        transition={{ duration: 0.55, ease: EASE }}
                        className="h-full w-full object-cover shadow-2xl"
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* Arrow */}
                <div className="col-span-2 flex justify-end md:col-span-5 md:pr-4">
                  <span
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-500",
                      isActive
                        ? "border-bronze bg-bronze text-cream"
                        : "border-charcoal/25 text-charcoal/60"
                    )}
                  >
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                  </span>
                </div>

                {/* Mobile image */}
                <div className="col-span-12 lg:hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
