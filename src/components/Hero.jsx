import { profile } from "../data.js";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4">
      <path
        d="M8 2v8m0 0 3-3m-3 3-3-3M3 12.5h10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 0a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38v-1.35c-2.22.48-2.69-1.07-2.69-1.07-.36-.93-.89-1.17-.89-1.17-.72-.5.06-.49.06-.49.8.06 1.23.83 1.23.83.71 1.22 1.86.87 2.32.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.96 0-.88.31-1.59.83-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.22 2.2.82a7.5 7.5 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.52.56.83 1.27.83 2.15 0 3.08-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 8 0"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M3.6 5.7H1V15h2.6zM2.3 1.5c-.9 0-1.5.6-1.5 1.4s.6 1.4 1.5 1.4h.02c.9 0 1.48-.6 1.48-1.4S3.2 1.5 2.3 1.5M10 5.5c-1.42 0-2.06.78-2.4 1.33V5.7H5v9.3h2.6v-5.2c0-.28.02-.55.1-.75.22-.55.73-1.13 1.58-1.13 1.11 0 1.56.85 1.56 2.1V15H13.4v-5.28C13.4 7.13 12.13 5.5 10 5.5"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-5xl gap-10 px-6 pb-20 pt-16 md:grid-cols-[1.2fr_1fr] md:items-center md:pt-24"
    >
      <div>
        <p className="flex items-center gap-2 font-mono text-sm text-[var(--color-teal)]">
          <span className="h-px w-6 bg-[var(--color-teal)]" />
          {profile.eyebrow}
        </p>

        <h1 className="mt-4 bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-violet)] bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl">
          {profile.name}
        </h1>

        <p className="mt-2 text-lg font-semibold text-[var(--color-fg)]">
          {profile.target}
        </p>

        <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--color-fg-muted)]">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-md bg-[var(--color-teal)] px-5 py-2.5 font-mono text-sm font-medium text-[var(--color-ink)] transition-transform hover:-translate-y-0.5 focus-ring"
          >
            ดูผลงาน <ArrowIcon />
          </a>
          <a
            href={profile.resumeUrl}
            className="flex items-center gap-2 rounded-md border border-[var(--color-border)] px-5 py-2.5 font-mono text-sm text-[var(--color-fg)] transition-colors hover:border-[var(--color-teal)] focus-ring"
          >
            <DownloadIcon /> ดาวน์โหลด CV
          </a>
          <a
            href={profile.github}
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-fg)] transition-colors hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] focus-ring"
          >
            <GithubIcon />
          </a>
          <a
            href={profile.linkedin}
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-fg)] transition-colors hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] focus-ring"
          >
            <LinkedinIcon />
          </a>
        </div>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-1.5 font-mono text-xs text-[var(--color-fg-muted)]">
          <span className="h-2 w-2 rounded-full bg-[#5cb87a]" />
          เปิดรับโอกาสฝึกงาน / Junior Developer
        </div>
      </div>

      <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)] shadow-2xl shadow-black/30">
        <div className="flex items-center gap-1.5 border-b border-[var(--color-border)] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e2685c]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#e6b45c]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#5cb87a]" />
          <span className="ml-3 font-mono text-xs text-[var(--color-fg-muted)]">
            about-me.sh
          </span>
        </div>
        <div className="space-y-2 p-5 font-mono text-sm leading-relaxed">
          <img
            src={profile.photo}
            alt={profile.name}
            className="mx-auto block h-64 w-64 rounded-md border border-[var(--color-border)] object-cover object-top"
          />
          <p className="mt-3 text-[var(--color-fg-muted)]">วันเกิด</p>
          <p className="text-[var(--color-fg)]">{profile.birthdate}</p>
          <p className="mt-3 text-[var(--color-fg-muted)]">ที่อยู่ปัจจุบัน</p>
          <p className="text-[var(--color-fg)]">{profile.address}</p>
          <p className="mt-3 text-[var(--color-fg-muted)]">สถานศึกษา</p>
          <p className="text-[var(--color-fg)]">{profile.studying}</p>
          <p className="mt-3 text-[var(--color-fg-muted)]">เป้าหมาย</p>
          <p className="text-[var(--color-fg)]">{profile.goal}</p>
          <p className="mt-3 text-[var(--color-fg-muted)]">$ status</p>
          <p className="text-[var(--color-teal)]">พร้อมเรียนรู้และลงมือทำจริง ✓</p>
        </div>
      </div>
    </section>
  );
}
