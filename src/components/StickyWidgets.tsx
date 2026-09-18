import { useEffect, useState } from "react";
import { Icons } from "./Icons";
import { Button } from "./ui";

export function StickyWidgets({
  onCommunity,
}: {
  onCommunity: () => void;
}) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed bottom-24 right-5 z-40 flex flex-col items-end gap-3 md:bottom-5">
        {showTop ? (
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full glass"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Icons.ArrowUp className="h-4 w-4" />
          </button>
        ) : null}
        <button
          type="button"
          onClick={onCommunity}
          className="flex items-center gap-2 rounded-full bg-[#1aad5a] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(26,173,90,0.35)]"
          aria-label="Join community on WhatsApp"
        >
          <Icons.WhatsApp className="h-4 w-4" />
          <span className="hidden sm:inline">Community</span>
        </button>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[var(--rm-border)] bg-[color-mix(in_oklab,var(--rm-bg)_86%,transparent)] px-4 py-3 backdrop-blur-xl md:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
          <p className="text-[11px] leading-tight text-muted">
            Risk-aware education.
            <span className="block text-[var(--rm-fg)]">No profit promises.</span>
          </p>
          <Button href="#/academy" className="shrink-0">
            Start Learning
          </Button>
        </div>
      </div>
    </>
  );
}

export function CommunityModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center px-4" role="dialog" aria-modal="true">
      <button type="button" className="absolute inset-0 bg-black/55 backdrop-blur-sm" aria-label="Close" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-3xl glass p-6 sm:p-8">
        <button type="button" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full hairline" onClick={onClose} aria-label="Close">
          <Icons.Close className="h-4 w-4" />
        </button>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Community</p>
        <h3 className="mt-2 font-display text-2xl font-semibold">Learn with us. Grow your knowledge.</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Join the waitlist for educational content, market insights, upcoming masterclasses and new learning opportunities. Access to the WhatsApp community is shared after you enrol or join the list — we do not blast unsolicited signals.
        </p>
        {sent ? (
          <p className="mt-6 rounded-2xl bg-[var(--rm-accent)]/12 px-4 py-3 text-sm text-accent">
            Thank you. This is a front-end demo — in production, this would confirm your place on the list.
          </p>
        ) : (
          <form
            className="mt-6 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input required type="email" placeholder="Email address" className="h-12 w-full rounded-2xl px-4" />
            <input type="tel" placeholder="WhatsApp (optional)" className="h-12 w-full rounded-2xl px-4" />
            <Button type="submit" className="w-full">
              Request access
            </Button>
          </form>
        )}
        <p className="mt-4 text-[11px] text-muted">Education only. No guaranteed returns. You can unsubscribe at any time.</p>
      </div>
    </div>
  );
}
