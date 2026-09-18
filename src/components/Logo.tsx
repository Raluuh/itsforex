export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#/" className="group flex items-center gap-2.5" aria-label="Ralu Markets home">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-[#07111d] shadow-[0_0_0_1px_rgba(46,230,166,0.35),0_10px_30px_rgba(46,230,166,0.15)]">
        <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
          <rect x="7" y="8" width="3.2" height="16" rx="0.6" fill="#2ee6a6" opacity="0.85" />
          <rect x="14.4" y="5" width="3.2" height="22" rx="0.6" fill="#7aa2f7" />
          <rect x="21.8" y="11" width="3.2" height="13" rx="0.6" fill="#2ee6a6" />
          <path d="M8.6 14.5h15" stroke="#f4f7fb" strokeWidth="1.1" opacity="0.35" />
        </svg>
      </span>
      {!compact ? (
        <span className="leading-none">
          <span className="block font-display text-[15px] font-bold tracking-[0.04em]">Ralu Markets</span>
          <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.22em] text-muted">
            Education · Research
          </span>
        </span>
      ) : null}
    </a>
  );
}
