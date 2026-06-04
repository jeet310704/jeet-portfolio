"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories } from "@/lib/data";

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 sm:py-32 px-6"
      style={{ background: "#0A0A0A", borderTop: "1px solid #1E1E1E" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-xs font-mono tracking-widest uppercase mb-10"
          style={{ color: "#52525B" }}
        >
          Skills
        </motion.p>

        {/* Table-style layout */}
        <div className="flex flex-col">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <div className="py-5 grid md:grid-cols-5 gap-4 md:gap-10 items-start">
                {/* Category label */}
                <div className="md:col-span-1 flex items-center gap-2.5">
                  <span className="text-sm">{cat.icon}</span>
                  <span className="text-sm font-medium" style={{ color: "#A1A1AA" }}>
                    {cat.name}
                  </span>
                </div>

                {/* Skills */}
                <div className="md:col-span-4 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ borderColor: "#2A2A2A", color: "#A1A1AA" }}
                      className="text-sm px-3 py-1.5 rounded-lg font-medium cursor-default transition-colors duration-150"
                      style={{
                        background: "#111111",
                        border: "1px solid #1E1E1E",
                        color: "#71717A",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {i < skillCategories.length - 1 && (
                <div className="h-px" style={{ background: "#1A1A1A" }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
