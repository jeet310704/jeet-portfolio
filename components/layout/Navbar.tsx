"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About",      href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects",   href: "/projects" },
];

interface NavbarProps {
  onCommandOpen: () => void;
}

export function Navbar({ onCommandOpen: _ }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className="w-full max-w-5xl flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300"
          style={{
            background: scrolled ? "rgba(10,10,10,0.96)" : "transparent",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: scrolled ? "#1E1E1E" : "transparent",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight transition-opacity duration-150 hover:opacity-60"
            style={{ color: "#FAFAFA" }}
          >
            JP
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-colors duration-150"
                style={{
                  color: isActive(l.href) ? "#FAFAFA" : "#71717A",
                }}
                onMouseEnter={(e) => {
                  if (!isActive(l.href))
                    (e.currentTarget as HTMLElement).style.color = "#A1A1AA";
                }}
                onMouseLeave={(e) => {
                  if (!isActive(l.href))
                    (e.currentTarget as HTMLElement).style.color = "#71717A";
                }}
              >
                {l.label}
                {isActive(l.href) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg -z-10"
                    style={{ background: "#161616" }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Single CTA — Contact */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="text-sm font-medium px-4 py-1.5 rounded-lg transition-all duration-150"
              style={
                isActive("/contact")
                  ? { background: "#2A2A2A", color: "#FAFAFA" }
                  : { background: "#FAFAFA", color: "#0A0A0A" }
              }
              onMouseEnter={(e) => {
                if (!isActive("/contact"))
                  (e.currentTarget as HTMLElement).style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
              }}
            >
              Contact
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 rounded-lg transition-colors duration-150"
            style={{ color: "#71717A" }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed top-[70px] left-4 right-4 z-40 rounded-2xl p-2"
            style={{ background: "#111111", border: "1px solid #1E1E1E" }}
          >
            {[...navLinks, { label: "Contact", href: "/contact" }].map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link
                  href={l.href}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150"
                  style={{
                    color: isActive(l.href) ? "#FAFAFA" : "#71717A",
                    background: isActive(l.href) ? "#161616" : "transparent",
                  }}
                >
                  {l.label}
                  {isActive(l.href) && (
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#FAFAFA" }} />
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
