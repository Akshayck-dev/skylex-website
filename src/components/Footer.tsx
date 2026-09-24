import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT, NAV_LINKS } from "../data/content";
import { Reveal } from "./shared";

const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal pb-24 text-cream md:pb-0">
      <div className="mx-auto max-w-shell px-6 pt-20 md:px-10 md:pt-28 lg:px-16">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Reveal>
              <img
                src="logo.png"
                alt="Skylex Engineering Solutions logo"
                className="h-20 w-auto md:h-24"
                loading="lazy"
              />
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-cream/60">
                Driven by engineers. Built for excellence. Architecture,
                construction and interiors — designed to live beautifully.
              </p>
            </Reveal>
          </div>

          {/* Navigation */}
          <nav className="lg:col-span-3" aria-label="Footer">
            <Reveal delay={0.08}>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-cream/40">
                Navigate
              </p>
              <ul className="mt-6 space-y-3.5">
                {NAV_LINKS.slice(0, 5).map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-[15px] text-cream/70 transition-colors duration-300 hover:text-clay"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </nav>

          {/* Contact + socials */}
          <div className="lg:col-span-4">
            <Reveal delay={0.14}>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-cream/40">
                Studio
              </p>
              <p className="mt-6 text-[15px] text-cream/70">{CONTACT.studio}</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-2 block text-[15px] text-cream/70 transition-colors duration-300 hover:text-clay"
              >
                {CONTACT.email}
              </a>
              <p className="mt-2 text-[15px] text-cream/70">{CONTACT.phone}</p>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {SOCIALS.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={`Skylex on ${label}`}
                    className="group inline-flex items-center gap-1.5 text-[13px] font-medium uppercase tracking-[0.22em] text-cream/70 transition-colors duration-300 hover:text-clay"
                  >
                    {label}
                    <ArrowUpRight
                      className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/12 py-8 md:flex-row">
          <p className="text-[12px] uppercase tracking-[0.2em] text-cream/45">
            © 2026 Skylex Engineering Solutions
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-[12px] uppercase tracking-[0.2em] text-cream/45 transition-colors duration-300 hover:text-cream"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[12px] uppercase tracking-[0.2em] text-cream/45 transition-colors duration-300 hover:text-cream"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
