import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/layout/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeet Patel — AI/ML Engineer & Full Stack Developer",
  description:
    "Portfolio of Jeet Patel — B.Tech CS graduate from Indus University building intelligent products with AI, automation, and modern web technologies.",
  keywords: [
    "Jeet Patel", "AI Engineer", "ML Engineer", "Full Stack Developer",
    "Next.js", "React", "Python", "FastAPI", "Machine Learning", "Portfolio",
  ],
  authors: [{ name: "Jeet Patel", url: "https://github.com/jeet310704" }],
  creator: "Jeet Patel",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Jeet Patel — AI/ML Engineer & Full Stack Developer",
    description: "Building intelligent products powered by AI, data, and modern web technologies.",
    siteName: "Jeet Patel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeet Patel — AI/ML Engineer & Full Stack Developer",
    description: "Building intelligent products powered by AI, data, and modern web technologies.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased overflow-x-hidden" style={{ background: "#0A0A0A", color: "#FAFAFA" }}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
