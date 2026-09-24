import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../data/content";
import { Button } from "./ui/button";

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.5 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export function Hero() {
  const navigate = useNavigate();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.7], ["0%", "30%"]);

  return (
    <section ref={ref} id="home" className="relative flex min-h-[100svh] items-end overflow-hidden bg-charcoal">
      {/* Background — slow cinematic zoom + parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0" aria-hidden="true">
        <motion.img
          src={IMAGES.hero}
          alt=""
          initial={{ scale: 1.12 }}
          animate={{ scale: 1.22 }}
          transition={{ duration: 28, ease: "linear" }}
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-charcoal/45" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/30"
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto w-full max-w-shell px-6 pb-28 pt-40 md:px-10 md:pb-32 lg:px-16"
      >
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p
            variants={item}
            className="text-[11px] font-medium uppercase tracking-[0.38em] text-cream/70"
          >
            Architecture · Construction · Interiors
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 max-w-4xl font-display text-[13vw] font-medium leading-[0.98] tracking-tight text-cream text-balance sm:text-7xl md:text-8xl lg:text-[7.5rem]"
          >
            Spaces Designed
            <br />
            to Live <em className="italic text-bronze">Beautifully.</em>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg"
          >
            We create thoughtfully designed homes, interiors and architectural
            spaces where functionality meets timeless design.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              variant="bronze"
              size="lg"
              onClick={() => navigate("/projects")}
            >
              Explore Projects
              <ArrowRight aria-hidden="true" />
            </Button>
            <Button
              variant="outlineLight"
              size="lg"
              onClick={() => navigate("/contact")}
            >
              Start Your Project
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom-left location */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 left-6 z-10 hidden items-center gap-2 text-cream/70 md:left-10 md:flex lg:left-16"
      >
        <MapPin className="size-4 text-bronze" aria-hidden="true" />
        <span className="text-[11px] font-medium uppercase tracking-[0.28em]">
          Based in Kerala · Serving Across India
        </span>
      </motion.div>

      {/* Bottom-right scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 right-6 z-10 hidden flex-col items-center gap-3 md:right-10 md:flex lg:right-16"
        aria-hidden="true"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-cream/60 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <div className="relative h-16 w-px overflow-hidden bg-cream/20">
          <motion.span
            className="absolute left-0 top-0 h-1/2 w-px bg-bronze"
            animate={{ y: ["-100%", "220%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
