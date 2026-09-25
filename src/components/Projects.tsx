import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS, type Project } from "../data/content";
import { cn } from "../lib/utils";
import { Eyebrow, Reveal } from "./shared";

const MotionLink = motion(Link);

function ProjectItem({ project }: { project: Project }) {
  return (
    <Reveal className={cn(project.span)}>
      <Link
        to="/projects"
        className="group block"
        aria-label={`${project.name} — ${project.location}, ${project.year}`}
      >
        <div className={cn("overflow-hidden bg-beige", project.aspect)}>
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]"
          />
        </div>
        <div className="mt-5 border-t border-charcoal/15 pt-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone">
            {project.index} — {project.category}
          </p>
          <div className="mt-2.5 flex items-baseline justify-between gap-4">
            <h3 className="font-display text-2xl font-medium tracking-tight text-charcoal transition-colors duration-300 group-hover:text-clay md:text-[1.7rem]">
              {project.name}
            </h3>
            <p className="shrink-0 text-[11px] font-medium uppercase tracking-[0.2em] text-stone">
              {project.location} · {project.year}
            </p>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-cream py-28 md:py-44">
      <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
        <Reveal>
          <Eyebrow>Selected works</Eyebrow>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal delay={0.06} className="lg:col-span-7">
            <h2 className="font-display text-5xl font-medium tracking-tight text-charcoal text-balance md:text-6xl lg:text-7xl">
              Selected works
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-4 lg:col-start-9">
            <p className="text-base leading-relaxed text-charcoal/65">
              Residences, interiors and workplaces — each designed,
              engineered and finished by our own teams.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:mt-24 md:grid-cols-12">
          {PROJECTS.map((project) => (
            <ProjectItem key={project.index} project={project} />
          ))}
        </div>

        <Reveal className="mt-20 flex justify-end md:mt-28">
          <MotionLink
            to="/projects"
            whileHover={{ x: 6 }}
            transition={{ duration: 0.3 }}
            className="group inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.24em] text-charcoal"
          >
            View all projects
            <ArrowRight
              className="size-4 text-clay transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </MotionLink>
        </Reveal>
      </div>
    </section>
  );
}
