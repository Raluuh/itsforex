import { useState } from "react";
import { brand } from "../data/content";
import { Button, Section, SectionHeading } from "../components/ui";
import { Icons } from "../components/Icons";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="page-enter">
      <Section className="py-16 sm:py-24">
        <SectionHeading
          kicker="Contact"
          title="Write to the desk."
          text="Enrolment questions, partnerships, press, or a careful disagreement with something we published — we read. We do not provide personal trade instructions by email."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-4">
            {[
              { icon: Icons.Mail, k: "Email", v: brand.email, href: `mailto:${brand.email}` },
              { icon: Icons.Pin, k: "Studio", v: brand.location },
              { icon: Icons.Clock, k: "Hours", v: brand.hours },
              { icon: Icons.Globe, k: "Languages", v: brand.languages.join(" · ") },
            ].map((row) => (
              <div key={row.k} className="flex gap-4 rounded-2xl hairline p-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--rm-accent)]/10 text-accent">
                  <row.icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{row.k}</p>
                  {row.href ? (
                    <a href={row.href} className="text-sm font-medium hover:text-accent">
                      {row.v}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{row.v}</p>
                  )}
                </div>
              </div>
            ))}
            <img src="/images/dar-es-salaam.jpg" alt="Dar es Salaam" className="h-48 w-full rounded-3xl object-cover" />
          </div>
          <form
            className="glass rounded-3xl p-6 sm:p-8 lg:col-span-7"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            {sent ? (
              <div>
                <h3 className="font-display text-2xl font-semibold">Received.</h3>
                <p className="mt-3 text-sm text-muted">
                  This demo does not send a real message. In production, the desk would reply from {brand.email}.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm">
                    Name
                    <input required name="name" className="mt-1.5 h-12 w-full rounded-2xl px-4" />
                  </label>
                  <label className="text-sm">
                    Email
                    <input required type="email" name="email" className="mt-1.5 h-12 w-full rounded-2xl px-4" />
                  </label>
                </div>
                <label className="mt-4 block text-sm">
                  Topic
                  <select name="topic" className="mt-1.5 h-12 w-full rounded-2xl px-4">
                    <option>Courses & enrolment</option>
                    <option>Masterclasses</option>
                    <option>Partnerships</option>
                    <option>Press</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="mt-4 block text-sm">
                  Message
                  <textarea required name="message" rows={6} className="mt-1.5 w-full rounded-2xl px-4 py-3" />
                </label>
                <p className="mt-3 text-xs text-muted">
                  By sending, you agree we may reply about education. We will not treat this form as a request for investment advice.
                </p>
                <Button type="submit" className="mt-5">
                  Send message
                </Button>
              </>
            )}
          </form>
        </div>
      </Section>
    </div>
  );
}
