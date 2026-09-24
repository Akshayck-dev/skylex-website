import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../data/content";
import { Button } from "./ui/button";

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};

const item = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export function Hero() {
  const navigate = useNavigate();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="bg-cream pt-28 md:pt-36">
      <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
        <motion.div variants={container} initial="hidden" animate="visible">
          {/* Meta rule */}
          <motion.div
            variants={item}
            className="flex items-center justify-between border-b border-charcoal/15 pb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-stone"
          >
            <span>Architecture · Construction · Interiors</span>
            <span className="hidden sm:block">Kerala, India</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-10 font-display text-[12.5vw] font-medium leading-[0.95] tracking-tight text-charcoal text-balance sm:text-7xl md:text-8xl lg:text-[8.5rem]"
          >
            Homes designed with intent, built to last.
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-md text-base leading-relaxed text-charcoal/65 md:text-lg">
              A Kerala-based studio of engineers and designers — taking homes
              from first sketch to final handover, under one roof.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="clay" size="lg" onClick={() => navigate("/projects")}>
                Explore Projects
                <ArrowRight aria-hidden="true" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate("/contact")}>
                Start Your Project
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Full-width image with parallax + caption */}
      <motion.div
        initial={{ opacity: 0, y: 64 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.65 }}
        className="mt-14 md:mt-20"
      >
        <div className="relative overflow-hidden">
          <motion.img
            src={IMAGES.hero}
            alt="Modern residence in Kochi designed and built by Skylex"
            style={{ y: imgY }}
            className="h-[62vh] w-full scale-[1.18] object-cover md:h-[80vh]"
          />
        </div>
        <div className="mx-auto flex max-w-shell items-center justify-between px-6 py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-stone md:px-10 lg:px-16">
          <span>Modern Residence — Kochi</span>
          <span>2025</span>
        </div>
      </motion.div>
    </section>
  );
}
