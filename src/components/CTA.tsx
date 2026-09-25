import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Reveal } from "./shared";
import { Button } from "./ui/button";

/** Bold dark closing statement. */
export function CTA() {
  const navigate = useNavigate();

  return (
    <section className="bg-charcoal py-28 md:py-44" aria-label="Call to action">
      <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
        <Reveal>
          <h2 className="max-w-5xl font-display text-5xl font-medium leading-[1.02] tracking-tight text-cream text-balance md:text-7xl lg:text-8xl">
            Have a plot, a plan —
            <br />
            or just an idea?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
            Let&rsquo;s shape it into something worth building.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <Button
            variant="clay"
            size="lg"
            className="mt-12"
            onClick={() => navigate("/contact")}
          >
            Start a conversation
            <ArrowRight aria-hidden="true" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
