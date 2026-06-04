"use client";

import { techStack } from "@/lib/data";

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-2">
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #0A0A0A, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(-90deg, #0A0A0A, transparent)" }}
      />
      <div className={reverse ? "animate-marquee-reverse" : "animate-marquee"}>
        <div className="flex items-center gap-2 whitespace-nowrap">
          {doubled.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="text-xs font-mono px-3 py-1.5 rounded-md shrink-0"
              style={{
                background: "#111111",
                border: "1px solid #1E1E1E",
                color: "#52525B",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TechMarquee() {
  const mid = Math.ceil(techStack.length / 2);
  return (
    <section
      className="py-10 overflow-hidden"
      style={{ background: "#0A0A0A", borderTop: "1px solid #1E1E1E", borderBottom: "1px solid #1E1E1E" }}
    >
      <MarqueeRow items={techStack.slice(0, mid)} />
      <MarqueeRow items={techStack.slice(mid)} reverse />
    </section>
  );
}
