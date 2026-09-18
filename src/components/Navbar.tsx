import { useEffect, useState } from "react";
import { nav } from "../data/content";
import { navMatch } from "../hooks/useRoute";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../utils/cn";
import { Icons } from "./Icons";
import { Logo } from "./Logo";
import { Button } from "./ui";

export function Navbar({
  path,
  onSearch,
}: {
  path: string;
  onSearch: () => void;
}) {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={cn("sticky top-0 z-50 transition", (scrolled || open) && "nav-blur")}>
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = navMatch(path, item.id);
            return (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-[13px] font-medium text-muted transition hover:text-[var(--rm-fg)]",
                  active && "bg-[color-mix(in_oklab,var(--rm-fg)_7%,transparent)] text-[var(--rm-fg)] hairline",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full hairline text-muted hover:text-[var(--rm-fg)]"
            aria-label="Search"
            onClick={onSearch}
          >
            <Icons.Search className="h-4.5 w-4.5 h-[18px] w-[18px]" />
          </button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full hairline text-muted hover:text-[var(--rm-fg)]"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggle}
          >
            {theme === "dark" ? <Icons.Sun className="h-[18px] w-[18px]" /> : <Icons.Moon className="h-[18px] w-[18px]" />}
          </button>
          <Button href="#/academy" className="hidden sm:inline-flex">
            Start Learning
          </Button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full hairline lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Icons.Close className="h-5 w-5" /> : <Icons.Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="nav-blur lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 pb-6 sm:px-8" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  "rounded-2xl px-4 py-3 text-base font-medium",
                  navMatch(path, item.id) ? "bg-white/5 hairline" : "text-muted",
                )}
              >
                {item.label}
              </a>
            ))}
            <Button href="#/academy" className="mt-3 w-full">
              Start Learning
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
