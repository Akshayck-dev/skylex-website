import { Link } from "react-router-dom";
import { PROJECTS } from "../data/content";
import { Reveal, SectionHead } from "./shared";

/** Arcadia-style featured projects on ink — imagery without card chrome. */
export function Projects() {
  const featured = [PROJECTS[0], PROJECTS[1], PROJECTS[3]];

  return (
    <section id="projects" className="scroll-mt-24 bg-ink py-24 md:py-32" aria-label="Featured projects">
      <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
        <SectionHead
          dark
          eyebrow="Featured Projects"
          title="Spaces We've Created"
          link={{ label: "View All Projects", href: "#/projects" }}
        />

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-8">
          {featured.map((project, i) => (
            <Reveal key={project.index} delay={i * 0.08}>
              <Link
                to="/projects"
                className="group block"
                aria-label={`${project.name} — ${project.location}, Kerala`}
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl font-medium tracking-tight text-cream transition-colors duration-300 group-hover:text-goldsoft">
                  {project.name}
                </h3>
                <p className="mt-1.5 text-[15px] text-cream/55">
                  {project.location}, Kerala
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
