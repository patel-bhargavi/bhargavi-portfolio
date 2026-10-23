import { certifications, education } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 px-5 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Education" title="Study, then the work." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {education.map((item, index) => (
            <Reveal key={item.degree} delay={index * 0.05}>
              <article className="hover-card h-full rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-violet-200">{item.type}</p>
                <h3 className="mt-3 font-display text-2xl leading-tight text-white">{item.degree}</h3>
                <p className="mt-4 text-sm text-zinc-300">{item.institution}</p>
                <p className="mt-1 text-sm text-zinc-500">{item.location}</p>
                <p className="mt-4 text-sm text-zinc-400">{item.period}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6">
          <div className="hover-card rounded-[28px] border border-white/10 p-6">
            <h3 className="font-medium text-white">Courses</h3>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-zinc-400 sm:flex-row sm:gap-6">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
