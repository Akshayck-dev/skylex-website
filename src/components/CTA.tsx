import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../data/content";
import { Reveal } from "./shared";
import { Button } from "./ui/button";

export function CTA() {
  const navigate = useNavigate();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-charcoal" aria-label="Call to action">
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110" aria-hidden="true">
        <img
          src={IMAGES.cta}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-charcoal/55" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-shell px-6 py-32 text-center md:px-10 md:py-44 lg:px-16">
        <Reveal>
          <h2 className="mx-auto max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-cream text-balance md:text-7xl">
            Let&rsquo;s create something
            <br />
            <em className="italic text-bronze">worth coming home to.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-cream/75 md:text-lg">
            Have a project in mind? Tell us about it.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button variant="bronze" size="lg" onClick={() => navigate("/contact")}>
              Start a Project
              <ArrowRight aria-hidden="true" />
            </Button>
            <Button variant="outlineLight" size="lg" onClick={() => navigate("/contact")}>
              <Phone aria-hidden="true" />
              Talk to Our Team
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
