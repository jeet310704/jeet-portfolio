"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      style={{ background: "#0A0A0A" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "#1E1E1E" }} />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="w-full max-w-5xl mx-auto flex flex-col items-start"
      >
        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center gap-2 mb-10"
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#22C55E", boxShadow: "0 0 6px rgba(34,197,94,0.7)" }}
          />
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: "#52525B" }}>
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold leading-[0.95] tracking-tight mb-6"
          style={{ fontSize: "clamp(3.5rem, 11vw, 8rem)", color: "#FAFAFA", letterSpacing: "-0.03em" }}
        >
          Jeet Patel
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="font-medium leading-snug mb-8"
          style={{ fontSize: "clamp(1.25rem, 3.5vw, 2rem)", color: "#A1A1AA", letterSpacing: "-0.015em" }}
        >
          AI/ML Engineer &amp;<br />Full Stack Developer
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-base leading-relaxed mb-10 max-w-lg"
          style={{ color: "#71717A" }}
        >
          B.Tech Computer Science graduate building intelligent products powered
          by AI, automation, and modern web technologies. Currently an AI/ML
          Intern at ConcatString.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-wrap items-center gap-3 mb-12"
        >
          <motion.div whileHover={{ opacity: 0.85 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/projects"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
              style={{ background: "#FAFAFA", color: "#0A0A0A" }}
            >
              View Projects
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ borderColor: "#3A3A3A" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150"
            style={{ background: "transparent", border: "1px solid #2A2A2A", color: "#A1A1AA" }}
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </motion.a>

          <motion.div whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-medium transition-colors duration-150"
              style={{ color: "#52525B" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#A1A1AA")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#52525B")}
            >
              Contact
            </Link>
          </motion.div>
        </motion.div>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.68, duration: 0.4 }}
          className="flex items-center gap-4"
        >
          {[
            { icon: GithubIcon, href: "https://github.com/jeet310704", label: "GitHub" },
            { icon: LinkedinIcon, href: "https://www.linkedin.com/in/jeet3174/", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ color: "#FAFAFA" }}
              className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-150"
              style={{ color: "#52525B" }}
            >
              <Icon className="w-4 h-4" />
              {label}
            </motion.a>
          ))}
          <span style={{ color: "#2A2A2A" }}>·</span>
          <span className="text-xs font-mono" style={{ color: "#3A3A3A" }}>Ahmedabad, India</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ color: "#3A3A3A" }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
