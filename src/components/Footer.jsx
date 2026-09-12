import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 font-mono text-xs text-[var(--color-fg-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.nameEn}</p>
        <p>Built with React + Tailwind CSS</p>
      </div>
    </footer>
  );
}
