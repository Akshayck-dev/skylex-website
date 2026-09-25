import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE, delay },
  }),
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

/** Elegant fade-and-rise reveal on scroll. */
export function Reveal({ children, className, delay = 0, once = true }: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

interface ClipRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Cinematic clip-path image reveal — sharp editorial frame, no rounding. */
export function ClipReveal({ children, className, delay = 0 }: ClipRevealProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        initial={{ clipPath: "inset(8% 6% 8% 6%)", opacity: 0.4, scale: 1.04 }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, ease: EASE, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  light?: boolean;
}

/** Small tracked-caps section label, e.g. "01 — About Us". */
export function Eyebrow({ children, className, light = false }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-[11px] font-medium uppercase tracking-[0.32em]",
        light ? "text-cream/60" : "text-stone",
        className
      )}
    >
      {children}
    </p>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  className?: string;
  light?: boolean;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  className,
  light = false,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <Reveal>
        <Eyebrow light={light}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-5 font-display text-5xl font-medium leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl",
            light ? "text-cream" : "text-charcoal"
          )}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
