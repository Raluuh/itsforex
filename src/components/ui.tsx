import { useState, type ReactNode } from "react";
import { cn } from "../utils/cn";
import { useInView } from "../hooks/useInView";
import { Icons } from "./Icons";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, shown } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn("reveal", shown && "reveal-in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative px-5 sm:px-8", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
      <span className="h-px w-7 accent-line" />
      {children}
    </div>
  );
}

export function SectionHeading({
  kicker,
  title,
  text,
  align = "left",
}: {
  kicker: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <Kicker>{kicker}</Kicker>
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.6rem] md:leading-[1.15]">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-relaxed text-muted sm:text-[17px]">{text}</p> : null}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const styles = {
    primary:
      "bg-[var(--rm-accent)] text-[#042016] hover:brightness-110 shadow-[0_10px_30px_var(--rm-glow)]",
    ghost:
      "bg-transparent text-[var(--rm-fg)] hairline hover:bg-white/5 dark:hover:bg-white/5",
    light:
      "bg-[var(--rm-fg)] text-[var(--rm-bg)] hover:opacity-90",
  }[variant];
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition duration-200",
    styles,
    className,
  );
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] hairline text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Accordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-[var(--rm-border)] hairline overflow-hidden rounded-2xl">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="bg-[var(--rm-card)]">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left sm:px-6 sm:py-5"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-display text-base font-semibold sm:text-lg">{item.q}</span>
              <Icons.Chevron className={cn("h-5 w-5 shrink-0 transition", isOpen && "rotate-180")} />
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6 sm:text-[15px]">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function SimBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--rm-accent)]/12 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--rm-accent)]" />
      Simulated
    </span>
  );
}
