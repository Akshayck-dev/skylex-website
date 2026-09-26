import { useNavigate } from "react-router-dom";
import { Award, Eye, Leaf, Lightbulb, Ruler, ShieldCheck, Target } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { ClipReveal, Reveal, SectionHead } from "../components/shared";
import { Button } from "../components/ui/button";
import { PRINCIPLES, STATS } from "../data/content";

const VALUES = [
  ...PRINCIPLES.map((p, i) => ({
    title: p.title,
    description: p.description,
    Icon: [Lightbulb, Award, ShieldCheck, Ruler][i],
  })),
  {
    title: "Sustainability",
    description: "Building a better tomorrow — responsible materials, honest construction, homes that age gracefully.",
    Icon: Leaf,
  },
];

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <>
      <PageHero
        title="About Us"
        sub="We build more than structures. We build trust, relationships and spaces for a better tomorrow."
        crumb="About"
        image="images/about.jpg"
      />

      {/* Story split */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-shell grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-20 lg:px-16">
          <ClipReveal className="rounded-2xl">
            <img
              src="images/featured.jpg"
              alt="A Skylex residence at dusk"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </ClipReveal>
          <div>
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-golddeep">
                Our Story
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink text-balance md:text-5xl lg:text-6xl">
                Engineers by training. Designers at heart.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-base leading-relaxed text-ink/65 md:text-lg">
                Founded with a vision to redefine modern living, Skylex has
                grown into a trusted name in construction and interior design.
                With a passion for quality, innovation and client satisfaction,
                we create spaces that stand the test of time.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink/65 md:text-lg">
                Design, construction and interiors under one roof means nothing
                is lost between drawing and dwelling. What we imagine is what
                gets built — down to the last joint.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <Button variant="gold" size="lg" className="mt-9" onClick={() => navigate("/process")}>
                Our Journey
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Dark stats band */}
      <section className="bg-white py-20 md:py-24" aria-label="Studio facts">
        <div className="mx-auto grid max-w-shell grid-cols-2 gap-y-12 px-6 md:px-10 lg:grid-cols-4 lg:px-16">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06} className="text-center">
              <p className="font-display text-5xl font-medium text-gold md:text-6xl lg:text-7xl">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-ink/55">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {[
              {
                Icon: Target,
                title: "Our Mission",
                text: "To create exceptional spaces through quality construction, innovative design and a client-centric approach.",
              },
              {
                Icon: Eye,
                title: "Our Vision",
                text: "To be a leading construction and interior company known for excellence, integrity and sustainable growth.",
              },
            ].map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-sand p-9 md:p-12">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-brand text-white">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-7 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
                    {title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ink/65 md:text-lg">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream pb-24 md:pb-32">
        <div className="mx-auto max-w-shell px-6 md:px-10 lg:px-16">
          <SectionHead
            eyebrow="Our Values"
            title="What we stand for"
            sub="The principles behind every plan we draw and every wall we raise."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {VALUES.map(({ title, description, Icon }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-ink/10 bg-cream p-8 text-center transition-colors duration-300 hover:border-gold/60">
                  <span className="flex size-14 items-center justify-center rounded-full bg-gold/15 text-golddeep">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-medium tracking-tight text-ink">
                    {title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/60">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
