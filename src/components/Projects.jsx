import { projects } from "../data.js";

function ProjectCard({ project }) {
  return (
    <article
      className={`rounded-lg border p-6 ${
        project.featured
          ? "border-[var(--color-amber)]/50 bg-[var(--color-panel-raised)]"
          : "border-[var(--color-border)] bg-[var(--color-panel)]"
      }`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-xl font-semibold text-[var(--color-fg)]">
          {project.name}
        </h3>
        {project.featured && (
          <span className="font-mono text-xs text-[var(--color-amber)]">
            featured
          </span>
        )}
      </div>
      <p className="mt-1 font-mono text-xs text-[var(--color-fg-muted)]">
        {project.period}
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="font-mono text-xs text-[var(--color-teal)]">Problem</p>
          <p className="mt-1 text-sm leading-relaxed text-[var(--color-fg)]">
            {project.problem}
          </p>
        </div>
        <div>
          <p className="font-mono text-xs text-[var(--color-teal)]">Solution</p>
          <p className="mt-1 text-sm leading-relaxed text-[var(--color-fg)]">
            {project.solution}
          </p>
        </div>
        <div>
          <p className="font-mono text-xs text-[var(--color-teal)]">Role</p>
          <p className="mt-1 text-sm leading-relaxed text-[var(--color-fg)]">
            {project.role}
          </p>
        </div>
        <div>
          <p className="font-mono text-xs text-[var(--color-teal)]">Outcome</p>
          <p className="mt-1 text-sm leading-relaxed text-[var(--color-fg)]">
            {project.outcome}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded border border-[var(--color-border)] px-2 py-1 font-mono text-xs text-[var(--color-violet)]"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-4 font-mono text-sm">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            className="text-[var(--color-fg)] underline decoration-[var(--color-border)] underline-offset-4 hover:decoration-[var(--color-teal)] focus-ring"
          >
            GitHub
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            className="text-[var(--color-fg)] underline decoration-[var(--color-border)] underline-offset-4 hover:decoration-[var(--color-teal)] focus-ring"
          >
            Demo
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-8 md:grid-cols-[auto_1fr]">
        <h2 className="font-mono text-sm text-[var(--color-fg-muted)] md:sticky md:top-24 md:self-start">
          03 · Projects
        </h2>

        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
