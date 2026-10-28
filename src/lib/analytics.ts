// Thin wrapper around GA4's gtag(), so the rest of the site never touches
// `window.gtag` directly. Safe to call even if GA hasn't loaded (e.g. an
// ad-blocker), and safe to call during server-side rendering.
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void };
  if (typeof window !== "undefined" && w.gtag) {
    w.gtag("event", name, params);
  }
}
