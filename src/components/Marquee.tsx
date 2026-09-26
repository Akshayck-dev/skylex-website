const ITEMS = [
  "Architecture",
  "Construction",
  "Interior Design",
  "Turnkey Projects",
  "Renovation",
  "Space Planning",
];

/** Gold ticker strip — infinite marquee of disciplines. */
export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-golddeep/40 bg-gold py-3.5" aria-hidden="true">
      <div className="flex w-max animate-marquee items-center gap-8 pr-8">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="whitespace-nowrap text-sm font-bold uppercase tracking-[0.28em] text-white">
              {item}
            </span>
            <span className="size-1.5 rotate-45 bg-white/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
