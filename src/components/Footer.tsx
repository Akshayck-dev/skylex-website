import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT, NAV_LINKS, SERVICES } from "../data/content";
import { Reveal } from "./shared";

const SOCIALS = [
  { label: "Instagram", short: "IG", href: "#" },
  { label: "Facebook", short: "FB", href: "#" },
  { label: "LinkedIn", short: "IN", href: "#" },
];

const CONTACT_LINES = [
  { Icon: MapPin, label: "Address", value: CONTACT.studio },
  { Icon: Phone, label: "Phone", value: CONTACT.phone },
  { Icon: Mail, label: "Email", value: CONTACT.email },
  { Icon: Clock, label: "Hours", value: "Mon – Sat: 9:00 AM – 6:00 PM" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-shell px-6 pb-24 pt-20 md:px-10 md:pb-10 md:pt-24 lg:px-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Reveal>
              <Link to="/" className="inline-block" aria-label="Skylex Engineering Solutions — home">
                <img
                  src="logo.png"
                  alt="Skylex Engineering Solutions"
                  className="h-16 w-auto"
                />
              </Link>
              <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-cream/60">
                Architecture, construction and interiors — designed with
                intent, engineered to last, and built for the way you live.
              </p>
              <div className="mt-7 flex gap-3">
                {SOCIALS.map(({ label, short, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={`Skylex on ${label}`}
                    className="flex size-10 items-center justify-center rounded-full border border-cream/20 text-[11px] font-semibold tracking-[0.08em] text-cream/70 transition-colors duration-300 hover:border-gold hover:text-gold"
                  >
                    {short}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Quick links */}
          <nav className="lg:col-span-2 lg:col-start-6" aria-label="Footer">
            <Reveal delay={0.05}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
                Quick Links
              </p>
              <ul className="mt-6 space-y-3.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-[15px] text-cream/65 transition-colors duration-300 hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </nav>

          {/* Services */}
          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
                Our Services
              </p>
              <ul className="mt-6 space-y-3.5">
                {SERVICES.map((service) => (
                  <li key={service.index}>
                    <Link
                      to="/services"
                      className="text-[15px] text-cream/65 transition-colors duration-300 hover:text-gold"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <Reveal delay={0.15}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
                Contact
              </p>
              <ul className="mt-6 space-y-4">
                {CONTACT_LINES.map(({ Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-cream/5 text-gold">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="text-[15px] leading-relaxed text-cream/65">
                      <span className="sr-only">{label}: </span>
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-cream/10 py-8 md:flex-row md:items-center">
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
