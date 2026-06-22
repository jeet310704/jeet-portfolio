import { Experience } from "@/components/sections/Experience";

export const metadata = {
  title: "Experience — Jeet Patel",
  description: "Work experience and internships of Jeet Patel, including ConcatString and Silver Touch Technologies.",
};

export default function ExperiencePage() {
  return (
    <main style={{ paddingTop: "72px" }}>
      <Experience />
    </main>
  );
}
