import { profile, projects } from "../data.js";

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
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-fg-muted)]">
            อยู่ระหว่างเตรียมตัวสมัครงาน/ฝึกงานในตำแหน่ง {profile.target}
          </p>
          <span className="mt-3 inline-block rounded-full border border-[var(--color-border)] px-3 py-1 font-mono text-xs text-[var(--color-fg-muted)]">
            กำลังศึกษา
          </span>

          <div className="mt-6 border-t border-[var(--color-border)] pt-5">
            <p className="font-mono text-xs text-[var(--color-teal)]">
              ผลงานระหว่างเรียน
            </p>
            <ul className="mt-3 space-y-2">
              {projects.map((project) => (
                <li key={project.id} className="text-sm text-[var(--color-fg)]">
                  <span className="font-medium">{project.name}</span>
                  <span className="text-[var(--color-fg-muted)]"> — {project.period}</span>
                </li>
              ))}
            </ul>
            <a
              href="#projects"
              className="mt-3 inline-block font-mono text-xs text-[var(--color-fg-muted)] underline decoration-[var(--color-border)] underline-offset-4 hover:text-[var(--color-teal)] hover:decoration-[var(--color-teal)] focus-ring"
            >
              ดูรายละเอียดในหมวด Projects →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
