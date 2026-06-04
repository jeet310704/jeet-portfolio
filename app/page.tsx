"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { projects } from "@/lib/data";

const cardAccent: Record<string, { from: string; to: string; text: string }> = {
  "muscle-metrics": { from: "rgba(79,70,229,0.18)",  to: "rgba(109,40,217,0.05)", text: "rgba(139,92,246,0.7)" },
  "alvyto":         { from: "rgba(6,182,212,0.15)",  to: "rgba(59,130,246,0.05)", text: "rgba(96,165,250,0.7)" },
  "ai-dashboard":   { from: "rgba(236,72,153,0.15)", to: "rgba(139,92,246,0.05)", text: "rgba(167,139,250,0.7)" },
};

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <main>
      <Hero />

      {/* Featured projects preview */}
      <section
        className="py-20 px-6"
        style={{ background: "#0A0A0A", borderTop: "1px solid #1E1E1E" }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-baseline justify-between mb-8">
            <p className="text-xs font-mono tracking-widest uppercase" style={{ color: "#52525B" }}>
              Featured Work
            </p>
            <Link
              href="/projects"
              className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-150"
              style={{ color: "#71717A" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FAFAFA")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#71717A")}
            >
              View all projects
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 2-column preview grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {featured.map((p) => {
              const acc = cardAccent[p.id] ?? cardAccent["ai-dashboard"];
              return (
                <Link
                  key={p.id}
                  href="/projects"
                  className="rounded-2xl overflow-hidden group block transition-colors duration-150"
                  style={{ background: "#111111", border: "1px solid #1E1E1E" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "#2A2A2A")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "#1E1E1E")
                  }
                >
                  {/* Gradient header */}
                  <div
                    className="h-32 relative overflow-hidden flex items-end p-4"
                    style={{ background: `linear-gradient(135deg, ${acc.from}, ${acc.to})` }}
                  >
                    <span
                      className="absolute right-3 top-1 font-bold leading-none select-none pointer-events-none"
                      style={{ fontSize: "5rem", color: acc.text, opacity: 0.1, letterSpacing: "-0.05em" }}
                    >
                      {p.title[0]}
                    </span>
                    <span
                      className="relative z-10 text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-md"
                      style={{ background: "rgba(0,0,0,0.4)", color: acc.text }}
                    >
                      {p.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-semibold text-base mb-1.5" style={{ color: "#FAFAFA", letterSpacing: "-0.01em" }}>
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#71717A" }}>
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2 py-0.5 rounded-md"
                          style={{ background: "#161616", border: "1px solid #1E1E1E", color: "#52525B" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick nav strip */}
      <section
        className="py-16 px-6"
        style={{ background: "#0A0A0A", borderTop: "1px solid #1E1E1E" }}
      >
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-4">
          {[
            { label: "About",      desc: "Background, education & skills", href: "/about" },
            { label: "Experience", desc: "Internships & work history",      href: "/experience" },
            { label: "Contact",    desc: "Get in touch",                    href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between p-5 rounded-xl group transition-colors duration-150"
              style={{ background: "#111111", border: "1px solid #1E1E1E" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#2A2A2A")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#1E1E1E")}
            >
              <div>
                <p className="text-sm font-semibold mb-0.5" style={{ color: "#FAFAFA" }}>
                  {item.label}
                </p>
                <p className="text-xs" style={{ color: "#52525B" }}>
                  {item.desc}
                </p>
              </div>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
                style={{ color: "#3A3A3A" }}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
