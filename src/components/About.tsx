import { Code2, Database, Layers3, Workflow } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const points = [
  {
    icon: Layers3,
    title: "Interfaces",
    text: "React and Next.js screens, responsive layout, and component structure that other people can keep working in.",
  },
  {
    icon: Workflow,
    title: "APIs",
    text: "Node.js and Express services, REST integration, and authentication between the client and the data.",
  },
  {
    icon: Database,
    title: "Data",
    text: "PostgreSQL and MongoDB models designed with the features that read and write them.",
  },
  {
    icon: Code2,
    title: "Care in the details",
    text: "Performance, code review, and reusable UI from product work at Sang Media and Karavya Solutions.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="About"
          title="Practical engineering across the product."
          description="I contribute on the frontend, the API, and the database — and I keep the path between them obvious."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <Reveal className="space-y-5 text-base leading-relaxed text-zinc-300 sm:text-lg">
            <p>
              I am a full-stack developer at Karavya Solutions in Ahmedabad. I build web applications with React and Next.js, Node.js and Express, and PostgreSQL and MongoDB — from the shape of a feature through deployment and maintenance.
            </p>
            <p>
              Before that I was a junior frontend developer, and earlier an intern, at Sang Media in Morbi. That work was React and Next.js, REST APIs, Redux Toolkit, TanStack Query, Tailwind CSS, and Bootstrap, plus smaller Node.js tasks and regular code reviews.
            </p>
            <p>
              My own project work includes InfiniteNotes, MySpace, Smart Apply, a 360 panorama viewer, and catalogue and HR interfaces with forms, validation, and authentication. The same application path — interface, API, and data — is where an AI feature belongs when it solves a real task, rather than sitting on the page as decoration.
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {points.map((point, index) => (
              <Reveal key={point.title} delay={index * 0.06}>
                <article className="hover-card h-full rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                  <point.icon className="text-violet-300" size={20} />
                  <h3 className="mt-4 font-display text-lg text-white">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{point.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
