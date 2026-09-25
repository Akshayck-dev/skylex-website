import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../data/content";
import { cn } from "../lib/utils";
import { Eyebrow, Reveal } from "./shared";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Editorial numbered list — hairlines, serif titles, image on hover. */
export function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="scroll-mt-24 bg-beige py-28 md:py-44">
      <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
        <Reveal>
          <Eyebrow>Practice</Eyebrow>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal delay={0.06} className="lg:col-span-7">
            <h2 className="font-display text-5xl font-medium tracking-tight text-charcoal text-balance md:text-6xl lg:text-7xl">
              What we do
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-4 lg:col-start-9">
            <p className="text-base leading-relaxed text-charcoal/65">
              Four disciplines, one studio. Complete on their own —
              seamless together.
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
                className="group relative grid cursor-default grid-cols-12 items-baseline gap-x-4 gap-y-3 border-b border-charcoal/15 py-9 outline-none transition-colors duration-500 md:py-11"
              >
                {/* Number */}
                <div className="col-span-2 md:col-span-1">
                  <span
                    className={cn(
                      "font-display text-base italic transition-colors duration-500 md:text-lg",
                      isActive ? "text-clay" : "text-stone"
                    )}
                  >
                    {service.index}
                  </span>
                </div>

                {/* Title */}
                <div className="col-span-8 md:col-span-4">
                  <h3
                    className={cn(
                      "font-display text-3xl font-medium tracking-tight transition-transform duration-500 md:text-5xl",
                      isActive ? "translate-x-2 text-charcoal" : "text-charcoal"
                    )}
                  >
                    {service.name}
                  </h3>
                </div>

                {/* One-line description */}
                <div className="col-span-10 col-start-3 md:col-span-5 md:col-start-6">
                  <p
                    className={cn(
                      "max-w-md text-[15px] leading-relaxed transition-colors duration-500 md:text-base",
                      isActive ? "text-charcoal/80" : "text-charcoal/55"
                    )}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="col-span-2 col-start-11 row-start-1 flex items-center justify-end md:col-span-2 md:col-start-auto md:row-start-auto md:items-baseline">
                  <ArrowRight
                    className={cn(
                      "size-5 transition-all duration-500",
                      isActive ? "translate-x-1 text-clay" : "text-charcoal/40"
                    )}
                    aria-hidden="true"
                  />
                </div>

                {/* Hover image reveal (desktop) */}
                <div className="pointer-events-none absolute right-[8%] top-1/2 hidden h-60 w-[22rem] -translate-y-1/2 lg:block">
                  <AnimatePresence>
                    {isActive && (
                      <motion.img
                        key={service.index}
                        src={service.image}
                        alt={service.imageAlt}
                        loading="lazy"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.5, ease: EASE }}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* Inline image (mobile / touch) */}
                <div className="col-span-12 mt-2 lg:hidden">
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
