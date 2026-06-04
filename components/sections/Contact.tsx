"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Copy, Check, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.09 } } };

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText("jeet310704@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
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
          Contact
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h2
              variants={fadeUp}
              className="font-bold tracking-tight mb-4"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "#FAFAFA",
                letterSpacing: "-0.025em",
              }}
            >
              Let&apos;s work together.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-base leading-relaxed mb-8" style={{ color: "#71717A" }}>
              Open to full-time roles in AI/ML and full-stack engineering. If you have an
              interesting project or opportunity, I&apos;d love to hear about it.
            </motion.p>

            {/* Email — big */}
            <motion.div variants={fadeUp} className="mb-6">
              <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: "#52525B" }}>
                Email
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href="mailto:jeet310704@gmail.com"
                  className="text-lg font-semibold transition-opacity duration-150 hover:opacity-70"
                  style={{ color: "#FAFAFA", letterSpacing: "-0.01em" }}
                >
                  jeet310704@gmail.com
                </a>
                <motion.button
                  onClick={copy}
                  whileHover={{ borderColor: "#2A2A2A" }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150"
                  style={{ background: "#111111", border: "1px solid #1E1E1E", color: "#71717A" }}
                >
                  {copied ? (
                    <><Check className="w-3.5 h-3.5 text-emerald-400" />Copied</>
                  ) : (
                    <><Copy className="w-3.5 h-3.5" />Copy</>
                  )}
                </motion.button>
              </div>
            </motion.div>

            {/* Send button */}
            <motion.div variants={fadeUp}>
              <a
                href="mailto:jeet310704@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-opacity duration-150 hover:opacity-85"
                style={{ background: "#FAFAFA", color: "#0A0A0A" }}
              >
                Send a message
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-3"
          >
            {/* Social links */}
            {[
              {
                icon: LinkedinIcon,
                label: "LinkedIn",
                sub: "linkedin.com/in/jeet3174",
                href: "https://www.linkedin.com/in/jeet3174/",
              },
              {
                icon: GithubIcon,
                label: "GitHub",
                sub: "github.com/jeet310704",
                href: "https://github.com/jeet310704",
              },
            ].map((l) => (
              <motion.a
                key={l.label}
                variants={fadeUp}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ borderColor: "#2A2A2A" }}
                className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-150"
                style={{ background: "#111111", border: "1px solid #1E1E1E" }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "#1A1A1A", border: "1px solid #2A2A2A" }}
                >
                  <l.icon className="w-4 h-4" style={{ color: "#A1A1AA" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium" style={{ color: "#FAFAFA" }}>
                    {l.label}
                  </p>
                  <p className="text-xs" style={{ color: "#52525B" }}>
                    {l.sub}
                  </p>
                </div>
                <ArrowUpRight
                  className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  style={{ color: "#A1A1AA" }}
                />
              </motion.a>
            ))}

            {/* Resume */}
            <motion.a
              variants={fadeUp}
              href="/resume.pdf"
              download
              whileHover={{ borderColor: "#2A2A2A" }}
              className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-150"
              style={{ background: "#111111", border: "1px solid #1E1E1E" }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "#1A1A1A", border: "1px solid #2A2A2A" }}
              >
                <Download className="w-4 h-4" style={{ color: "#A1A1AA" }} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium" style={{ color: "#FAFAFA" }}>
                  Resume
                </p>
                <p className="text-xs" style={{ color: "#52525B" }}>
                  PDF · Updated 2026
                </p>
              </div>
              <ArrowUpRight
                className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                style={{ color: "#A1A1AA" }}
              />
            </motion.a>

            {/* Availability */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2.5 px-4 py-3.5 rounded-xl mt-1"
              style={{ background: "#111111", border: "1px solid #1E1E1E" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: "#22C55E", boxShadow: "0 0 5px rgba(34,197,94,0.6)" }}
              />
              <p className="text-sm" style={{ color: "#71717A" }}>
                Open to full-time roles — AI/ML &amp; Full Stack
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
