import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";

const sectionIds = ["home", ...navItems.map((item) => item.id)] as const;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-zinc-950"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className={`border-b transition-colors duration-300 ${
          scrolled || open ? "border-white/10 bg-zinc-950/80 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          <a href="#home" className="flex items-center gap-2.5 text-sm font-medium text-white">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-white/5 font-display text-xs tracking-wide text-violet-200">
              BP
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const current = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={current ? "true" : undefined}
                  className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                    current ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {current ? <span className="absolute inset-0 rounded-full bg-white/10" /> : null}
                  <span className="relative">{item.label}</span>
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-violet-100 sm:inline-flex"
            >
              Let’s Work Together
            </a>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open ? (
          <div id="mobile-nav" className="border-t border-white/10 px-5 py-4 lg:hidden">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/5 py-3 text-base text-zinc-200"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex justify-center rounded-full bg-white px-4 py-3 text-sm font-medium text-zinc-950"
              >
                Let’s Work Together
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
