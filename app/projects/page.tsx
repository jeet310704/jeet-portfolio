import { Projects } from "@/components/sections/Projects";

export const metadata = {
  title: "Projects — Jeet Patel",
  description: "Portfolio of projects by Jeet Patel — full-stack applications and AI/ML systems.",
};

export default function ProjectsPage() {
  return (
    <main style={{ paddingTop: "72px" }}>
      <Projects />
    </main>
  );
}
