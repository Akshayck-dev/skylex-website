import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQS, STATS } from "../data/content";
import { useCountUp } from "../hooks/useCountUp";
import { cn } from "../lib/utils";
import { Reveal } from "./shared";

/** Brique-style FAQ accordion + counter strip with ghost numbers. */
export function Faq() {
  const [open, setOpen] = useState<number | null>(1);

  return (
    <section className="bg-mist py-20 md:py-28" aria-label="Frequently asked questions">
      <div className="mx-auto w-full max-w-shell px-6 md:px-10 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Accordion */}
          <div>
            <Reveal>
              <p className="section-title">FAQ</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="section-heading">Get Answers</h2>
            </Reveal>
            <div className="mt-10">
              {FAQS.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={faq.question} delay={i * 0.05}>
                    <div className="border-b border-ink/10">
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center gap-4 py-6 text-left"
                      >
                        <span className="font-display text-xl text-brand">
                          {String(i + 1).padStart(2, "0")}.
                        </span>
                        <span className="flex-1 font-display text-xl text-ink md:text-2xl">
                          {faq.question}
                        </span>
                        <span
                          className={cn(
                            "flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                            isOpen
                              ? "rotate-45 border-brand bg-brand text-white"
                              : "border-ink/20 text-ink hover:border-brand hover:text-brand"
                          )}
                        >
                          <Plus className="size-4" aria-hidden="true" />
                        </span>
                      </button>
                      <div className={cn("faq-answer", isOpen && "open")}>
                        <div>
                          <p className="max-w-xl pb-7 pl-10 pr-4 text-[15px] leading-relaxed text-ink/60">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Counters */}
          <div className="flex flex-col justify-center">
            <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink/10">
              {STATS.map((stat, i) => (
                <CounterCell key={stat.label} stat={stat} index={i} />
              ))}
            </ul>
            <Reveal delay={0.15}>
              <p className="mt-8 text-[15px] leading-relaxed text-ink/55">
                Numbers tell only part of the story. What our clients remember
                is the honesty of the process — transparent budgets, weekly
                updates, and a team that treats your home like their own.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function CounterCell({ stat, index }: { stat: (typeof STATS)[number]; index: number }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <li className="relative bg-white p-8 md:p-10">
      <Reveal delay={index * 0.06}>
        <p className="font-display text-5xl text-brand md:text-6xl">
          <span ref={ref}>{value}</span>
          <span className="text-teal">{stat.suffix}</span>
        </p>
        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/50">
          {stat.label}
        </p>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-4 right-6 select-none font-display text-6xl text-ink/[0.07]"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </Reveal>
    </li>
  );
}
