import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./shared";
import { Button } from "./ui/button";

/** Brique-style "Get In Touch" banner with outlined display text. */
export function CTA() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-brand py-20 md:py-28" aria-label="Call to action">
      {/* Decorative rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 size-[480px] rounded-full border-[36px] border-white/[0.06]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 size-[420px] rounded-full border-[28px] border-white/[0.06]"
      />

      <div className="relative mx-auto w-full max-w-shell px-6 text-center md:px-10 lg:px-16">
        <Reveal>
          <h2 className="font-display text-6xl leading-[1.02] text-white md:text-8xl lg:text-9xl">
            Get <span className="text-stroke">In Touch</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Have a plot, a plan — or just an idea? Tell us where you are and
            we'll take it from there.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="dark"
              size="lg"
              onClick={() => navigate("/contact")}
              className="bg-white text-brand hover:bg-branddeep hover:text-white"
            >
              Start Your Project
              <ArrowUpRight aria-hidden="true" />
            </Button>
            <Button variant="outlineLight" size="lg" onClick={() => navigate("/projects")}>
              View Our Work
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
