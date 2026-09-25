import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/content";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-cream/10 bg-ink/95 backdrop-blur-md transition-shadow duration-300",
        scrolled && "shadow-[0_10px_36px_rgba(0,0,0,0.45)]"
      )}
    >
      <div className="mx-auto flex h-[76px] w-full max-w-shell items-center justify-between px-6 md:px-10 lg:px-16">
        {/* Brand */}
        <Link to="/" className="flex flex-col leading-none" aria-label="Skylex Engineering Solutions — home">
          <span className="font-display text-[26px] font-semibold tracking-[0.18em] text-cream">
            SKYLEX
          </span>
          <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.42em] text-gold/80">
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
                "text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-300",
                pathname === link.href ? "text-gold" : "text-cream/70 hover:text-gold"
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
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex size-11 items-center justify-center rounded-lg border border-cream/15 text-cream transition-colors hover:border-gold hover:text-gold lg:hidden"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav
          className="border-t border-cream/10 bg-ink px-6 pb-8 pt-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={cn(
                    "block rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-colors",
                    pathname === link.href
                      ? "bg-cream/5 text-gold"
                      : "text-cream/75 hover:bg-cream/5 hover:text-gold"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button variant="gold" className="mt-5 w-full" onClick={() => navigate("/contact")}>
            Get a Quote
            <ArrowUpRight aria-hidden="true" />
          </Button>
        </nav>
      )}
    </header>
  );
}
