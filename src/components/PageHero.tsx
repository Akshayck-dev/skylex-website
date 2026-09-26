import { Link } from "react-router-dom";

interface PageHeroProps {
  title: string;
  sub?: string;
  crumb: string;
  image: string;
}

/** Light inner-page banner — mist band, Forum heading, breadcrumb. */
export function PageHero({ title, sub, crumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-mist pt-[112px]">
      {/* faint watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 select-none font-display text-[16rem] leading-none text-brand/[0.05] lg:block"
      >
        {crumb.charAt(0).toUpperCase()}
      </span>
      <div className="relative mx-auto w-full max-w-shell px-6 pb-16 pt-14 md:px-10 md:pb-20 md:pt-16 lg:px-16">
        <nav
          aria-label="Breadcrumb"
          className="text-[11px] font-semibold uppercase tracking-[0.24em]"
        >
          <Link to="/" className="text-ink/50 transition-colors hover:text-brand">
            Home
          </Link>
          <span className="mx-2.5 text-brand" aria-hidden="true">
            »
          </span>
          <span className="text-brand" aria-current="page">
            {crumb}
          </span>
        </nav>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] text-ink text-balance md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {sub && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/60 md:text-lg">
            {sub}
          </p>
        )}
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-brand via-teal to-tealbright" aria-hidden="true" />
    </section>
  );
}
