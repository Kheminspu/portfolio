import { profile } from "../data.js";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-8 md:grid-cols-[auto_1fr]">
        <h2 className="font-mono text-sm text-[var(--color-fg-muted)] md:sticky md:top-24 md:self-start">
          01 · About
        </h2>
        <div className="max-w-2xl">
          <p className="whitespace-pre-line text-lg leading-relaxed text-[var(--color-fg)]">
            {profile.about}
          </p>
        </div>
      </div>
    </section>
  );
}
