import { profile } from "../data.js";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-8 md:grid-cols-[auto_1fr]">
        <h2 className="font-mono text-sm text-[var(--color-fg-muted)] md:sticky md:top-24 md:self-start">
          04 · Experience
        </h2>

        <div className="max-w-2xl rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)] p-6">
          <p className="font-mono text-xs text-[var(--color-teal)]">Education</p>
          <p className="mt-2 text-lg font-semibold text-[var(--color-fg)]">
            คณะเทคโนโลยีสารสนเทศ
          </p>
          <p className="mt-1 text-sm leading-relaxed text-[var(--color-fg-muted)]">
            {profile.studying}
          </p>
          <span className="mt-3 inline-block rounded-full border border-[var(--color-border)] px-3 py-1 font-mono text-xs text-[var(--color-fg-muted)]">
            กำลังศึกษา
          </span>
        </div>
      </div>
    </section>
  );
}
