"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink, Check } from "lucide-react";
import { GithubIcon } from "@/components/common/Icons";
import { projects } from "@/lib/data";
import type { Project } from "@/types";

// Visual accent per project — subtle gradient for the card header
const cardAccent: Record<string, { from: string; to: string; text: string }> = {
  "muscle-metrics":  { from: "rgba(79,70,229,0.18)",  to: "rgba(109,40,217,0.05)",  text: "rgba(139,92,246,0.7)" },
  "alvyto":          { from: "rgba(6,182,212,0.15)",   to: "rgba(59,130,246,0.05)", text: "rgba(96,165,250,0.7)" },
  "ai-dashboard":    { from: "rgba(236,72,153,0.15)",  to: "rgba(139,92,246,0.05)", text: "rgba(167,139,250,0.7)" },
};

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  const acc = cardAccent[project.id] ?? cardAccent["ai-dashboard"];
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[8000] flex items-center justify-center p-4"
        onClick={onClose}
        style={{ background: "rgba(0,0,0,0.7)" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl"
          style={{ background: "#111111", border: "1px solid #2A2A2A" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-150"
              style={{ color: "#52525B", background: "#1E1E1E" }}
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <span
              className="text-[10px] font-mono tracking-widest uppercase mb-3 inline-block"
              style={{ color: acc.text }}
            >
              {project.category}
            </span>

            <h3
              className="text-xl font-bold mb-2 tracking-tight"
              style={{ color: "#FAFAFA", letterSpacing: "-0.02em" }}
            >
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#71717A" }}>
              {project.longDescription}
            </p>

            <div className="mb-6">
              <p className="text-[10px] font-mono tracking-widest uppercase mb-3" style={{ color: "#52525B" }}>
                Key Features
              </p>
              <div className="grid grid-cols-2 gap-2">
                {project.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm" style={{ color: "#71717A" }}>
                    <Check className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: acc.text }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-[10px] font-mono tracking-widest uppercase mb-3" style={{ color: "#52525B" }}>
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md font-mono"
                    style={{ background: "#1A1A1A", border: "1px solid #2A2A2A", color: "#A1A1AA" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-2.5">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150"
                  style={{ background: "#FAFAFA", color: "#0A0A0A" }}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150"
                  style={{ background: "#1E1E1E", border: "1px solid #2A2A2A", color: "#A1A1AA" }}
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  Code
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({
  project,
  large = false,
  onClick,
}: {
  project: Project;
  large?: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const acc = cardAccent[project.id] ?? cardAccent["ai-dashboard"];

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -2 }}
      onClick={onClick}
      className="rounded-2xl overflow-hidden cursor-pointer flex flex-col group transition-colors duration-200"
      style={{
        background: "#111111",
        border: `1px solid ${hovered ? "#2A2A2A" : "#1E1E1E"}`,
      }}
    >
      {/* Visual header — abstract gradient */}
      <div
        className="relative overflow-hidden shrink-0 flex items-end p-5"
        style={{
          height: large ? 180 : 140,
          background: `linear-gradient(135deg, ${acc.from}, ${acc.to})`,
        }}
      >
        {/* Project initial — huge, ghosted */}
        <span
          className="absolute right-4 top-2 font-bold leading-none select-none pointer-events-none"
          style={{
            fontSize: "6rem",
            color: acc.text,
            opacity: 0.12,
            letterSpacing: "-0.05em",
          }}
        >
          {project.title[0]}
        </span>

        {/* Category badge */}
        <div className="relative z-10 flex items-center gap-2">
          <span
            className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-md"
            style={{ background: "rgba(0,0,0,0.4)", color: acc.text }}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="font-semibold mb-1.5 tracking-tight"
          style={{ color: "#FAFAFA", fontSize: large ? "1.1rem" : "1rem", letterSpacing: "-0.01em" }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#71717A" }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2 py-0.5 rounded-md"
              style={{ background: "#161616", border: "1px solid #1E1E1E", color: "#52525B" }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs" style={{ color: "#3A3A3A" }}>
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between pt-3"
          style={{ borderTop: "1px solid #1A1A1A" }}
        >
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-150"
                style={{ color: "#52525B" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#A1A1AA")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#52525B")}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                Code
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-150"
                style={{ color: "#52525B" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#A1A1AA")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#52525B")}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Demo
              </a>
            )}
          </div>
          <ArrowUpRight
            className="w-4 h-4 transition-all duration-200"
            style={{ color: hovered ? "#A1A1AA" : "#3A3A3A" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

const ALL = "All";

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [modal, setModal] = useState<Project | null>(null);
  const [filter, setFilter] = useState(ALL);

  const cats = [ALL, ...Array.from(new Set(projects.map((p) => p.category)))];
  const filtered = filter === ALL ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 sm:py-32 px-6"
      style={{ background: "#0A0A0A", borderTop: "1px solid #1E1E1E" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-xs font-mono tracking-widest uppercase mb-3"
              style={{ color: "#52525B" }}
            >
              Projects
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-bold tracking-tight"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "#FAFAFA",
                letterSpacing: "-0.025em",
              }}
            >
              Things I&apos;ve built
            </motion.h2>
          </div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-150"
                style={
                  filter === c
                    ? { background: "#FAFAFA", color: "#0A0A0A" }
                    : { background: "#111111", border: "1px solid #1E1E1E", color: "#71717A" }
                }
              >
                {c}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Bento grid — first card is 2/3 wide */}
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 && (
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <motion.div
                  className="md:col-span-2"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <ProjectCard
                    project={filtered[0]}
                    large
                    onClick={() => setModal(filtered[0])}
                  />
                </motion.div>

                {filtered[1] && (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.18 }}
                  >
                    <ProjectCard
                      project={filtered[1]}
                      onClick={() => setModal(filtered[1])}
                    />
                  </motion.div>
                )}
              </div>

              {/* Row 2 — remaining projects */}
              {filtered.length > 2 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {filtered.slice(2).map((p, i) => (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.26 + i * 0.08 }}
                    >
                      <ProjectCard project={p} onClick={() => setModal(p)} />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8 flex"
        >
          <motion.a
            href="https://github.com/jeet310704"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ borderColor: "#3A3A3A" }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150"
            style={{
              background: "#111111",
              border: "1px solid #1E1E1E",
              color: "#71717A",
            }}
          >
            <GithubIcon className="w-4 h-4" />
            View all on GitHub
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>
      </div>

      {modal && <Modal project={modal} onClose={() => setModal(null)} />}
    </section>
  );
}
