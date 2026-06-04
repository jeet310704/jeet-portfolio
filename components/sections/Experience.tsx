"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 sm:py-32 px-6"
      style={{ background: "#0A0A0A", borderTop: "1px solid #1E1E1E" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs font-mono tracking-widest uppercase mb-10"
          style={{ color: "#52525B" }}
        >
          Experience
        </motion.p>

        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Entry */}
              <div className="py-8 grid md:grid-cols-5 gap-6 md:gap-10 items-start">
                {/* Left — company + meta */}
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "#FAFAFA" }}
                    >
                      {exp.company}
                    </span>
                    {i === 0 && (
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-md font-mono"
                        style={{
                          background: "rgba(34,197,94,0.08)",
                          border: "1px solid rgba(34,197,94,0.15)",
                          color: "rgba(34,197,94,0.8)",
                        }}
                      >
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm mb-1" style={{ color: "#A1A1AA" }}>
                    {exp.role}
                  </p>
                  <p className="text-xs font-mono" style={{ color: "#52525B" }}>
                    {exp.period}
                  </p>
                </div>

                {/* Right — description + tags */}
                <div className="md:col-span-3">
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((d, j) => (
                      <li
                        key={j}
                        className="text-sm leading-relaxed flex items-start gap-2.5"
                        style={{ color: "#71717A" }}
                      >
                        <span className="mt-[7px] w-1 h-1 rounded-full shrink-0" style={{ background: "#3A3A3A" }} />
                        {d}
                      </li>
                    ))}
                  </ul>

                  {exp.tech && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2.5 py-1 rounded-md"
                          style={{
                            background: "#111111",
                            border: "1px solid #1E1E1E",
                            color: "#52525B",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Divider */}
              {i < experiences.length - 1 && (
                <div className="h-px" style={{ background: "#1E1E1E" }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
