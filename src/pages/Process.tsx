import { Check } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { ClipReveal, Reveal, SectionHead } from "../components/shared";
import { PROCESS_STEPS } from "../data/content";

const FULL_DESCRIPTIONS: Record<string, string> = {
  Discover:
    "We begin by understanding your vision, your site and your aspirations — listening first, drawing later.",
  Design:
    "Concept, architecture and interiors are developed together, so every decision serves the whole.",
  Develop:
    "Detailed drawings, transparent estimates and planning approvals turn the concept into a buildable plan.",
  Build:
    "Construction and execution proceed under strict supervision, with our own engineers on site every day.",
  Deliver:
    "Final finishing, snag resolution and a thorough handover — you receive keys, documents and our continued support.",
};

const CHECKLIST = [
  {
    title: "Clear Communication",
    text: "One point of contact and honest updates at every stage.",
  },
  {
    title: "Expert Guidance",
    text: "Engineers and designers steering every decision with you.",
  },
  {
    title: "Regular Updates",
    text: "Weekly progress reports with site photos, on schedule.",
  },
  {
    title: "On-Time Delivery",
    text: "Planned timelines we actually keep — no drifting deadlines.",
  },
];

export function ProcessPage() {
  return (
    <>
      <PageHero
        title="Our Process"
        sub="A seamless journey from concept to completion."
        crumb="Process"
        image="images/about.jpg"
      />

      {/* Steps */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
          <SectionHead
            eyebrow="How We Work"
            title="From first sketch to final handover"
            sub="A structured, transparent process that keeps quality high and surprises at zero."
            align="center"
          />

          <div className="relative mt-16">
            {/* Connecting dashed line (desktop) */}
            <div
              className="absolute left-[10%] right-[10%] top-7 hidden border-t-2 border-dashed border-gold/50 lg:block"
              aria-hidden="true"
            />
            <ol className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
              {PROCESS_STEPS.map((step, i) => (
                <Reveal key={step.index} delay={i * 0.07}>
                  <li className="relative flex flex-col items-center text-center">
                    <span className="relative z-10 flex size-14 items-center justify-center rounded-full bg-ink font-display text-lg font-medium text-gold shadow-[0_10px_30px_rgba(20,17,11,0.25)]">
                      {step.index}
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-ink/60">
                      {FULL_DESCRIPTIONS[step.title] ?? step.description}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Why our process works */}
      <section className="bg-sand/60 py-24 md:py-32">
        <div className="mx-auto grid max-w-shell grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-20 lg:px-16">
          <ClipReveal className="rounded-2xl">
            <img
              src="images/project-4.jpg"
              alt="Skylex residence facade in daylight"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </ClipReveal>
          <div>
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-golddeep">
                Why It Works
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink text-balance md:text-5xl">
                Why our process works
              </h2>
            </Reveal>
            <ul className="mt-9 space-y-6">
              {CHECKLIST.map((item, i) => (
                <Reveal key={item.title} delay={0.1 + i * 0.06}>
                  <li className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold text-ink">
                      <Check className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-medium tracking-tight text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-ink/60">
                        {item.text}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
