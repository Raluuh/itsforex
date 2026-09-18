import { useEffect, useMemo, useRef, useState } from "react";
import { courses, faqs, insights, nav, teach } from "../data/content";
import { Icons } from "./Icons";

type Hit = { href: string; title: string; meta: string };

export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQ("");
      setTimeout(() => input.current?.focus(), 40);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) onClose();
        else document.dispatchEvent(new CustomEvent("ralu-search"));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const hits = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const all: Hit[] = [
      ...nav.map((n) => ({ href: n.href, title: n.label, meta: "Page" })),
      ...courses.map((c) => ({ href: `#/courses/${c.slug}`, title: c.title, meta: `${c.level} · Course` })),
      ...insights.map((i) => ({ href: `#/insights/${i.slug}`, title: i.pair, meta: "Market insight" })),
      ...teach.map((t) => ({ href: "#/academy", title: t.title, meta: "Curriculum" })),
      ...faqs.map((f) => ({ href: "#/resources", title: f.q, meta: "FAQ" })),
    ];
    if (!needle) return all.slice(0, 8);
    return all.filter((h) => `${h.title} ${h.meta}`.toLowerCase().includes(needle)).slice(0, 10);
  }, [q]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[12vh]" role="dialog" aria-modal="true" aria-label="Search">
      <button type="button" className="absolute inset-0 bg-black/55 backdrop-blur-sm" aria-label="Close search" onClick={onClose} />
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl glass">
        <div className="flex items-center gap-3 border-b border-[var(--rm-border)] px-4">
          <Icons.Search className="h-4 w-4 text-muted" />
          <input
            ref={input}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search courses, insights, pages…"
            className="h-14 w-full border-0 bg-transparent outline-none"
          />
          <kbd className="hidden rounded-md hairline px-2 py-1 font-mono text-[10px] text-muted sm:inline">ESC</kbd>
        </div>
        <ul className="max-h-[50vh] overflow-auto p-2">
          {hits.length === 0 ? (
            <li className="px-3 py-6 text-center text-sm text-muted">No matches. Try “risk”, “EUR”, or “beginner”.</li>
          ) : (
            hits.map((h) => (
              <li key={h.href + h.title}>
                <a
                  href={h.href}
                  onClick={onClose}
                  className="flex items-center justify-between gap-4 rounded-2xl px-3 py-3 hover:bg-white/5"
                >
                  <span className="text-sm font-medium">{h.title}</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted">{h.meta}</span>
                </a>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
