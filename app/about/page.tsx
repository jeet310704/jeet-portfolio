import { About } from "@/components/sections/About";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Skills } from "@/components/sections/Skills";

export const metadata = {
  title: "About — Jeet Patel",
  description: "Background, education, skills, and career goals of Jeet Patel, AI/ML Engineer & Full Stack Developer.",
};

export default function AboutPage() {
  return (
    <main style={{ paddingTop: "72px" }}>
      <About />
      <TechMarquee />
      <Skills />
    </main>
  );
}
