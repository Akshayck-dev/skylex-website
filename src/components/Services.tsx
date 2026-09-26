import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES } from "../data/content";
import { Reveal } from "./shared";

/** Brique-style "What We Do" — image cards with centered titles. */
export function Services() {
  return (
    <section className="bg-white py-20 md:py-28" aria-label="Services">
      <div className="mx-auto w-full max-w-shell px-6 md:px-10 lg:px-16">
        <Reveal>
          <div className="text-center">
            <p className="section-title">Services</p>
            <h2 className="section-heading">What We Do</h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.index} delay={i * 0.08}>
              <Link
                to="/services"
                className="group block overflow-hidden rounded-2xl bg-mist transition-shadow duration-500 hover:shadow-[0_30px_60px_rgba(4,86,109,0.16)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-branddeep/0 transition-colors duration-500 group-hover:bg-branddeep/25" />
                  <span className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/90 text-brand opacity-0 backdrop-blur transition-all duration-500 group-hover:opacity-100">
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </div>
                <div className="px-6 py-7 text-center">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-teal">
                    {service.index}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-ink transition-colors duration-300 group-hover:text-brand">
                    {service.name}
                  </h3>
                  <p className="mx-auto mt-3 max-w-[26ch] text-sm leading-relaxed text-ink/55">
                    {service.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
