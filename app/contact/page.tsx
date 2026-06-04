import { Contact } from "@/components/sections/Contact";

export const metadata = {
  title: "Contact — Jeet Patel",
  description: "Get in touch with Jeet Patel — open to full-time roles in AI/ML and full-stack development.",
};

export default function ContactPage() {
  return (
    <main style={{ paddingTop: "72px" }}>
      <Contact />
    </main>
  );
}
