import { profile } from "../data.js";

const links = [
  { label: "Email", href: `mailto:${profile.email}`, value: profile.email },
  { label: "GitHub", href: profile.github, value: profile.github.replace("https://", "") },
  { label: "LinkedIn", href: profile.linkedin, value: profile.linkedin.replace("https://", "") },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-8 md:grid-cols-[auto_1fr]">
        <h2 className="font-mono text-sm text-[var(--color-fg-muted)] md:sticky md:top-24 md:self-start">
          05 · Contact
        </h2>

        <div>
          <p className="max-w-md text-lg leading-relaxed text-[var(--color-fg)]">
            สนใจร่วมงานหรืออยากคุยเรื่องโปรเจกต์ ทักมาได้เลยครับ
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group flex items-center gap-3 font-mono text-sm text-[var(--color-fg)] focus-ring"
                >
                  <span className="w-20 text-[var(--color-fg-muted)]">
                    {link.label}
                  </span>
                  <span className="border-b border-[var(--color-border)] pb-0.5 group-hover:border-[var(--color-teal)] group-hover:text-[var(--color-teal)]">
                    {link.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
