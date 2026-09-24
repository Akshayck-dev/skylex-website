import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CONTACT } from "../data/content";
import { Eyebrow, Reveal } from "./shared";

/** Typographic closing statement — no stock-photo band. */
export function CTA() {
  const navigate = useNavigate();

  return (
    <section className="bg-charcoal py-28 md:py-44" aria-label="Call to action">
      <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
        <Reveal>
          <Eyebrow light>Start a project</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-5xl font-display text-5xl font-medium leading-[1.02] tracking-tight text-cream text-balance md:text-8xl">
            Have a plot, a plan — or just an idea?
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <button
            onClick={() => navigate("/contact")}
            className="group mt-12 inline-flex items-center gap-5"
            aria-label="Start a project — go to contact page"
          >
            <span className="text-[13px] font-semibold uppercase tracking-[0.3em] text-cream">
              Tell us where it stands
            </span>
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-clay text-cream transition-transform duration-500 group-hover:scale-110 md:h-20 md:w-20">
              <ArrowUpRight className="size-6 md:size-7" aria-hidden="true" />
            </span>
          </button>
        </Reveal>
        <Reveal delay={0.22}>
          <div className="mt-16 flex flex-wrap gap-x-12 gap-y-3 border-t border-cream/15 pt-8 text-[12px] font-medium uppercase tracking-[0.24em] text-cream/60 md:mt-24">
            <span>{CONTACT.email}</span>
            <span>{CONTACT.phone}</span>
            <span>{CONTACT.studio}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
