import { useNavigate } from "react-router-dom";
import { IMAGES } from "../data/content";
import { Reveal } from "./shared";
import { Button } from "./ui/button";

/** Arcadia-style closing band — rounded image panel on ink. */
export function CTA() {
  const navigate = useNavigate();

  return (
    <section className="bg-ink py-24 md:py-32" aria-label="Call to action">
      <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={IMAGES.cta}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
            <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
              <h2 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-cream text-balance md:text-6xl lg:text-7xl">
                Let&rsquo;s Build Your Vision.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
                Whether it&rsquo;s a new home, office space or an interior
                makeover, we&rsquo;re here to make it happen.
              </p>
              <Button
                variant="gold"
                size="lg"
                className="mt-10"
                onClick={() => navigate("/contact")}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
