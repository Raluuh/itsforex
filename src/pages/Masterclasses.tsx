import { masterclasses } from "../data/content";
import { Badge, Button, Reveal, Section, SectionHeading } from "../components/ui";
import { Icons } from "../components/Icons";

export function Masterclasses() {
  return (
    <div className="page-enter">
      <section className="relative overflow-hidden">
        <img src="/images/masterclass.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--rm-bg)]/50 via-[var(--rm-bg)]/80 to-[var(--rm-bg)]" />
        <Section className="relative py-20 sm:py-28">
          <SectionHeading
            kicker="Masterclasses"
            title="Interactive sessions with the market specialist."
            text="Live classrooms, not a signal room. You will watch a note being built, ask process questions, and leave with a checklist. Confirmed dates are shared with enrolled learners — the cards below are examples of format and tone."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#/contact">Register interest</Button>
            <Button href="#/courses/live-masterclasses" variant="ghost">
              Program outline
            </Button>
          </div>
        </Section>
      </section>
      <Section className="pb-24">
        <div className="grid gap-4 lg:grid-cols-2">
          {masterclasses.map((m, i) => (
            <Reveal key={m.title} delay={i * 70}>
              <article className="glass h-full rounded-3xl p-6">
                <div className="flex flex-wrap gap-2">
                  <Badge>{m.level}</Badge>
                  <Badge>{m.duration}</Badge>
                  <Badge>Example listing</Badge>
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold">{m.title}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted">{m.date}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{m.blurb}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-accent">
                  <Icons.Play className="h-4 w-4" /> Classroom format
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 grid gap-4 rounded-3xl hairline p-6 sm:grid-cols-3 sm:p-8">
          {[
            { t: "Pre-read", d: "A short note so we share vocabulary before the call." },
            { t: "Walkthrough", d: "Charts and research structure, built in the open." },
            { t: "After-notes", d: "A recap for enrolled learners. Still not a signal." },
          ].map((x) => (
            <div key={x.t}>
              <h3 className="font-display text-lg font-semibold">{x.t}</h3>
              <p className="mt-2 text-sm text-muted">{x.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
