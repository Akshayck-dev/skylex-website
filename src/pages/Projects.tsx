import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { Reveal, SectionHead } from "../components/shared";
import { PROJECTS, type Project } from "../data/content";
import { cn } from "../lib/utils";

const TABS = ["All", "Residential", "Commercial", "Interiors"] as const;
type Tab = (typeof TABS)[number];

function matches(project: Project, tab: Tab): boolean {
  if (tab === "All") return true;
  if (tab === "Interiors") return project.category === "Interior";
  return project.category === tab;
}

export function ProjectsPage() {
  const [tab, setTab] = useState<Tab>("All");
  const visible = PROJECTS.filter((p) => matches(p, tab));

  return (
    <>
      <PageHero
        title="Our Projects"
        sub="A glimpse of the spaces we've created for our valued clients."
        crumb="Projects"
        image="images/project-2.jpg"
      />

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
          <SectionHead
            eyebrow="Portfolio"
            title="Spaces we've created"
            sub="Residences, interiors and workplaces across Kerala and beyond."
          />

          {/* Filter tabs */}
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-3" role="tablist" aria-label="Filter projects">
              {TABS.map((t) => (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  aria-selected={tab === t}
                  onClick={() => setTab(t)}
                  className={cn(
                    "rounded-full px-6 py-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] transition-all duration-300",
                    tab === t
                      ? "bg-gold text-ink shadow-[0_8px_24px_rgba(201,162,75,0.35)]"
                      : "border border-ink/20 bg-transparent text-ink/65 hover:border-golddeep hover:text-golddeep"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project, i) => (
              <Reveal key={project.index} delay={(i % 3) * 0.07}>
                <Link to={`/projects/${project.slug}`} className="group block">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="mt-5">
                    <h3 className="font-display text-2xl font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-golddeep">
                      {project.name}
                    </h3>
                    <p className="mt-1.5 text-[13px] font-medium uppercase tracking-[0.18em] text-ink/50">
                      {project.location}, Kerala · {project.category}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
