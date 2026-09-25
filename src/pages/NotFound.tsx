import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "../components/ui/button";
import { cn } from "../lib/utils";

export function NotFoundPage() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-cream pt-20">
      <div className="px-6 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-clay">
          404 — Page not found
        </p>
        <h1 className="mt-5 font-display text-5xl font-medium tracking-tight text-charcoal md:text-7xl">
          This space is <em className="italic text-clay">still on the drawing board.</em>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-stone">
          The page you&rsquo;re looking for doesn&rsquo;t exist — but plenty of beautiful ones do.
        </p>
        <Link to="/" className={cn(buttonVariants({ variant: "gold", size: "lg" }), "mt-10")}>
          <ArrowLeft aria-hidden="true" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
