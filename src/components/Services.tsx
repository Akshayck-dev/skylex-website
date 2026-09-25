import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES } from "../data/content";
import { Reveal, SectionHead } from "./shared";

/** Arcadia-style services grid — image cards on cream. */
export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-cream py-24 md:py-32" aria-label="Services">
      <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
        <SectionHead
          eyebrow="Our Services"
          title="Complete Solutions for Your Dream Space"
          link={{ label: "View All Services", href: "#/services" }}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {SERVICES.map((service, i) => (
            <Reveal key={service.index} delay={i * 0.08} className="h-full">
              <Link
                to="/services"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-16px_rgba(20,17,11,0.25)]"
                aria-label={`${service.name} — learn more`}
              >
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="font-display text-2xl font-medium tracking-tight text-ink">
                    {service.name}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/60">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-golddeep transition-colors group-hover:text-ink">
                    Learn More
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
