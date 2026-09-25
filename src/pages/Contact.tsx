import { useState, type FormEvent } from "react";
import { Check, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal, SectionHead } from "../components/shared";
import { Button } from "../components/ui/button";
import { CONTACT, PROJECT_TYPES } from "../data/content";
import { cn } from "../lib/utils";

const INFO_CARDS = [
  { Icon: MapPin, title: "Our Office", lines: [CONTACT.studio] },
  { Icon: Phone, title: "Call Us", lines: [CONTACT.phone] },
  { Icon: Mail, title: "Email Us", lines: [CONTACT.email] },
  { Icon: Clock, title: "Working Hours", lines: ["Mon – Sat: 9:00 AM – 6:00 PM", "Sunday: By Appointment"] },
];

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-cream px-4 py-3.5 text-[15px] text-ink placeholder:text-ink/35 outline-none transition-colors focus:border-golddeep";

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry — ${projectType}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject type: ${projectType}\n\n${message}`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <PageHero
        title="Get in Touch"
        sub="Let's discuss your project. We're here to help you build your dream space."
        crumb="Contact"
        image="images/cta.jpg"
      />

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
          <SectionHead
            eyebrow="Contact"
            title="Let's build your vision"
            sub="Tell us about your project — we respond within one working day."
          />

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Info cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              {INFO_CARDS.map(({ Icon, title, lines }, i) => (
                <Reveal key={title} delay={i * 0.06}>
                  <div className="flex items-start gap-5 rounded-2xl border border-ink/10 bg-white p-6">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gold text-ink">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-medium tracking-tight text-ink">
                        {title}
                      </h3>
                      {lines.map((line) => (
                        <p key={line} className="mt-1 text-[15px] text-ink/65">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Form */}
            <Reveal delay={0.1} className="lg:col-span-7">
              <div className="h-full rounded-2xl bg-white p-8 shadow-[0_24px_70px_rgba(20,17,11,0.10)] md:p-10">
                {sent ? (
                  <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
                    <span className="flex size-16 items-center justify-center rounded-full bg-gold/15 text-golddeep">
                      <Check className="size-7" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 font-display text-3xl font-medium tracking-tight text-ink">
                      Thank you, {name.split(" ")[0] || "friend"}.
                    </h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-ink/60">
                      Your enquiry is on its way. We'll get back to you within
                      one working day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.16em] text-ink/60">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.16em] text-ink/60">
                        Your Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.16em] text-ink/60">
                        Your Phone
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 …"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-type" className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.16em] text-ink/60">
                        Project Type
                      </label>
                      <select
                        id="contact-type"
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className={cn(inputClass, "appearance-none")}
                      >
                        {PROJECT_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="contact-message" className="mb-2 block text-[13px] font-semibold uppercase tracking-[0.16em] text-ink/60">
                        Your Message
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your plot, plan or idea…"
                        className={cn(inputClass, "resize-none")}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">
                        Send Message
                        <Send aria-hidden="true" />
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* Map placeholder */}
          <Reveal delay={0.1}>
            <div className="mt-12 flex h-72 flex-col items-center justify-center gap-3 rounded-2xl bg-sand text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-gold/20 text-golddeep">
                <MapPin className="size-6" aria-hidden="true" />
              </span>
              <p className="font-display text-2xl font-medium tracking-tight text-ink">
                Find us in Kerala, India
              </p>
              <p className="text-[15px] text-ink/55">
                {CONTACT.studio} · {CONTACT.phone}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
