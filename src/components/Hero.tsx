import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { useCanRender3D } from "@/hooks/useCanRender3D";
import { mailtoHref } from "@/lib/contact";
import HeroFallback from "./hero/HeroFallback";

const social = [
  { href: profile.github, label: "GitHub", icon: Github },
  { href: profile.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
];

export default function Hero() {
  const reduced = useReducedMotion();
  const canRender = useCanRender3D();
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.08, delayChildren: reduced ? 0 : 0.05 } },
  };
  const item = {
    hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(109,40,217,0.18),transparent_42%),radial-gradient(ellipse_at_bottom_right,rgba(37,99,235,0.12),transparent_36%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="mx-auto grid min-h-[100svh] max-w-6xl items-center gap-8 px-5 pb-16 pt-28 sm:px-6 lg:grid-cols-2 lg:pt-24">
        <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 min-w-0">
          <motion.p variants={item} className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-zinc-400">
            {profile.location}
          </motion.p>
          <motion.h1 variants={item} className="font-display text-[3.25rem] font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]">
            {profile.name}
          </motion.h1>
          <motion.p variants={item} className="mt-5 text-lg font-medium text-zinc-100 sm:text-xl">
            {profile.role}
            <span className="text-zinc-500"> · </span>
            <span className="bg-gradient-to-r from-violet-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent">
              {profile.positioning}
            </span>
          </motion.p>
          <motion.p variants={item} className="mt-5 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
            I build web applications with clear interfaces, Node.js services, and data models that stay understandable as a product grows.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-5 py-3 text-sm font-medium text-white shadow-[0_10px_40px_rgba(109,40,217,0.35)] transition hover:bg-violet-400"
            >
              Let’s Work Together
              <ArrowDownRight size={16} />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
            >
              Explore My Work
            </a>
            <a
              href={mailtoHref({ subject: "Resume request", message: "Hello Bhargavi, please send your resume." })}
              className="inline-flex items-center rounded-full px-4 py-3 text-sm font-medium text-zinc-300 underline-offset-4 transition hover:text-white hover:underline"
            >
              Request Resume
            </a>
          </motion.div>
          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            {social.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition hover:border-violet-300/40 hover:text-white"
              >
                <link.icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative z-10 min-w-0">
          {canRender ? (
            <div className="hidden h-[420px] sm:h-[480px] lg:block lg:h-[560px]" aria-hidden="true" />
          ) : (
            <div className="relative h-[420px] w-full sm:h-[480px] lg:h-[560px]">
              <HeroFallback />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
