import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { BUDGET_RANGES, CONTACT, PROJECT_TYPES } from "../data/content";
import { Eyebrow, Reveal } from "./shared";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select } from "./ui/select";
import { Textarea } from "./ui/textarea";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Left — intro + details */}
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Get in touch</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-5xl font-medium leading-[1.05] tracking-tight text-charcoal text-balance md:text-6xl">
                Start a <em className="italic text-clay">conversation.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-charcoal/65 md:text-base">
                Share a few details about your project and we&rsquo;ll get back
                to you within one working day.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="mt-12 space-y-8">
                <div className="flex gap-5">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-clay" aria-hidden="true" />
                  <div>
                    <dt className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone">
                      Studio
                    </dt>
                    <dd className="mt-1.5 text-[17px] text-charcoal">{CONTACT.studio}</dd>
                  </div>
                </div>
                <div className="flex gap-5">
                  <Mail className="mt-0.5 size-5 shrink-0 text-clay" aria-hidden="true" />
                  <div>
                    <dt className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone">
                      Email
                    </dt>
                    <dd className="mt-1.5 text-[17px]">
                      <a
                        href={`mailto:${CONTACT.email}`}
                        className="text-charcoal underline-offset-4 transition-colors hover:text-clay hover:underline"
                      >
                        {CONTACT.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex gap-5">
                  <Phone className="mt-0.5 size-5 shrink-0 text-clay" aria-hidden="true" />
                  <div>
                    <dt className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone">
                      Phone
                    </dt>
                    <dd className="mt-1.5 text-[17px] text-charcoal">{CONTACT.phone}</dd>
                  </div>
                </div>
              </dl>
            </Reveal>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <div className="relative rounded-[1.75rem] border border-charcoal/15 bg-beige/50 p-8 md:p-12">
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: EASE }}
                      className="flex min-h-[420px] flex-col items-center justify-center text-center"
                      role="status"
                    >
                      <CheckCircle2 className="size-12 text-clay" aria-hidden="true" />
                      <h3 className="mt-6 font-display text-4xl font-medium tracking-tight text-charcoal">
                        Thank you.
                      </h3>
                      <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-charcoal/65">
                        Your enquiry has been noted. Our team will reach out
                        within one working day.
                      </p>
                      <Button variant="ghost" className="mt-8" onClick={() => setSent(false)}>
                        Send another enquiry
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      onSubmit={handleSubmit}
                      className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                    >
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" placeholder="Your full name" required autoComplete="name" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="+91 ..." required autoComplete="tel" />
                      </div>
                      <div>
                        <Label htmlFor="project-type">Project Type</Label>
                        <Select id="project-type" name="project-type" defaultValue="" required>
                          <option value="" disabled>
                            Select a type
                          </option>
                          {PROJECT_TYPES.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </Select>
                      </div>
                      <div className="sm:col-span-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select id="budget" name="budget" defaultValue="" required>
                          <option value="" disabled>
                            Select a range
                          </option>
                          {BUDGET_RANGES.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </Select>
                      </div>
                      <div className="sm:col-span-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your site, timeline and what you're dreaming of…"
                          required
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <Button type="submit" variant="default" size="lg" className="w-full sm:w-auto">
                          Send Enquiry
                          <ArrowRight aria-hidden="true" />
                        </Button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
