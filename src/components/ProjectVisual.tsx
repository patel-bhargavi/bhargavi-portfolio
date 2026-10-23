type ProjectVisualProps = {
  id: string;
  accent: "violet" | "blue" | "cyan";
};

const glow = {
  violet: "rgba(139,92,246,0.45)",
  blue: "rgba(59,130,246,0.4)",
  cyan: "rgba(34,211,238,0.35)",
};

export default function ProjectVisual({ id, accent }: ProjectVisualProps) {
  return (
    <div className="relative h-44 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
      {id === "infinitenotes" ? (
        <img
          src="/infinitenotes-cover.jpg"
          alt="Guitar, piano keys, and music notes"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <>
          <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 30% 20%, ${glow[accent]}, transparent 55%)` }} />
          <svg viewBox="0 0 360 180" className="absolute inset-0 h-full w-full" aria-hidden="true">
            {id === "myspace" ? <ChatMotif /> : null}
            {id === "smart-apply" ? <ApplyMotif /> : null}
            {id === "panorama" ? <PanoramaMotif /> : null}
            {id === "catloga" ? <CatalogueMotif /> : null}
            {id === "hrm" ? <HrmMotif /> : null}
          </svg>
        </>
      )}
    </div>
  );
}

function ChatMotif() {
  return (
    <g fill="none" stroke="rgba(165,243,252,0.9)" strokeWidth="1.3">
      <rect x="78" y="42" width="150" height="64" rx="16" />
      <path d="M108 106 L96 124 L128 106" />
      <path d="M98 66 H188" />
      <path d="M98 84 H156" />
      <rect x="168" y="78" width="118" height="52" rx="14" />
      <path d="M188 98 H250" />
    </g>
  );
}

function ApplyMotif() {
  return (
    <g fill="none" stroke="rgba(191,219,254,0.9)" strokeWidth="1.3">
      <rect x="70" y="36" width="150" height="108" rx="10" />
      <path d="M88 62 H168" />
      <path d="M88 80 H140" />
      <path d="M88 108 H120" />
      <rect x="196" y="58" width="96" height="72" rx="10" />
      <path d="M214 84 H270" />
      <path d="M214 102 H248" />
    </g>
  );
}

function PanoramaMotif() {
  return (
    <g fill="none" stroke="rgba(165,243,252,0.8)" strokeWidth="1.2">
      <path d="M40 120 C90 70, 140 70, 180 110 C220 150, 270 140, 320 90" />
      <path d="M40 132 C100 96, 150 100, 200 128 C250 156, 290 140, 330 112" opacity="0.6" />
      <circle cx="118" cy="78" r="16" />
      <path d="M70 120 L110 86 L150 120 L190 70 L250 120" />
    </g>
  );
}

function CatalogueMotif() {
  return (
    <g fill="none" stroke="rgba(191,219,254,0.85)" strokeWidth="1.2">
      {[0, 1, 2].map((column) =>
        [0, 1].map((row) => (
          <rect key={`${column}-${row}`} x={78 + column * 72} y={42 + row * 52} width="56" height="40" rx="6" />
        )),
      )}
    </g>
  );
}

function HrmMotif() {
  return (
    <g fill="none" stroke="rgba(221,214,254,0.85)" strokeWidth="1.2">
      <rect x="78" y="36" width="204" height="112" rx="12" />
      <path d="M78 64 H282" />
      <path d="M104 88 H220" />
      <path d="M104 108 H180" />
      <circle cx="236" cy="104" r="14" />
    </g>
  );
}
