import { PRINCIPLES } from "../data/content";
import { Eyebrow, Reveal } from "./shared";

export function WhyChooseUs() {
  return (
    <section className="bg-beige py-28 md:py-40">
      <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow>05 — Why Skylex</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-5 font-display text-5xl font-medium leading-[1.05] tracking-tight text-charcoal text-balance md:text-6xl">
                  Built with <em className="italic text-bronze">intention.</em>
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-charcoal/65">
                  Not slogans — working principles. This is how every Skylex
                  project is run, from foundation to finishing.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t border-charcoal/15">
              {PRINCIPLES.map((principle, i) => (
                <Reveal key={principle.index} delay={i * 0.06}>
                  <div className="group grid grid-cols-12 items-start gap-4 border-b border-charcoal/15 py-9 transition-all duration-500 hover:bg-cream/60 md:py-11">
                    <span className="col-span-2 font-display text-lg italic text-stone transition-colors duration-500 group-hover:text-bronze md:col-span-1">
                      {principle.index}
                    </span>
                    <div className="col-span-10 md:col-span-11 md:pl-4">
                      <h3 className="font-display text-3xl font-medium tracking-tight text-charcoal transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                        {principle.title}
                      </h3>
                      <div className="grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:grid-rows-[1fr]">
                        <div className="overflow-hidden">
                          <p className="max-w-xl pt-0 text-[15px] leading-relaxed text-charcoal/70 opacity-0 transition-all delay-100 duration-500 group-hover:pt-4 group-hover:opacity-100">
                            {principle.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
