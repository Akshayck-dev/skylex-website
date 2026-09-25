import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT, NAV_LINKS, SERVICES } from "../data/content";
import { Reveal } from "./shared";

const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
];

/** Refined studio footer — quiet columns, hairlines, no noise. */
export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto max-w-shell px-6 pb-24 pt-20 md:px-10 md:pb-10 md:pt-28 lg:px-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4">
            <Reveal>
              <Link to="/" className="flex flex-col leading-none" aria-label="Skylex Engineering Solutions — home">
                <span className="font-display text-[28px] font-semibold tracking-[0.14em] text-cream">
                  SKYLEX
                </span>
                <span className="mt-1.5 text-[9px] font-medium uppercase tracking-[0.42em] text-cream/55">
                  Engineering Solutions
                </span>
              </Link>
              <p className="mt-7 max-w-xs text-[15px] leading-relaxed text-cream/60">
                A design-led practice of engineers, architects and craftsmen —
                building homes with intention since 2014.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
                {SOCIALS.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={`Skylex on ${label}`}
                    className="group inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.22em] text-cream/65 transition-colors duration-300 hover:text-cream"
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

          {/* Navigation */}
          <nav className="lg:col-span-2 lg:col-start-6" aria-label="Footer">
            <Reveal delay={0.06}>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-cream/40">
                Studio
              </p>
              <ul className="mt-6 space-y-3.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-[15px] text-cream/65 transition-colors duration-300 hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </nav>

          {/* Services */}
          <div className="lg:col-span-2">
            <Reveal delay={0.1}>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-cream/40">
                Practice
              </p>
              <ul className="mt-6 space-y-3.5">
                {SERVICES.map((service) => (
                  <li key={service.index}>
                    <Link
                      to="/services"
                      className="text-[15px] text-cream/65 transition-colors duration-300 hover:text-cream"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-3">
            <Reveal delay={0.14}>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-cream/40">
                Contact
              </p>
              <p className="mt-6 text-[15px] text-cream/65">{CONTACT.studio}</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-2.5 block text-[15px] text-cream/65 transition-colors duration-300 hover:text-cream"
              >
                {CONTACT.email}
              </a>
              <p className="mt-2.5 text-[15px] text-cream/65">{CONTACT.phone}</p>
            </Reveal>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-cream/12 py-8 md:flex-row md:items-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-cream/40">
            © 2026 Skylex Engineering Solutions
          </p>
          <p className="text-[11px] uppercase tracking-[0.22em] text-cream/40">
            Architecture · Construction · Interiors
          </p>
        </div>
      </div>
    </footer>
  );
}
