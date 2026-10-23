import Reveal from "./Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <Reveal className="max-w-2xl">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-violet-300/90">{eyebrow}</p>
      <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">{description}</p> : null}
    </Reveal>
  );
}
