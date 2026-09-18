import { faqs, glossary, resources } from "../data/content";
import { Accordion, Badge, Reveal, Section, SectionHeading } from "../components/ui";

export function Resources() {
  return (
    <div className="page-enter">
      <Section className="py-16 sm:py-24">
        <SectionHeading
          kicker="Resources"
          title="Tools for a slower, more honest education."
          text="Guides, a glossary, and the same FAQs we publish on the homepage. Nothing here is a downloadable shortcut to profitability."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {resources.map((r, i) => (
            <Reveal key={r.title} delay={i * 70}>
              <a href={r.href} className="glass block h-full rounded-3xl p-6 transition hover:-translate-y-1">
                <Badge>{r.tag}</Badge>
                <h3 className="mt-3 font-display text-xl font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-muted">{r.text}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pb-16">
        <SectionHeading kicker="Glossary" title="A few words, used carefully" />
        <div className="mt-8 divide-y divide-[var(--rm-border)] overflow-hidden rounded-3xl hairline">
          {glossary.map((g) => (
            <div key={g.term} className="grid gap-2 bg-[var(--rm-card)] px-5 py-4 sm:grid-cols-[180px_1fr] sm:px-6">
              <p className="font-display font-semibold">{g.term}</p>
              <p className="text-sm text-muted">{g.def}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-16">
        <SectionHeading
          kicker="Risk primer"
          title="If you remember one page, remember this."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[
            { t: "Leverage is not a gift", d: "It is a multiplier of error. Size as if the next idea is wrong." },
            { t: "Costs are part of the strategy", d: "Spread, slippage and swaps belong in expectancy, not in a footnote." },
            { t: "You can always stand aside", d: "No session is entitled to your attention. Flat is a position." },
          ].map((x) => (
            <article key={x.t} className="glass rounded-3xl p-6">
              <h3 className="font-display text-lg font-semibold">{x.t}</h3>
              <p className="mt-2 text-sm text-muted">{x.d}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="pb-24">
        <SectionHeading kicker="FAQ" title="Questions we would rather answer in public" />
        <div className="mt-8">
          <Accordion items={faqs} />
        </div>
      </Section>
    </div>
  );
}
