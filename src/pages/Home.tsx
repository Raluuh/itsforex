import { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";
import {
  courses,
  faqs,
  founders,
  insights,
  placeholders,
  principles,
  teach,
  whyUs,
} from "../data/content";
import { HeroChart } from "../components/HeroChart";
import { MiniChart } from "../components/MiniChart";
import { SessionClock } from "../components/SessionClock";
import { Icons } from "../components/Icons";
import { Accordion, Badge, Button, Kicker, Reveal, Section, SectionHeading, SimBadge } from "../components/ui";
import { cn } from "../utils/cn";

const teachIcons = [Icons.Book, Icons.Chart, Icons.Globe, Icons.Layers, Icons.Shield, Icons.Brain, Icons.Target, Icons.Flask];

function useCount(to: number, start: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(to);
      return;
    }
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / 900);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to]);
  return n;
}

function Stat({ label, value, suffix = "" }: { label: string; value: number; suffix?: string }) {
  const { ref, shown } = useInView<HTMLDivElement>();
  const n = useCount(value, shown);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl font-semibold sm:text-4xl">
        {n}
        {suffix}
      </div>
      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">{label}</p>
    </div>
  );
}

export function Home({ onCommunity }: { onCommunity: () => void }) {
  const pairs = ["EUR/USD", "GBP/USD", "USD/JPY", "XAU/USD", "USD/TZS", "AUD/USD", "USD/CAD", "NZD/USD"];

  return (
    <div>
      <section className="relative min-h-[calc(100vh-72px)] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-desk.jpg"
            alt=""
            className="h-full w-full object-cover opacity-25 dark:opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--rm-bg)]/30 via-[var(--rm-bg)]/55 to-[var(--rm-bg)]" />
          <HeroChart />
          <div className="noise" />
        </div>
        <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-6xl flex-col justify-center px-5 py-16 sm:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full hairline bg-[var(--rm-card)] px-3 py-1.5 text-[11px] font-medium text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-accent pulse-dot" />
                <span className="relative h-2 w-2 rounded-full bg-accent" />
              </span>
              Dar es Salaam · Education & research · Not a broker
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-[2.35rem] font-semibold leading-[1.08] tracking-tight sm:text-6xl md:text-[4.4rem]">
              Master the Markets.
              <span className="block">Build the Skill.</span>
              <span className="gradient-text">Trade With Discipline.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Practical forex education, market research and trading knowledge designed to help you understand the markets,
              manage risk and develop a disciplined trading approach.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#/courses">
                Explore Courses <Icons.Arrow className="h-4 w-4" />
              </Button>
              <Button href="#/about" variant="ghost">
                Learn More
              </Button>
            </div>
            <p className="mt-6 max-w-lg text-xs leading-relaxed text-muted">
              No guaranteed returns. No signals-as-a-shortcut. Charts in the background are simulated for atmosphere.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {[
              { k: "EUR/USD", v: "Range-aware framing", s: 11, b: 1.08 },
              { k: "Risk unit", v: "Size the loss first", s: 44, b: 1.2 },
              { k: "Process", v: "Journal → review → revise", s: 18, b: 1.4 },
            ].map((c, i) => (
              <Reveal key={c.k} delay={120 * i}>
                <div className="glass shine rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{c.k}</p>
                    <SimBadge />
                  </div>
                  <p className="mt-2 text-sm font-semibold">{c.v}</p>
                  <MiniChart seed={c.s} base={c.b} height={54} className="mt-2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="relative overflow-hidden border-y border-[var(--rm-border)] py-3">
        <div className="ticker-track flex w-max gap-10 whitespace-nowrap px-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          {[...pairs, ...pairs].map((p, i) => (
            <span key={p + i} className="flex items-center gap-10">
              {p}
              <span className="text-accent">·</span>
            </span>
          ))}
        </div>
        <p className="sr-only">Illustrative pair universe — not live quotes.</p>
      </div>

      <Section className="py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              kicker="Principles"
              title="A classroom, not a highlight reel."
              text="Three ideas sit under everything we publish: education, research, and discipline. If a piece of content does not serve those, it does not ship."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-8">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <article className="glass h-full rounded-3xl p-6 transition duration-300 hover:-translate-y-1">
                  <p className="font-mono text-xs text-accent">{p.kicker}</p>
                  <h3 className="mt-4 font-display text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-6 rounded-3xl hairline px-4 py-8 sm:grid-cols-4 sm:px-8">
          <Stat value={8} label="Teaching pillars" />
          <Stat value={4} label="Structured programs" />
          <Stat value={2} label="Languages" />
          <div className="text-center">
            <div className="font-display text-3xl font-semibold sm:text-4xl">0%</div>
            <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">Profit promises</p>
          </div>
        </div>
      </Section>

      <Section className="pb-20 sm:pb-28">
        <SectionHeading
          kicker="Curriculum"
          title="What we teach"
          text="A coherent stack — from how FX is priced to how a strategy is tested — so you are not collecting disconnected tricks."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teach.map((t, i) => {
            const Icon = teachIcons[i];
            return (
              <Reveal key={t.title} delay={(i % 4) * 70}>
                <a
                  href="#/academy"
                  className="group glass shine flex h-full flex-col rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--rm-accent)]/30"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[var(--rm-accent)]/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <Badge>{t.tag}</Badge>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{t.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{t.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent">
                    Explore academy <Icons.Arrow className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="pb-20 sm:pb-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            kicker="Academy"
            title="Learning programs"
            text="Four programs. Clear levels. Named instructors. Designed to be finished, not merely purchased."
          />
          <Button href="#/courses" variant="ghost" className="shrink-0">
            All courses <Icons.Arrow className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {courses.map((c, i) => (
            <Reveal key={c.slug} delay={i * 80}>
              <a
                href={`#/courses/${c.slug}`}
                className="group glass shine grid h-full gap-5 rounded-3xl p-6 transition hover:-translate-y-1 sm:grid-cols-[1fr_auto]"
              >
                <div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>{c.level}</Badge>
                    <Badge>{c.duration}</Badge>
                    <Badge>{c.modules} modules</Badge>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.summary}</p>
                  <p className="mt-4 text-xs text-muted">Instructor · {c.instructor}</p>
                </div>
                <div className="flex items-end justify-between gap-4 sm:flex-col sm:items-end">
                  <div className="w-40">
                    <div className="mb-2 flex justify-between font-mono text-[10px] uppercase tracking-wider text-muted">
                      <span>Curriculum</span>
                      <span>{c.modules} units</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full accent-line" style={{ width: `${36 + i * 14}%` }} />
                    </div>
                    <p className="mt-2 text-[10px] text-muted">Outline preview — not your progress</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    View <Icons.Arrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pb-20 sm:pb-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="Research desk"
            title="Market insights"
            text="Sample notes for EUR/USD, GBP/USD, USD/JPY and XAU/USD. They show how we write — context, structure, risk, invalidation — not what you should buy."
          />
          <Button href="#/insights" variant="ghost">
            Open the desk <Icons.Arrow className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {insights.map((ins, i) => (
            <Reveal key={ins.slug} delay={i * 70}>
              <a href={`#/insights/${ins.slug}`} className="group glass shine block rounded-3xl p-5 transition hover:-translate-y-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-display text-xl font-semibold">{ins.pair}</p>
                    <p className="text-xs text-muted">{ins.name}</p>
                  </div>
                  <SimBadge />
                </div>
                <MiniChart seed={ins.seed} base={ins.base} className="mt-4" />
                <div className="mt-3 flex items-center justify-between gap-3">
                  <p className="text-sm text-muted">{ins.bias}</p>
                  <span className="text-xs font-semibold text-accent">Read note</span>
                </div>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{ins.summary}</p>
              </a>
            </Reveal>
          ))}
        </div>
        <div className="mt-6">
          <SessionClock />
        </div>
      </Section>

      <Section className="pb-20 sm:pb-28">
        <SectionHeading kicker="People" title="Meet the founders" text="Two roles. One standard: teach seriously, build carefully, refuse the guru script." />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 90}>
              <article className="glass overflow-hidden rounded-3xl">
                <div className="grid sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-[280px]">
                    <img src={f.image} alt={f.name} className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">{f.role}</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold">{f.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{f.focus}</p>
                    <ul className="mt-5 space-y-2">
                      {f.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm">
                          <Icons.Check className="h-4 w-4 text-accent" /> {p}
                        </li>
                      ))}
                    </ul>
                    <a href="#/about" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                      Full story <Icons.Arrow className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pb-20 sm:pb-28">
        <SectionHeading
          kicker="Why Ralu Markets"
          title="Built as an alternative to the usual pitch."
          text="If you have seen the cars, the lifestyle, and the guaranteed income — this is the other door."
        />
        <div className="mt-10 overflow-hidden rounded-3xl hairline">
          <div className="grid grid-cols-[1fr_1fr] bg-[var(--rm-card)] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted sm:grid-cols-[1.1fr_1fr_1fr] sm:px-6">
            <span className="hidden sm:inline">Theme</span>
            <span className="text-accent">Ralu Markets</span>
            <span>Typical hype cycle</span>
          </div>
          {whyUs.map((row, i) => (
            <div
              key={row.title}
              className={cn(
                "grid grid-cols-1 gap-2 border-t border-[var(--rm-border)] px-5 py-4 sm:grid-cols-[1.1fr_1fr_1fr] sm:px-6",
                i % 2 === 0 ? "bg-transparent" : "bg-[var(--rm-card)]",
              )}
            >
              <p className="font-display text-base font-semibold">{row.title}</p>
              <p className="text-sm text-[var(--rm-fg)]">{row.us}</p>
              <p className="text-sm text-muted">{row.them}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-20 sm:pb-28">
        <SectionHeading
          kicker="Perspectives"
          title="How serious learners talk about the work"
          text="These are clearly labelled placeholder perspectives for the website — not verified testimonials, star ratings, or proof of results."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {placeholders.map((t, i) => (
            <Reveal key={t.meta} delay={i * 80}>
              <blockquote className="glass h-full rounded-3xl p-6">
                <Badge className="mb-4">Placeholder · not a review</Badge>
                <p className="text-[15px] leading-relaxed">“{t.quote}”</p>
                <footer className="mt-5 text-sm text-muted">
                  <span className="block font-semibold text-[var(--rm-fg)]">{t.name}</span>
                  {t.meta}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pb-20 sm:pb-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] hairline">
            <img src="/images/community.jpg" alt="Learners collaborating" className="absolute inset-0 h-full w-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#05080f] via-[#05080f]/80 to-transparent" />
            <div className="relative grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
              <div>
                <Kicker>Community</Kicker>
                <h2 className="font-display text-3xl font-semibold sm:text-5xl">Learn With Us. Grow Your Knowledge.</h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
                  Join our community for educational content, market insights, upcoming masterclasses and new learning opportunities.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button onClick={onCommunity}>Join the Community</Button>
                  <Button href="#/masterclasses" variant="ghost" className="text-white hairline">
                    Masterclasses
                  </Button>
                </div>
              </div>
              <Newsletter />
            </div>
          </div>
        </Reveal>
      </Section>

      <Section className="pb-24 sm:pb-32">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading kicker="FAQ" title="Straight answers." text="If a question is really about getting rich, the answer is still no." />
          </div>
          <div className="lg:col-span-8">
            <Accordion items={faqs} />
          </div>
        </div>
      </Section>
    </div>
  );
}

function Newsletter() {
  const [ok, setOk] = useState(false);
  return (
    <form
      className="glass rounded-3xl p-6"
      onSubmit={(e) => {
        e.preventDefault();
        setOk(true);
      }}
    >
      <p className="font-display text-xl font-semibold text-white">Notes, not noise.</p>
      <p className="mt-2 text-sm text-white/65">
        Occasional curriculum updates and research explainers. No guaranteed-return language. Unsubscribe anytime.
      </p>
      {ok ? (
        <p className="mt-5 text-sm text-accent">Received. Demo only — no email was stored.</p>
      ) : (
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <input required type="email" placeholder="you@email.com" className="h-12 flex-1 rounded-full px-4 text-sm" />
          <Button type="submit">Subscribe</Button>
        </div>
      )}
    </form>
  );
}
