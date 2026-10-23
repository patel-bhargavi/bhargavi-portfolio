import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const flow = [
  { label: "Frontend", detail: "React, Next.js, Vue" },
  { label: "API", detail: "Node.js, Express, REST, auth" },
  { label: "Database", detail: "PostgreSQL, MongoDB, MySQL" },
  { label: "AI / LLM", detail: "Optional model service" },
  { label: "Delivery", detail: "Deploy, observe, iterate" },
];

export default function Architecture() {
  return (
    <section id="architecture" className="scroll-mt-24 px-5 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Illustrative architecture"
          title="How the layers of a modern app connect."
          description="These diagrams explain a typical system shape. They are not a map of a production platform I owned or operated."
        />

        <Reveal className="mt-12 rounded-[28px] border border-white/10 bg-white/[0.03] p-5 sm:p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Reference flow</p>
          <ol className="mt-6 grid gap-3 md:grid-cols-5">
            {flow.map((step, index) => (
              <li key={step.label} className="hover-card relative rounded-2xl border border-white/10 bg-zinc-950/70 p-4">
                <span className="text-xs text-violet-200">0{index + 1}</span>
                <h3 className="mt-2 font-medium text-white">{step.label}</h3>
                <p className="mt-1 text-sm text-zinc-400">{step.detail}</p>
                {index < flow.length - 1 ? (
                  <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-violet-300/50 md:block" aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-zinc-500">
            A client interface talks to an API. The API reads and writes a database, and can call a language model when a feature needs generated or retrieved text. Deployment sits beside that path. The model step is optional in this reference diagram.
          </p>
        </Reveal>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article className="hover-card h-full rounded-[28px] border border-white/10 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Conceptual · containers</p>
              <h3 className="mt-3 font-display text-2xl text-white">A containerized application</h3>
              <div className="mt-6 space-y-3">
                <Box title="Image" text="Application code and runtime packaged together." />
                <Box title="App container" text="The web process, with its own dependencies." />
                <Box title="Data container" text="A database process beside the app, not inside it." />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                Docker is working knowledge for me. This is the idea of packaging an app so it runs the same way in more than one environment. It is not a production cluster I administered.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.06}>
            <article className="hover-card h-full rounded-[28px] border border-white/10 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Conceptual · services</p>
              <h3 className="mt-3 font-display text-2xl text-white">A small microservice sketch</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Box title="Edge" text="One entry point for the client." />
                <Box title="Service A" text="A bounded piece of the product, such as accounts." />
                <Box title="Service B" text="Another bounded piece, such as catalogue data." />
                <Box title="Message" text="Services coordinate through an API or a queue." />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                Service-to-service communication is a pattern I understand. The roles above are examples, not systems from Karavya Solutions or Sang Media.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Box({ title, text }: { title: string; text: string }) {
  return (
    <div className="hover-card rounded-2xl border border-white/10 bg-zinc-950/60 px-4 py-3">
      <p className="text-sm font-medium text-white">{title}</p>
      <p className="mt-1 text-sm text-zinc-400">{text}</p>
    </div>
  );
}
