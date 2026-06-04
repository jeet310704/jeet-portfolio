"use client";

import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="px-6 py-8"
      style={{ background: "#0A0A0A", borderTop: "1px solid #1E1E1E" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono" style={{ color: "#3A3A3A" }}>
          © {new Date().getFullYear()} Jeet Patel
        </p>

        <div className="flex items-center gap-4">
          {[
            { icon: GithubIcon, href: "https://github.com/jeet310704", label: "GitHub" },
            { icon: LinkedinIcon, href: "https://www.linkedin.com/in/jeet3174/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:jeet310704@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="transition-colors duration-150"
              style={{ color: "#3A3A3A" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#71717A")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#3A3A3A")}
              title={label}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <p className="text-xs font-mono" style={{ color: "#3A3A3A" }}>
          Built with Next.js
        </p>
      </div>
    </footer>
  );
}
