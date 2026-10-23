import { footerLinks, profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl text-white">{profile.name}</p>
          <p className="mt-2 text-sm text-zinc-500">
            {profile.role} · {profile.location}
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-400">
          {footerLinks.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex gap-4 text-sm text-zinc-400">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-white">
            Email
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-xs text-zinc-600">© {new Date().getFullYear()} {profile.name}. Built with React, TypeScript, and Three.js.</p>
      <p className="mx-auto mt-2 max-w-6xl text-xs text-zinc-600">
        Desktop model:{" "}
        <a className="underline-offset-2 hover:text-zinc-400 hover:underline" href="https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66" target="_blank" rel="noreferrer">
          Gaming Desktop PC
        </a>{" "}
        by{" "}
        <a className="underline-offset-2 hover:text-zinc-400 hover:underline" href="https://sketchfab.com/Yolala1232" target="_blank" rel="noreferrer">
          Yolala1232
        </a>
        , licensed{" "}
        <a className="underline-offset-2 hover:text-zinc-400 hover:underline" href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">
          CC BY 4.0
        </a>
        .
      </p>
    </footer>
  );
}
