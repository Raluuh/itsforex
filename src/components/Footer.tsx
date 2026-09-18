import { brand, nav, riskLong } from "../data/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-8 border-t border-[var(--rm-border)]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              A Tanzania-based financial markets education and research brand. Built to teach the craft — not to sell a fantasy.
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              {brand.location} · {brand.languages.join(" · ")}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Navigate</p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {nav.slice(0, 5).map((n) => (
                  <li key={n.id}>
                    <a href={n.href} className="hover:text-[var(--rm-fg)]">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Learn</p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {nav.slice(5).map((n) => (
                  <li key={n.id}>
                    <a href={n.href} className="hover:text-[var(--rm-fg)]">
                      {n.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#/courses/forex-fundamentals" className="hover:text-[var(--rm-fg)]">
                    Fundamentals
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Contact</p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>
                  <a href={`mailto:${brand.email}`} className="hover:text-[var(--rm-fg)]">
                    {brand.email}
                  </a>
                </li>
                <li>{brand.hours}</li>
                <li>
                  <a href="#/contact" className="hover:text-[var(--rm-fg)]">
                    Write to us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl hairline bg-[var(--rm-card)] p-5 sm:p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Risk disclosure</p>
          <p className="mt-3 text-xs leading-relaxed text-muted sm:text-[13px]">{riskLong}</p>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ralu Markets. Education and research. Not a brokerage.</p>
          <p className="font-mono uppercase tracking-[0.16em]">Karibu · Learn with discipline</p>
        </div>
      </div>
    </footer>
  );
}
