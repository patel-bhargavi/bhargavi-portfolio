import { useState, type KeyboardEvent } from "react";
import { skillGroups, type SkillDepth } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const depthTone: Record<SkillDepth, string> = {
  "Professional experience": "border-violet-300/30 bg-violet-400/10 text-violet-100",
  "Project work": "border-sky-300/30 bg-sky-400/10 text-sky-100",
  "Working knowledge": "border-cyan-200/25 bg-cyan-300/10 text-cyan-50",
};

export default function Skills() {
  const [activeId, setActiveId] = useState(skillGroups[0].id);
  const active = skillGroups.find((group) => group.id === activeId) ?? skillGroups[0];

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const index = skillGroups.findIndex((group) => group.id === activeId);
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" && event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
    const next = skillGroups[(index + direction + skillGroups.length) % skillGroups.length];
    setActiveId(next.id);
    document.getElementById(`skill-tab-${next.id}`)?.focus();
  };

  return (
    <section id="skills" className="scroll-mt-24 px-5 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Capabilities"
          title="Skills, labeled by how I actually use them."
          description="Professional work, shipped project work, and working knowledge stay separate. There are no proficiency percentages."
        />

        <Reveal className="mt-12 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div
            role="tablist"
            aria-label="Skill groups"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible"
          >
            {skillGroups.map((group) => {
              const selected = group.id === active.id;
              return (
                <button
                  key={group.id}
                  id={`skill-tab-${group.id}`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls={`skill-panel-${group.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(group.id)}
                  className={`hover-card min-w-fit rounded-2xl border px-4 py-3 text-left text-sm lg:w-full ${
                    selected
                      ? "border-violet-300/40 bg-violet-400/10 text-white"
                      : "border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white"
                  }`}
                >
                  <span className="block font-medium">{group.label}</span>
                  <span className="mt-1 block text-xs text-zinc-500">{group.items.length} areas</span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`skill-panel-${active.id}`}
            aria-labelledby={`skill-tab-${active.id}`}
            className="rounded-[28px] border border-white/10 bg-zinc-950/60 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:p-7"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl text-white">{active.label}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">{active.summary}</p>
              </div>
              <Constellation activeIndex={skillGroups.findIndex((group) => group.id === active.id)} count={skillGroups.length} />
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {active.items.map((item) => (
                <li key={item.name} className="hover-card rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-medium text-white">{item.name}</h4>
                    <span className={`rounded-full border px-2.5 py-1 text-[11px] tracking-wide ${depthTone[item.depth]}`}>
                      {item.depth}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Constellation({ activeIndex, count }: { activeIndex: number; count: number }) {
  const nodes = Array.from({ length: count }, (_, index) => {
    const angle = (Math.PI * 2 * index) / count - Math.PI / 2;
    return { cx: 75 + Math.cos(angle) * 46, cy: 65 + Math.sin(angle) * 46 };
  });

  return (
    <svg viewBox="0 0 150 130" className="hidden h-28 w-32 shrink-0 sm:block" aria-hidden="true">
      {nodes.map((node, index) => {
        const next = nodes[(index + 1) % nodes.length];
        return (
          <line
            key={index}
            x1={node.cx}
            y1={node.cy}
            x2={next.cx}
            y2={next.cy}
            stroke={index % 2 === 0 ? "rgba(196,181,253,0.45)" : "rgba(125,211,252,0.4)"}
            strokeWidth="1"
          />
        );
      })}
      {nodes.map((node, index) => (
        <circle
          key={index}
          cx={node.cx}
          cy={node.cy}
          r={index === activeIndex ? 7 : 4}
          fill={index === activeIndex ? "#c4b5fd" : "rgba(255,255,255,0.35)"}
        />
      ))}
    </svg>
  );
}
