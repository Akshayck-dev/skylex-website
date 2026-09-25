import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES } from "../data/content";
import { cn } from "../lib/utils";
import { ClipReveal, Eyebrow, Reveal } from "./shared";

/**
 * Sticky scroll panels — each service pins full-viewport and the next
 * slides over it. Editorial, photography-led, no hover dependency.
 */
export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-beige" aria-label="Services">
      {/* Intro — scrolls away before the stack */}
      <div className="mx-auto max-w-shell px-6 pb-14 pt-28 md:px-10 md:pt-44 lg:px-16">
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
      </div>

      {/* The stack */}
      <div className="relative">
        {SERVICES.map((service, i) => {
          const imageFirst = i % 2 === 1;
          return (
            <div
              key={service.index}
              className={cn(
                "sticky top-0 flex min-h-[100svh] items-center border-t border-charcoal/15",
                i % 2 === 0 ? "bg-cream" : "bg-beige"
              )}
            >
              <div className="mx-auto grid w-full max-w-shell grid-cols-1 items-center gap-10 px-6 py-24 md:px-10 lg:grid-cols-12 lg:gap-12 lg:px-16">
                {/* Image */}
                <div
                  className={cn(
                    "lg:col-span-7",
                    imageFirst ? "lg:order-1" : "lg:order-2"
                  )}
                >
                  <ClipReveal>
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </ClipReveal>
                </div>

                {/* Text */}
                <div
                  className={cn(
                    "lg:col-span-4",
                    imageFirst ? "lg:order-2 lg:col-start-9" : "lg:order-1 lg:col-start-1"
                  )}
                >
                  <p className="font-display text-lg italic text-clay">
                    {service.index} <span className="not-italic text-stone">/ 04</span>
                  </p>
                  <h3 className="mt-5 font-display text-4xl font-medium tracking-tight text-charcoal text-balance md:text-6xl">
                    {service.name}
                  </h3>
                  <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/65 md:text-lg">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="group mt-8 inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.24em] text-charcoal"
                    aria-label={`Explore ${service.name}`}
                  >
                    Explore service
                    <ArrowRight
                      className="size-4 text-clay transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
