import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

const SESSIONS = [
  { name: "Sydney", start: 21, end: 6 },
  { name: "Tokyo", start: 0, end: 9 },
  { name: "London", start: 7, end: 16 },
  { name: "New York", start: 12, end: 21 },
];

function openAt(hour: number, start: number, end: number) {
  if (start < end) return hour >= start && hour < end;
  return hour >= start || hour < end;
}

function fmt(d: Date, tz: string) {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: tz,
  }).format(d);
}

export function SessionClock({ compact = false }: { compact?: boolean }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const utcHour = now.getUTCHours();

  return (
    <div className={cn("glass rounded-3xl p-5 sm:p-6", compact && "p-4 sm:p-5")}>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Market sessions</p>
          <p className="mt-1 font-display text-lg font-semibold">Live session clock</p>
        </div>
        <div className="text-right font-mono text-xs text-muted">
          <div>UTC {fmt(now, "UTC")}</div>
          <div>EAT {fmt(now, "Africa/Nairobi")}</div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {SESSIONS.map((s) => {
          const on = openAt(utcHour, s.start, s.end);
          return (
            <div key={s.name} className={cn("rounded-2xl px-3 py-3 hairline", on && "bg-[var(--rm-accent)]/10")}>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className={cn("absolute inset-0 rounded-full", on ? "bg-accent pulse-dot" : "bg-[var(--rm-muted)]/40")} />
                  <span className={cn("relative h-2 w-2 rounded-full", on ? "bg-accent" : "bg-[var(--rm-muted)]/50")} />
                </span>
                <span className="text-sm font-semibold">{s.name}</span>
              </div>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">{on ? "Open" : "Closed"}</p>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-[11px] leading-relaxed text-muted">
        Approximate FX cash-session hours in UTC. Weekends are typically quiet. Educational tool — not a liquidity guarantee.
      </p>
    </div>
  );
}
