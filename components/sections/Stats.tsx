"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";

function useCounter(target: number, isInView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return count;
}

function StatCard({
  stat,
  index,
  isInView,
}: {
  stat: (typeof stats)[0];
  index: number;
  isInView: boolean;
}) {
  const count = useCounter(stat.value, isInView, 1800);
  const [hovered, setHovered] = useState(false);

  const accentColors = [
    { color: "#a78bfa", glow: "rgba(167,139,250" },
    { color: "#60a5fa", glow: "rgba(96,165,250" },
    { color: "#34d399", glow: "rgba(52,211,153" },
    { color: "#f472b6", glow: "rgba(244,114,182" },
  ];
  const accent = accentColors[index % accentColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.03, y: -4 }}
      className="relative p-8 rounded-2xl text-center overflow-hidden transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: `1px solid ${hovered ? `${accent.glow},0.25)` : "rgba(255,255,255,0.06)"}`,
        backdropFilter: "blur(15px)",
        boxShadow: hovered ? `0 0 40px ${accent.glow},0.1), 0 20px 40px rgba(0,0,0,0.3)` : "none",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse at center, ${accent.glow},0.08), transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent.color}, transparent)`,
          opacity: hovered ? 0.6 : 0.15,
          transition: "opacity 0.3s ease",
        }}
      />

      <div className="relative z-10">
        <div
          className="text-5xl font-black mb-2 tabular-nums tracking-tight"
          style={{ color: accent.color }}
        >
          {stat.prefix}
          {count}
          {stat.suffix}
        </div>
        <div className="text-white/45 text-sm font-medium">{stat.label}</div>
      </div>
    </motion.div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 px-6" style={{ background: "#030303" }}>
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center text-white/20 text-xs font-mono tracking-[0.3em] uppercase mb-10"
        >
          By the numbers
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
