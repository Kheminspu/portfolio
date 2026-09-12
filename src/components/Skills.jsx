import { skills } from "../data.js";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-5xl px-6 py-16"
    >
      <div className="grid gap-8 md:grid-cols-[auto_1fr]">
        <h2 className="font-mono text-sm text-[var(--color-fg-muted)] md:sticky md:top-24 md:self-start">
          02 · Skills
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)] p-5"
            >
              <h3 className="font-mono text-sm text-[var(--color-teal)]">
                {group.category}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-[var(--color-border)] bg-[var(--color-panel-raised)] px-2.5 py-1 text-sm text-[var(--color-fg)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
