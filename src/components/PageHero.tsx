import { Link } from "react-router-dom";

interface PageHeroProps {
  title: string;
  sub?: string;
  crumb: string;
  image: string;
}

/** Dark inner-page banner with image, gradient overlay and breadcrumb. */
export function PageHero({ title, sub, crumb, image }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-ink">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-shell px-6 pb-14 pt-36 md:px-10 md:pb-16 lg:px-16">
        <nav
          aria-label="Breadcrumb"
          className="text-[11px] font-semibold uppercase tracking-[0.24em]"
        >
          <Link to="/" className="text-cream/60 transition-colors hover:text-gold">
            Home
          </Link>
          <span className="mx-2.5 text-gold" aria-hidden="true">
            »
          </span>
          <span className="text-gold" aria-current="page">
            {crumb}
          </span>
        </nav>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-cream text-balance md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {sub && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/70 md:text-lg">
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
