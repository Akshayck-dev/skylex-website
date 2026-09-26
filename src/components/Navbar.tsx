import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { CONTACT, NAV_LINKS } from "../data/content";
import { cn } from "../lib/utils";
import { getLenis } from "../lib/lenis";
import { Button } from "./ui/button";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll (page + Lenis) while the drawer is open
  useEffect(() => {
    if (!open) return;
    const lenis = getLenis();
    lenis.stop();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      lenis.start();
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open ]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Main bar */}
        <div
          className={cn(
            "border-b border-ink/10 bg-white/95 backdrop-blur-md transition-shadow duration-300",
            scrolled && "shadow-[0_10px_36px_rgba(4,86,109,0.12)]"
          )}
        >
          <div className="mx-auto flex h-[76px] w-full max-w-shell items-center justify-between px-6 md:px-10 lg:px-16">
            {/* Brand — Forum wordmark */}
            <Link to="/" className="flex flex-col leading-none" aria-label="Skylex Engineering Solutions — home">
              <span className="font-display text-[30px] tracking-[0.08em] text-brand">
                SKYLEX
              </span>
              <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.42em] text-ink/50">
                Engineering Solutions
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "relative text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-300",
                    "after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-teal after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100",
                    pathname === link.href ? "text-brand after:scale-x-100" : "text-ink/70 hover:text-brand"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button variant="gold" size="sm" onClick={() => navigate("/contact")}>
                Get a Quote
                <ArrowUpRight aria-hidden="true" />
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex size-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-brand hover:text-brand lg:hidden"
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile side drawer */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-branddeep/70 backdrop-blur-sm"
            />
            {/* Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: EASE }}
              className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-branddeep shadow-[-24px_0_60px_rgba(0,0,0,0.5)]"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <span className="flex flex-col leading-none">
                  <span className="font-display text-[24px] tracking-[0.08em] text-white">
                    SKYLEX
                  </span>
                  <span className="mt-1 text-[8px] font-semibold uppercase tracking-[0.42em] text-white/50">
                    Engineering Solutions
                  </span>
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-tealbright hover:text-tealbright"
                >
                  <X className="size-5" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto px-6 py-8" aria-label="Mobile">
                <ul className="space-y-2">
                  {NAV_LINKS.map((link, i) => {
                    const active = pathname === link.href;
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 32 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 + i * 0.06, duration: 0.45, ease: EASE }}
                      >
                        <Link
                          to={link.href}
                          className={cn(
                            "group flex items-center rounded-xl px-3 py-3 transition-colors",
                            active ? "bg-white/5" : "hover:bg-white/5"
                          )}
                        >
                          <span
                            className={cn(
                              "font-display text-[28px] tracking-wide transition-colors",
                              active ? "text-tealbright" : "text-white group-hover:text-tealbright"
                            )}
                          >
                            {link.label}
                          </span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Panel footer */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4, ease: EASE }}
                className="border-t border-white/10 px-6 py-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  {CONTACT.phone}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">
                  {CONTACT.email}
                </p>
                <Button
                  variant="gold"
                  className="mt-5 w-full"
                  onClick={() => navigate("/contact")}
                >
                  Get a Quote
                  <ArrowUpRight aria-hidden="true" />
                </Button>
              </motion.div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
