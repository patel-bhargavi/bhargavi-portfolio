import { useEffect, useRef } from "react";

export default function HeroFallback() {
  const rig = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      if (!rig.current || media.matches) return;
      const progress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
      const tilt = -22 + progress * 55;
      const lift = 8 - progress * 16;
      rig.current.style.transform = `rotateX(${lift}deg) rotateY(${tilt}deg)`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    media.addEventListener("change", update);
    return () => {
      window.removeEventListener("scroll", update);
      media.removeEventListener("change", update);
    };
  }, []);

  return (
    <div className="grid h-full w-full place-items-center" aria-hidden="true" style={{ perspective: "900px" }}>
      <div className="absolute h-56 w-56 rounded-full bg-violet-600/20 blur-3xl" />
      <div ref={rig} className="relative w-[min(100%,280px)] transition-transform duration-100">
        <div className="rounded-2xl border border-white/15 bg-zinc-950 p-3 shadow-[0_30px_80px_rgba(109,40,217,0.28)]">
          <div className="relative h-36 overflow-hidden rounded-lg bg-[#140c22]">
            <span className="absolute left-4 top-5 h-1.5 w-24 rounded-full bg-violet-200" />
            <span className="absolute left-4 top-10 h-1.5 w-16 rounded-full bg-cyan-200" />
            <span className="absolute left-4 top-16 h-1.5 w-28 rounded-full bg-violet-300/70" />
          </div>
        </div>
        <div className="mx-auto h-8 w-3 bg-zinc-800" />
        <div className="mx-auto h-2 w-24 rounded-full bg-zinc-700" />
        <div className="mx-auto mt-4 h-8 w-48 rounded-lg border border-white/10 bg-zinc-900" />
      </div>
    </div>
  );
}
