import { useState } from "react";
import { courses, type Course } from "../data/content";
import { Icons } from "../components/Icons";
import { Badge, Button, Reveal, Section, SectionHeading } from "../components/ui";
import { cn } from "../utils/cn";

export function Courses() {
  const [filter, setFilter] = useState("All");
  const levels = ["All", "Beginner", "Intermediate", "Advanced", "All levels"];
  const list = courses.filter((c) => filter === "All" || c.level === filter);

  return (
    <div className="page-enter">
      <Section className="py-16 sm:py-24">
        <SectionHeading
          kicker="Courses"
          title="Programs with a spine."
          text="Each course lists level, duration, modules and instructor. Choose the door that matches your current language — not the one that sounds most glamorous."
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {levels.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setFilter(l)}
              className={cn(
                "rounded-full px-4 py-2 text-sm hairline",
                filter === l ? "bg-[var(--rm-accent)] text-[#042016]" : "text-muted",
              )}
            >
              {l}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {list.map((c, i) => (
            <Reveal key={c.slug} delay={i * 70}>
              <CourseCard course={c} />
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}

function CourseCard({ course: c }: { course: Course }) {
  return (
    <article className="glass flex h-full flex-col rounded-3xl p-6">
      <div className="flex flex-wrap gap-2">
        <Badge>{c.level}</Badge>
        <Badge>{c.duration}</Badge>
        <Badge>{c.modules} modules</Badge>
      </div>
      <h3 className="mt-4 font-display text-2xl font-semibold">{c.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{c.summary}</p>
      <p className="mt-4 text-xs text-muted">Instructor · {c.instructor}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        <Button href={`#/courses/${c.slug}`}>
          View program <Icons.Arrow className="h-4 w-4" />
        </Button>
        <Button href="#/contact" variant="ghost">
          Ask a question
        </Button>
      </div>
    </article>
  );
}

export function CourseDetail({ slug }: { slug: string }) {
  const c = courses.find((x) => x.slug === slug);
  const [open, setOpen] = useState(0);
  if (!c) {
    return (
      <Section className="py-24">
        <h1 className="font-display text-3xl">Course not found</h1>
        <Button href="#/courses" className="mt-6">
          Back to courses
        </Button>
      </Section>
    );
  }
  return (
    <div className="page-enter">
      <Section className="py-16 sm:py-24">
        <a href="#/courses" className="text-sm text-muted hover:text-[var(--rm-fg)]">
          ← All programs
        </a>
        <div className="mt-6 flex flex-wrap gap-2">
          <Badge>{c.level}</Badge>
          <Badge>{c.duration}</Badge>
          <Badge>{c.modules} modules</Badge>
        </div>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">{c.title}</h1>
        <p className="mt-4 max-w-2xl text-muted">{c.summary}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="#/contact">Request enrolment</Button>
          <Button href="#/academy" variant="ghost">
            How the academy works
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted">Instructor · {c.instructor}</p>
      </Section>

      <Section className="pb-16">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl font-semibold">Curriculum</h2>
            <p className="mt-2 text-sm text-muted">Expand a module. This is an outline, not a live student dashboard.</p>
            <div className="mt-6 space-y-3">
              {c.curriculum.map((m, i) => (
                <div key={m.module} className="overflow-hidden rounded-2xl hairline">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpen(open === i ? -1 : i)}
                  >
                    <span>
                      <span className="mr-3 font-mono text-[10px] text-accent">0{i + 1}</span>
                      <span className="font-display font-semibold">{m.module}</span>
                    </span>
                    <Icons.Chevron className={cn("h-4 w-4 transition", open === i && "rotate-180")} />
                  </button>
                  {open === i ? (
                    <ul className="space-y-2 px-5 pb-5 text-sm text-muted">
                      {m.lessons.map((l) => (
                        <li key={l} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <aside className="space-y-4 lg:col-span-5">
            <div className="glass rounded-3xl p-6">
              <h3 className="font-display text-xl font-semibold">Who it is for</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.audience}</p>
            </div>
            <div className="glass rounded-3xl p-6">
              <h3 className="font-display text-xl font-semibold">You will practise</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {c.outcomes.map((o) => (
                  <li key={o} className="flex gap-2">
                    <Icons.Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl hairline p-6 text-xs leading-relaxed text-muted">
              Enrolment does not include trading capital, signals, or a profit outcome. Completing a program does not make trading safe.
            </div>
          </aside>
        </div>
      </Section>
    </div>
  );
}
