import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECTS, type Project } from "../data/content";
import { cn } from "../lib/utils";
import { Eyebrow, Reveal } from "./shared";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal className={cn(project.span)}>
      <a
        href="#contact"
        className="group relative block overflow-hidden bg-charcoal"
        aria-label={`${project.name} — ${project.location}`}
      >
        <div className={cn("overflow-hidden", project.aspect)}>
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          />
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95"
          aria-hidden="true"
        />

        {/* Index */}
        <span className="absolute left-6 top-5 font-display text-sm italic tracking-widest text-cream/70 md:left-8 md:top-7">
          {project.index}
        </span>

        {/* Arrow */}
        <span className="absolute right-6 top-5 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-cream text-charcoal opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:right-8 md:top-7">
          <ArrowUpRight className="size-5" aria-hidden="true" />
        </span>

        {/* Details */}
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-bronze">
              {project.category} · {project.year}
            </p>
            <h3 className="mt-2 font-display text-3xl font-medium tracking-tight text-cream md:text-4xl">
              {project.name}
            </h3>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-cream/65">
              {project.location}
            </p>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <Eyebrow>03 — Portfolio</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-5xl font-medium tracking-tight text-charcoal md:text-6xl lg:text-7xl">
                Selected Works
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-[15px] leading-relaxed text-charcoal/65">
              A selection of residences, interiors and workplaces — each one
              designed, engineered and finished by our own teams.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8 md:[&>*:nth-child(2)]:mt-16">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.index} project={project} />
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center md:justify-end">
          <motion.a
            href="#contact"
            whileHover={{ x: 6 }}
            transition={{ duration: 0.3 }}
            className="group inline-flex items-center gap-3 text-[13px] font-medium uppercase tracking-[0.24em] text-charcoal"
          >
            View All Projects
            <ArrowRight
              className="size-4 text-bronze transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
