import { useEffect, useState } from "react";
import { navItems, profile } from "../data.js";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-ink)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm tracking-tight text-[var(--color-fg)] focus-ring"
        >
          {profile.handle}
          <span className="text-[var(--color-teal)]">.dev</span>
        </a>

        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`font-mono text-sm transition-colors focus-ring ${
                active === item.id
                  ? "text-[var(--color-teal)]"
                  : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="flex flex-col gap-1.5 md:hidden focus-ring p-1"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="เปิดเมนู"
        >
          <span
            className={`block h-0.5 w-6 bg-[var(--color-fg)] transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--color-fg)] transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--color-fg)] transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-[var(--color-border)] px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="py-2 font-mono text-sm text-[var(--color-fg-muted)] focus-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
