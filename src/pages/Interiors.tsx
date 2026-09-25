import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { Reveal, SectionHead } from "../components/shared";
import { INTERIOR_CATEGORIES } from "../data/content";

const CATEGORY_META: Record<string, { image: string; sub: string; alt: string }> = {
  "Living Spaces": {
    image: "images/service-interior.jpg",
    sub: "Rooms that bring families together.",
    alt: "Elegant living room interior",
  },
  Bedrooms: {
    image: "images/interiors-main.jpg",
    sub: "Calm, restful retreats.",
    alt: "Serene bedroom interior",
  },
  Kitchens: {
    image: "images/interiors-alt.jpg",
    sub: "Functional kitchens, beautifully detailed.",
    alt: "Modern kitchen interior",
  },
  Dining: {
    image: "images/project-3.jpg",
    sub: "Spaces for memorable meals.",
    alt: "Dining area with designer furniture",
  },
  Office: {
    image: "images/project-5.jpg",
    sub: "Workspaces that inspire focus.",
    alt: "Premium office interior",
  },
  Hospitality: {
    image: "images/hero.jpg",
    sub: "Guest-ready warmth and polish.",
    alt: "Welcoming hospitality space",
  },
};

export function InteriorsPage() {
  return (
    <>
      <PageHero
        title="Interior Design"
        sub="Thoughtfully designed interiors that blend aesthetics with functionality."
        crumb="Interiors"
        image="images/service-interior.jpg"
      />

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
          <SectionHead
            eyebrow="Interiors"
            title="Designed around daily ritual"
            sub="Material, proportion and light — composed for the way you actually live."
          />

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {INTERIOR_CATEGORIES.map((category, i) => {
              const meta = CATEGORY_META[category];
              return (
                <Reveal key={category} delay={(i % 3) * 0.07}>
                  <Link
                    to="/contact"
                    className="group relative block overflow-hidden rounded-2xl"
                    aria-label={`${category} interiors — enquire`}
                  >
                    <img
                      src={meta.image}
                      alt={meta.alt}
                      loading="lazy"
                      className="aspect-[3/4] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-7">
                      <div>
                        <h3 className="font-display text-2xl font-medium tracking-tight text-cream md:text-[1.7rem]">
                          {category}
                        </h3>
                        <p className="mt-1.5 text-[15px] text-cream/70">{meta.sub}</p>
                      </div>
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-cream/40 text-cream transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
