import { approach, experiences } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-5 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Experience"
          title="Where the work happened."
          description="Roles, dates, and responsibilities taken from my existing portfolio. Nothing here is inferred beyond that record."
        />

        <ol className="mt-14 space-y-5">
          {experiences.map((job, index) => (
            <Reveal key={job.title + job.period} delay={index * 0.05}>
              <li className="grid gap-6 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[220px_minmax(0,1fr)] md:p-8">
                <div>
                  <p className="text-sm text-violet-200">{job.period}</p>
                  <p className="mt-3 font-medium text-white">{job.company}</p>
                  <p className="text-sm text-zinc-500">{job.location}</p>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-white">{job.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">{job.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-400">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-200" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <li key={skill} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-zinc-300">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <div className="mt-16">
          <h3 className="font-display text-3xl text-white">How I approach the work</h3>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {approach.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="h-full rounded-3xl border border-white/10 p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">0{index + 1}</p>
                  <h4 className="mt-3 font-medium text-white">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
