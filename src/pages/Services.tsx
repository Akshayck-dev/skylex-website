import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { Reveal, SectionHead } from "../components/shared";
import { SERVICES } from "../data/content";

const BULLETS: Record<string, string[]> = {
  Architecture: ["Custom home design", "3D views & walkthroughs", "Approval drawings"],
  Construction: ["RCC framed structures", "Quality-checked materials", "On-time handover"],
  "Interior Design": ["Space planning & 3D design", "Modular kitchens & wardrobes", "Turnkey fit-outs"],
  "Turnkey Projects": ["Single contract, one team", "Design + build + interiors", "Move-in ready handover"],
};

export function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        sub="End-to-end construction and interior solutions tailored to your needs."
        crumb="Services"
        image="images/service-construction.jpg"
      />

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
          <SectionHead
            eyebrow="What We Do"
            title="Complete solutions for your dream space"
            sub="Four disciplines, one accountable studio — from the first sketch to the final handover."
          />

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {SERVICES.map((service, i) => (
              <Reveal key={service.index} delay={(i % 2) * 0.08}>
                <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-[0_18px_50px_rgba(20,17,11,0.08)] transition-shadow duration-500 hover:shadow-[0_28px_70px_rgba(20,17,11,0.14)]">
                  <div className="overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="p-8 md:p-10">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-golddeep">
                      {service.index} — Service
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
                      {service.name}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-ink/65">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-3 border-t border-ink/10 pt-6">
                      {(BULLETS[service.name] ?? []).map((bullet) => (
                        <li key={bullet} className="flex items-center gap-3 text-[15px] text-ink/75">
                          <Check className="size-4 shrink-0 text-golddeep" aria-hidden="true" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="group/link mt-7 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-golddeep transition-colors hover:text-ink"
                    >
                      Learn More
                      <ArrowRight
                        className="size-4 transition-transform duration-300 group-hover/link:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
