import { useRef, type MouseEvent } from "react";
import { ExternalLink, Github } from "lucide-react";
import { profile, projects, type Project } from "@/data/portfolio";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import ProjectVisual from "./ProjectVisual";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-5 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects with a real problem behind them."
          description="Live demos are linked where they exist. Source is shown only for the public GitHub repositories."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <div className="mt-8">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-violet-200 underline-offset-4 hover:underline"
          >
            <Github size={16} />
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();

  const onMove = (event: MouseEvent<HTMLElement>) => {
    if (reduced || !cardRef.current) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-4px)`;
  };

  const onLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group flex h-full flex-col rounded-[28px] border border-white/10 bg-white/[0.03] p-4 transition-transform duration-200 will-change-transform sm:p-5"
    >
      <ProjectVisual id={project.id} accent={project.accent} />
      <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
        <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">{project.category}</p>
        <h3 className="mt-2 font-display text-2xl text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300">
          <span className="text-zinc-500">Problem. </span>
          {project.problem}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.contribution}</p>
        <ul className="mt-4 space-y-1.5 text-sm text-zinc-400">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-300" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-300">
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-3">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-xs font-medium text-zinc-950"
            >
              Live demo
              <ExternalLink size={13} />
            </a>
          ) : (
            <span className="inline-flex items-center rounded-full border border-white/10 px-3.5 py-2 text-xs text-zinc-500">
              No public demo
            </span>
          )}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-2 text-xs font-medium text-white"
            >
              <Github size={13} />
              Source
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
