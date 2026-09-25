import { useEffect } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NAV_LINKS } from "../data/content";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

const EASE = [0.16, 1, 0.3, 1] as const;
const MotionLink = motion(Link);

/** Routes whose hero banner is dark — navbar starts in light mode there. */
const DARK_HERO_ROUTES = new Set([
  "/",
  "/about",
  "/services",
  "/projects",
  "/interiors",
  "/process",
  "/contact",
]);

function Wordmark({ light }: { light: boolean }) {
  return (
    <Link to="/" className="group flex flex-col leading-none" aria-label="Skylex Engineering Solutions — home">
      <span
        className={cn(
          "font-display text-[26px] font-semibold tracking-[0.14em] transition-colors duration-500",
          light ? "text-cream" : "text-charcoal"
        )}
      >
        SKYLEX
      </span>
      <span
        className={cn(
          "mt-1 text-[9px] font-medium uppercase tracking-[0.42em] transition-colors duration-500",
          light ? "text-cream/60" : "text-stone"
        )}
      >
        Engineering Solutions
      </span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  const { pathname } = useLocation();

  const light = DARK_HERO_ROUTES.has(pathname) && !scrolled && !open;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-charcoal/10 bg-cream/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-20 max-w-shell items-center justify-between px-6 md:px-10 lg:px-16">
          <Wordmark light={light} />

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "group relative text-[12px] font-medium uppercase tracking-[0.2em] transition-colors duration-300",
                  light ? "text-cream/80 hover:text-cream" : "text-charcoal/70 hover:text-charcoal"
                )}
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-clay transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              variant={light ? "outlineLight" : "default"}
              size="sm"
              onClick={() => navigate("/contact")}
            >
              Start a Project
              <ArrowUpRight aria-hidden="true" />
            </Button>
          </div>

          <button
            className={cn(
              "flex h-11 w-11 items-center justify-center transition-colors lg:hidden",
              light ? "text-cream" : "text-charcoal"
            )}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-[60] flex flex-col bg-charcoal text-cream lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex h-20 items-center justify-between px-6">
              <Wordmark light />
              <button
                className="flex h-11 w-11 items-center justify-center text-cream"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="size-6" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-8" aria-label="Mobile">
              {NAV_LINKS.map((link, i) => (
                <MotionLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.1 + i * 0.06 }}
                  className="group flex items-baseline gap-4 border-b border-cream/10 py-4"
                >
                  <span className="font-display text-sm italic text-clay">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-4xl font-medium tracking-tight transition-colors group-hover:text-clay">
                    {link.label}
                  </span>
                </MotionLink>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.55 }}
              className="px-8 pb-12"
            >
              <Button
                variant="clay"
                size="lg"
                className="w-full"
                onClick={() => {
                  setOpen(false);
                  navigate("/contact");
                }}
              >
                Start a Project
                <ArrowUpRight aria-hidden="true" />
              </Button>
              <p className="mt-6 text-center text-[11px] uppercase tracking-[0.3em] text-cream/40">
                Kerala · India
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
