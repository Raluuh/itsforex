import { insights } from "../data/content";
import { CandleStrip, MiniChart } from "../components/MiniChart";
import { SessionClock } from "../components/SessionClock";
import { Badge, Button, Reveal, Section, SectionHeading, SimBadge } from "../components/ui";
import { Icons } from "../components/Icons";

export function Insights() {
  return (
    <div className="page-enter">
      <Section className="py-16 sm:py-24">
        <SectionHeading
          kicker="Market Insights"
          title="How a research note is built."
          text="Four sample instruments. Simulated charts. The point is the format: context, structure, risks, invalidation. Nothing here is a recommendation to trade."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {insights.map((ins, i) => (
            <Reveal key={ins.slug} delay={i * 70}>
              <a href={`#/insights/${ins.slug}`} className="glass shine block rounded-3xl p-6 transition hover:-translate-y-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold">{ins.pair}</h3>
                    <p className="text-sm text-muted">{ins.name}</p>
                  </div>
                  <SimBadge />
                </div>
                <MiniChart seed={ins.seed} base={ins.base} className="mt-4" height={110} />
                <p className="mt-3 text-sm font-medium">{ins.bias}</p>
                <p className="mt-2 line-clamp-3 text-sm text-muted">{ins.summary}</p>
              </a>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <SessionClock />
          <div className="relative overflow-hidden rounded-3xl hairline min-h-[240px]">
            <img src="/images/research.jpg" alt="Research workspace" className="absolute inset-0 h-full w-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--rm-bg)] to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-6">
              <p className="font-display text-xl font-semibold">Evidence over theatre</p>
              <p className="mt-2 max-w-sm text-sm text-muted">We would rather publish a careful maybe than a loud call.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export function InsightDetail({ slug }: { slug: string }) {
  const ins = insights.find((x) => x.slug === slug);
  if (!ins) {
    return (
      <Section className="py-24">
        <h1 className="font-display text-3xl">Insight not found</h1>
        <Button href="#/insights" className="mt-6">
          Back to insights
        </Button>
      </Section>
    );
  }
  return (
    <div className="page-enter">
      <Section className="py-16 sm:py-24">
        <a href="#/insights" className="text-sm text-muted">
          ← Research desk
        </a>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Badge>Educational example</Badge>
          <SimBadge />
        </div>
        <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">{ins.pair}</h1>
        <p className="mt-2 text-muted">
          {ins.name} · {ins.theme}
        </p>
        <div className="mt-8 overflow-hidden rounded-3xl glass p-5 sm:p-8">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">Simulated structure</p>
            <p className="text-sm font-medium">{ins.bias}</p>
          </div>
          <CandleStrip seed={ins.seed} base={ins.base} />
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl font-semibold">Context</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{ins.context}</p>
            <h3 className="mt-8 font-display text-xl font-semibold">Illustrative structure</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {ins.structure.map((s) => (
                <li key={s} className="flex gap-2">
                  <Icons.Check className="mt-0.5 h-4 w-4 text-accent" />
                  {s}
                </li>
              ))}
            </ul>
            <h3 className="mt-8 font-display text-xl font-semibold">What would worry us</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {ins.risks.map((s) => (
                <li key={s} className="flex gap-2">
                  <Icons.Info className="mt-0.5 h-4 w-4 text-[var(--rm-accent-2)]" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <aside className="lg:col-span-5">
            <div className="glass rounded-3xl p-6">
              <h3 className="font-display text-lg font-semibold">Classroom use</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Read this as a template. Name the theme. Sketch structure. List risks. Write invalidation. Then close the laptop if you do not have a risk budget.
              </p>
              <Button href="#/academy" className="mt-5">
                Study the method
              </Button>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted">{ins.summary}</p>
          </aside>
        </div>
      </Section>
    </div>
  );
}
