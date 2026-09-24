import Lenis from "lenis";

let lenis: Lenis | null = null;

/** App-wide Lenis singleton (guarded for StrictMode double-mount). */
export function getLenis(): Lenis {
  if (!lenis) {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  }
  return lenis;
}

export function destroyLenis() {
  lenis?.destroy();
  lenis = null;
}

/** Instant jump to top that respects Lenis when it's running. */
export function scrollToTopInstant() {
  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
  } else {
    window.scrollTo({ top: 0 });
  }
}
