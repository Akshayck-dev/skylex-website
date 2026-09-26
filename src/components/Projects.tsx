import { Link } from "react-router-dom";
import { ArrowDownRight } from "lucide-react";
import { PROJECTS } from "../data/content";
import { cn } from "../lib/utils";
import { Reveal, SectionHead } from "./shared";

/** Brique-style "Our Creative Works" — asymmetric grid with hover overlays. */
export function Projects() {
  const [big, ...rest] = PROJECTS.slice(0, 4);

  return (
    <section className="bg-mist py-20 md:py-28" aria-label="Featured projects">
      <div className="mx-auto w-full max-w-shell px-6 md:px-10 lg:px-16">
        <SectionHead
          eyebrow="Projects"
          title="Our Creative Works"
          align="center"
          link={{ label: "View All Projects", href: "#/projects" }}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Big feature tile */}
          <Reveal className="md:row-span-2">
            <ProjectTile project={big} tall />
          </Reveal>
          {/* Stacked tiles */}
          <div className="grid gap-6">
            {rest.slice(0, 2).map((project, i) => (
              <Reveal key={project.slug} delay={0.08 + i * 0.08}>
                <ProjectTile project={project} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="md:col-span-2">
            {rest[2] && <ProjectTile project={rest[2]} wide />}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProjectTile({
  project,
  tall = false,
  wide = false,
}: {
  project: (typeof PROJECTS)[number];
  tall?: boolean;
  wide?: boolean;
}) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={cn(
        "group relative block overflow-hidden rounded-2xl",
        tall ? "h-full min-h-[420px] md:min-h-[560px]" : wide ? "aspect-[16/8]" : "aspect-[16/10]"
      )}
    >
      <img
        src={project.image}
        alt={project.imageAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-branddeep/85 via-branddeep/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

      {/* Hover overlay card */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-tealbright">
            {project.location} · {project.year}
          </p>
          <h3 className="mt-2 font-display text-3xl text-white md:text-4xl">
            {project.name}
          </h3>
        </div>
        <span className="flex size-12 shrink-0 translate-y-2 items-center justify-center rounded-full bg-white text-brand opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowDownRight className="size-5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
