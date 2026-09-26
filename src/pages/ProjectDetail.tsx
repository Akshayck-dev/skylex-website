import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { CTA } from "../components/CTA";
import { PageHero } from "../components/PageHero";
import { Reveal, SectionHead } from "../components/shared";
import { PROJECTS } from "../data/content";
import { Button } from "../components/ui/button";

export function ProjectDetailPage() {
  const { slug } = useParams();
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) return <Navigate to="/projects" replace />;

  const project = PROJECTS[index];
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  const facts = [
    { label: "Location", value: project.location },
    { label: "Category", value: project.category },
    { label: "Year", value: project.year },
  ];

  return (
    <>
      <PageHero
        title={project.name}
        sub={`${project.category} · ${project.location} · ${project.year}`}
        crumb={project.name}
        image={project.image}
      />

      {/* Overview + facts */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-golddeep">
                Project overview
              </p>
              <p className="mt-5 font-display text-2xl font-medium leading-snug text-ink md:text-[28px]">
                {project.overview}
              </p>
              <div className="mt-10">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-ink/50">
                  Scope of work
                </p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.scope.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[15px] text-ink/80">
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-golddeep">
                        <Check className="size-3.5" aria-hidden="true" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="rounded-2xl bg-white p-8 md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">
                  Project facts
                </p>
                <dl className="mt-6 space-y-5">
                  {facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-baseline justify-between border-b border-ink/10 pb-5"
                    >
                      <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                        {fact.label}
                      </dt>
                      <dd className="font-display text-xl text-ink">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
                <Button
                  variant="gold"
                  className="mt-8 w-full"
                  onClick={() => (window.location.hash = "#/contact")}
                >
                  Start a similar project
                  <ArrowUpRight aria-hidden="true" />
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-sand py-24 md:py-32">
        <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
          <SectionHead
            eyebrow="Gallery"
            title="Inside the project"
            link={{ label: "All projects", href: "/projects" }}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {project.gallery.map((shot, i) => (
              <Reveal key={shot.src} delay={i * 0.08}>
                <figure className="group overflow-hidden rounded-2xl">
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="border-t border-ink/10 bg-white py-20 md:py-24">
        <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
          <Link
            to={`/projects/${next.slug}`}
            className="group flex items-center justify-between gap-6"
          >
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-gold">
                <ArrowLeft className="size-4 rotate-180 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                Next project
              </p>
              <p className="mt-3 font-display text-4xl font-medium text-ink transition-colors group-hover:text-gold md:text-5xl">
                {next.name}
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-ink/50">
                {next.category} · {next.location}
              </p>
            </div>
            <span className="hidden size-16 shrink-0 items-center justify-center rounded-full border border-ink/20 text-ink transition-all duration-300 group-hover:border-gold group-hover:bg-brand group-hover:text-white sm:flex">
              <ArrowRight className="size-6" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
