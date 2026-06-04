"use client";

import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/common/LoadingScreen";
import { CustomCursor } from "@/components/common/CustomCursor";
import { CommandMenu } from "@/components/common/CommandMenu";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setCommandOpen((p) => !p);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <SmoothScroll>
      <LoadingScreen />
      <CustomCursor />
      <CommandMenu open={commandOpen} onClose={() => setCommandOpen(false)} />
      <Navbar onCommandOpen={() => setCommandOpen(true)} />
      <div style={{ background: "#0A0A0A" }}>{children}</div>
      <Footer />
    </SmoothScroll>
  );
}
