import { teach, courses } from "../data/content";
import { Icons } from "../components/Icons";
import { Badge, Button, Reveal, Section, SectionHeading } from "../components/ui";

const path = [
  { n: "01", title: "Language", text: "Pairs, sessions, costs, leverage. You cannot size risk in a vocabulary you do not have." },
  { n: "02", title: "Maps", text: "Structure and charts as a way of seeing the auction — not decorating a screenshot." },
  { n: "03", title: "Risk", text: "Position size, drawdown, correlation. The unglamorous core of the craft." },
  { n: "04", title: "Process", text: "Hypotheses, journals, reviews. Strategy as research, not as identity." },
];

export function Academy() {
  return (
    <div className="page-enter">
      <section className="relative overflow-hidden">
        <img src="/images/academy.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--rm-bg)]/40 via-[var(--rm-bg)]/75 to-[var(--rm-bg)]" />
        <Section className="relative py-20 sm:py-28">
          <Reveal>
            <SectionHeading
              kicker="Academy"
              title="A path you can actually finish."
              text="Ralu Markets is built as a school: sequenced programs, named instructors, explicit outcomes, and a platform that will grow into a full learning environment — progress, notes, and reviews included."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#/courses">
                Browse programs <Icons.Arrow className="h-4 w-4" />
              </Button>
              <Button href="#/masterclasses" variant="ghost">
                Masterclasses
              </Button>
            </div>
          </Reveal>
        </Section>
      </section>

      <Section className="pb-20">
        <SectionHeading kicker="Method" title="How learning is sequenced" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {path.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <article className="glass h-full rounded-3xl p-6">
                <p className="font-mono text-xs text-accent">{s.n}</p>
                <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pb-20">
        <SectionHeading
          kicker="Platform preview"
          title="Curriculum UI, without fake progress"
          text="This is a preview of how a learning platform at Ralu Markets is meant to feel. Bars show program structure, not your personal completion — we will not invent a student account for you."
        />
        <div className="mt-10 space-y-4">
          {courses.map((c, i) => (
            <Reveal key={c.slug} delay={i * 60}>
              <a href={`#/courses/${c.slug}`} className="glass flex flex-col gap-4 rounded-3xl p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>{c.level}</Badge>
                    <Badge>{c.duration}</Badge>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold">{c.title}</h3>
                  <p className="text-sm text-muted">{c.modules} modules · {c.instructor}</p>
                </div>
                <div className="w-full sm:w-64">
                  <div className="mb-1 flex justify-between font-mono text-[10px] uppercase tracking-wider text-muted">
                    <span>Structure</span>
                    <span>{c.modules} modules</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full accent-line" style={{ width: `${20 + c.modules * 4}%` }} />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pb-24">
        <SectionHeading kicker="Pillars" title="Eight subjects, one craft" />
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {teach.map((t) => (
            <div key={t.title} className="rounded-2xl hairline p-5">
              <h3 className="font-display text-lg font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-3xl glass p-6 sm:p-8">
          <h3 className="font-display text-2xl font-semibold">Classroom rules</h3>
          <ul className="mt-4 grid gap-3 text-sm text-muted sm:grid-cols-2">
            <li className="flex gap-2"><Icons.Check className="mt-0.5 h-4 w-4 text-accent" /> No guaranteed-income language, ever.</li>
            <li className="flex gap-2"><Icons.Check className="mt-0.5 h-4 w-4 text-accent" /> Questions about process beat questions about entries.</li>
            <li className="flex gap-2"><Icons.Check className="mt-0.5 h-4 w-4 text-accent" /> English primary; Kiswahili supported in community.</li>
            <li className="flex gap-2"><Icons.Check className="mt-0.5 h-4 w-4 text-accent" /> You remain responsible for any capital you choose to risk.</li>
          </ul>
        </div>
      </Section>
    </div>
  );
}
