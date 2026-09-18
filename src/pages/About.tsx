import { founders, whyUs } from "../data/content";
import { Button, Reveal, Section, SectionHeading } from "../components/ui";
import { Icons } from "../components/Icons";

export function About() {
  return (
    <div className="page-enter">
      <Section className="py-16 sm:py-24">
        <SectionHeading
          kicker="About"
          title="Tanzania-first. Internationally serious."
          text="Ralu Markets is a Dar es Salaam brand for people who want to understand financial markets without being processed by a hype machine. We teach forex, research, psychology and risk — and we refuse to pretend that education is the same thing as income."
        />
        <div className="mt-10 overflow-hidden rounded-[2rem]">
          <img
            src="/images/dar-es-salaam.jpg"
            alt="Dar es Salaam cityscape"
            className="h-[280px] w-full object-cover sm:h-[420px]"
          />
        </div>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Dar es Salaam · home of Ralu Markets</p>
      </Section>

      <Section className="pb-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass rounded-3xl p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold">The brief we gave ourselves</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Build a school that would still look professional if a risk officer from another continent sat in the back row. Keep the African context — languages, time zone, the real learner in East Africa — without turning it into costume. Use technology to make the classroom clearer, not louder.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              We are not a broker. We do not manage money. We do not sell a dream of easy wealth. If that makes the marketing slower, so be it.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { t: "Education", d: "Fundamentals through advanced process." },
              { t: "Research", d: "Notes that teach framing, not fortune-telling." },
              { t: "Technology", d: "Tools, brand and platform built in-house." },
              { t: "Stewardship", d: "Risk language that would survive a regulator’s glance." },
            ].map((x) => (
              <div key={x.t} className="rounded-3xl hairline p-5">
                <h3 className="font-display text-lg font-semibold">{x.t}</h3>
                <p className="mt-2 text-sm text-muted">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pb-16">
        <SectionHeading kicker="Founders" title="Two desks, one standard" />
        <div className="mt-10 space-y-6">
          {founders.map((f, i) => (
            <Reveal key={f.name}>
              <article className={`grid overflow-hidden rounded-3xl glass lg:grid-cols-2 ${i % 2 ? "lg:[&>img]:order-2" : ""}`}>
                <img src={f.image} alt={f.name} className="h-72 w-full object-cover lg:h-full" />
                <div className="p-6 sm:p-10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">{f.role}</p>
                  <h3 className="mt-2 font-display text-3xl font-semibold">{f.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{f.bio}</p>
                  <p className="mt-4 text-sm text-muted">{f.focus}</p>
                  <ul className="mt-5 space-y-2">
                    {f.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm">
                        <Icons.Check className="h-4 w-4 text-accent" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pb-24">
        <SectionHeading kicker="Standards" title="What we will not do" />
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {whyUs.map((w) => (
            <div key={w.title} className="rounded-2xl hairline p-5">
              <h3 className="font-display font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-muted">{w.us}</p>
            </div>
          ))}
        </div>
        <Button href="#/contact" className="mt-10">
          Talk to us
        </Button>
      </Section>
    </div>
  );
}
