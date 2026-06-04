"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { User, Briefcase, FolderOpen, Mail, Home, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";

interface CommandMenuProps {
  open: boolean;
  onClose: () => void;
}

export function CommandMenu({ open, onClose }: CommandMenuProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const navigate = (href: string) => {
    router.push(href);
    onClose();
  };

  const commands = [
    {
      group: "Navigate",
      items: [
        { label: "Home",       icon: Home,       action: () => navigate("/") },
        { label: "About",      icon: User,       action: () => navigate("/about") },
        { label: "Experience", icon: Briefcase,  action: () => navigate("/experience") },
        { label: "Projects",   icon: FolderOpen, action: () => navigate("/projects") },
        { label: "Contact",    icon: Mail,       action: () => navigate("/contact") },
      ],
    },
    {
      group: "Links",
      items: [
        {
          label: "GitHub",
          icon: GithubIcon,
          action: () => { window.open("https://github.com/jeet310704", "_blank"); onClose(); },
        },
        {
          label: "LinkedIn",
          icon: LinkedinIcon,
          action: () => { window.open("https://www.linkedin.com/in/jeet3174/", "_blank"); onClose(); },
        },
        {
          label: "Email",
          icon: Mail,
          action: () => { window.location.href = "mailto:jeet310704@gmail.com"; onClose(); },
        },
        {
          label: "Download Resume",
          icon: Download,
          action: () => { window.open("/resume.pdf", "_blank"); onClose(); },
        },
      ],
    },
  ];

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[9000]"
            style={{ background: "rgba(0,0,0,0.6)" }}
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="fixed left-1/2 top-1/3 z-[9001] w-full max-w-lg -translate-x-1/2 -translate-y-1/2"
          >
            <div
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: "#111111", border: "1px solid #2A2A2A" }}
            >
              <Command className="w-full" shouldFilter>
                <div
                  className="flex items-center gap-3 px-4 py-3.5"
                  style={{ borderBottom: "1px solid #1E1E1E" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#52525B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                  </svg>
                  <Command.Input
                    value={query}
                    onValueChange={setQuery}
                    placeholder="Search..."
                    className="flex-1 bg-transparent text-sm outline-none"
                    style={{ color: "#FAFAFA" }}
                  />
                  <kbd
                    className="text-xs px-1.5 py-0.5 rounded font-mono"
                    style={{ background: "#1A1A1A", border: "1px solid #2A2A2A", color: "#52525B" }}
                  >
                    ESC
                  </kbd>
                </div>

                <Command.List className="p-2 max-h-80 overflow-y-auto">
                  <Command.Empty className="py-8 text-center text-sm" style={{ color: "#52525B" }}>
                    No results.
                  </Command.Empty>

                  {commands.map((group) => (
                    <Command.Group
                      key={group.group}
                      heading={group.group}
                      className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:uppercase"
                      style={{ color: "#52525B" }}
                    >
                      {group.items.map((item) => (
                        <Command.Item
                          key={item.label}
                          value={item.label}
                          onSelect={item.action}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-colors duration-100"
                          style={{ color: "#A1A1AA" }}
                        >
                          <item.icon className="w-4 h-4 shrink-0" style={{ color: "#52525B" }} />
                          {item.label}
                        </Command.Item>
                      ))}
                    </Command.Group>
                  ))}
                </Command.List>

                <div
                  className="flex items-center gap-4 px-4 py-2.5"
                  style={{ borderTop: "1px solid #1A1A1A" }}
                >
                  <span className="text-xs flex items-center gap-1.5" style={{ color: "#3A3A3A" }}>
                    <kbd className="text-[10px] px-1 py-0.5 rounded font-mono" style={{ background: "#1A1A1A", border: "1px solid #2A2A2A" }}>↑↓</kbd>
                    navigate
                  </span>
                  <span className="text-xs flex items-center gap-1.5" style={{ color: "#3A3A3A" }}>
                    <kbd className="text-[10px] px-1 py-0.5 rounded font-mono" style={{ background: "#1A1A1A", border: "1px solid #2A2A2A" }}>↵</kbd>
                    select
                  </span>
                </div>
              </Command>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
