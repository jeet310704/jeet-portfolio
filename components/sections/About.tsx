"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 sm:py-32 px-6"
      style={{ background: "#0A0A0A", borderTop: "1px solid #1E1E1E" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs font-mono tracking-widest uppercase mb-10"
          style={{ color: "#52525B" }}
        >
          About
        </motion.p>

        <div className="grid md:grid-cols-5 gap-16 items-start">
          {/* Left — bio (wider col) */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="md:col-span-3 flex flex-col gap-6"
          >
            <motion.h2
              variants={fadeUp}
              className="font-bold tracking-tight leading-tight"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "#FAFAFA",
                letterSpacing: "-0.025em",
              }}
            >
              Building at the intersection of AI and product.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-base leading-relaxed" style={{ color: "#A1A1AA" }}>
              I&apos;m a Computer Science Engineering graduate from Indus University with a passion
              for AI, machine learning, and full-stack development. I build products that solve
              real problems — combining intelligent systems with thoughtful user experiences.
            </motion.p>

            <motion.p variants={fadeUp} className="text-base leading-relaxed" style={{ color: "#71717A" }}>
              Currently working as an AI/ML Intern at ConcatString, where I work on document
              automation and data transformation pipelines. I&apos;m actively looking for
              full-time roles in AI/ML and full-stack engineering.
            </motion.p>

            {/* Trait chips */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-2">
              {["AI-First Mindset", "Full Stack Engineering", "Product Thinking", "Fast Learner"].map(
                (t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg"
                    style={{
                      background: "#111111",
                      border: "1px solid #1E1E1E",
                      color: "#A1A1AA",
                    }}
                  >
                    {t}
                  </span>
                )
              )}
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-1.5 pt-1">
              <span className="text-sm" style={{ color: "#52525B" }}>
                📍 Ahmedabad, Gujarat, India — open to remote &amp; relocation
              </span>
            </motion.div>
          </motion.div>

          {/* Right — education + stats */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="md:col-span-2 flex flex-col gap-4"
          >
            {/* Education card */}
            <motion.div
              variants={fadeUp}
              className="p-5 rounded-xl"
              style={{ background: "#111111", border: "1px solid #1E1E1E" }}
            >
              <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "#52525B" }}>
                Education
              </p>
              <p className="text-sm font-semibold mb-0.5" style={{ color: "#FAFAFA" }}>
                {education.institution}
              </p>
              <p className="text-sm mb-0.5" style={{ color: "#A1A1AA" }}>
                {education.degree}
              </p>
              <p className="text-sm mb-4" style={{ color: "#71717A" }}>
                {education.field}
              </p>

              <div
                className="flex items-center justify-between pt-4"
                style={{ borderTop: "1px solid #1E1E1E" }}
              >
                <div>
                  <p className="text-xs" style={{ color: "#52525B" }}>
                    {education.period}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium" style={{ color: "#A1A1AA" }}>
                    CGPA {education.gpa}
                  </span>
                  <span
                    className="text-xs px-2.5 py-1 rounded-md font-medium"
                    style={
                      education.graduated
                        ? { background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.15)", color: "rgba(251,191,36,0.85)" }
                        : { background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.15)", color: "rgba(34,197,94,0.85)" }
                    }
                  >
                    {education.graduated ? "Graduated" : "In Progress"}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
              {[
                { v: "5+", l: "Projects" },
                { v: "3", l: "Internships" },
                { v: "15+", l: "Technologies" },
                { v: "8.79", l: "CGPA" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="p-4 rounded-xl text-center"
                  style={{ background: "#111111", border: "1px solid #1E1E1E" }}
                >
                  <p
                    className="text-xl font-bold tracking-tight mb-0.5"
                    style={{ color: "#FAFAFA", letterSpacing: "-0.02em" }}
                  >
                    {s.v}
                  </p>
                  <p className="text-xs" style={{ color: "#52525B" }}>
                    {s.l}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
