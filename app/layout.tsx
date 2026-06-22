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
  title: "Jeet Patel — Full-Stack Developer & Data Analyst",
  description:
    "Portfolio of Jeet Patel — B.Tech CS graduate from Indus University building web apps and data solutions with Python, SQL, React, and AI.",
  keywords: [
    "Jeet Patel", "Full Stack Developer", "Data Analyst", "Data Analytics",
    "Next.js", "React", "Python", "SQL", "Power BI", "Machine Learning", "Portfolio",
  ],
  authors: [{ name: "Jeet Patel", url: "https://github.com/jeet310704" }],
  creator: "Jeet Patel",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Jeet Patel — Full-Stack Developer & Data Analyst",
    description: "Building web apps and data solutions — from React frontends to Python analytics pipelines.",
    siteName: "Jeet Patel Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeet Patel — Full-Stack Developer & Data Analyst",
    description: "Building web apps and data solutions — from React frontends to Python analytics pipelines.",
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
