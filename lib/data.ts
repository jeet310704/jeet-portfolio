import type { Project, Experience, Education, SkillCategory, Stat } from "@/types";

export const projects: Project[] = [
  {
    id: "muscle-metrics",
    title: "MuscleMetrics",
    description: "Full-stack social fitness platform with real-time features",
    longDescription:
      "A comprehensive social fitness platform that combines workout tracking with social features. Users can track their progress, compete on leaderboards, message friends, and receive AI-powered workout recommendations tailored to their goals.",
    tech: ["React", "Express.js", "MongoDB", "Tailwind CSS", "Socket.IO"],
    features: [
      "Workout tracking & analytics",
      "Real-time leaderboards",
      "Peer messaging system",
      "Live notifications via Socket.IO",
      "AI workout recommendations",
      "Deployed on Vercel + Render",
    ],
    category: "Full Stack",
    gradient: "from-violet-600 to-indigo-600",
    year: "2024",
    featured: true,
    tags: ["social", "fitness", "real-time"],
  },
  {
    id: "alvyto",
    title: "Alvyto – AI Smart EMR",
    description: "AI-powered electronic medical records platform",
    longDescription:
      "An intelligent electronic medical records system that leverages AI to streamline clinical workflows. Features speech-to-text transcription, automated medical summarization, and intelligent scheduling to help healthcare providers focus on patient care.",
    tech: ["Next.js", "FastAPI", "AI APIs", "Python"],
    features: [
      "Speech-to-text medical transcription",
      "AI medical summarization",
      "Appointment scheduling",
      "Patient queue management",
      "Role-based access control",
      "HIPAA-compliant architecture",
    ],
    category: "AI/ML",
    gradient: "from-cyan-500 to-blue-600",
    year: "2024",
    featured: true,
    tags: ["healthcare", "speech-to-text", "EMR"],
  },
  {
    id: "ai-dashboard",
    title: "AI Business Dashboard",
    description: "Multi-tenant AI analytics SaaS platform",
    longDescription:
      "A powerful SaaS analytics platform that processes business data and generates actionable AI insights. Supports multi-tenant architecture with robust authentication and real-time dashboards powered by Google's Gemini API.",
    tech: ["Next.js", "TypeScript", "Supabase", "Gemini API"],
    features: [
      "CSV/XLSX data processing",
      "AI-generated business insights",
      "Secure authentication system",
      "Real-time analytics dashboards",
      "Multi-tenant architecture",
      "Gemini API integration",
    ],
    category: "AI/ML",
    gradient: "from-purple-600 to-pink-600",
    year: "2025",
    featured: true,
    tags: ["SaaS", "analytics", "gemini"],
  },
];

export const experiences: Experience[] = [
  {
    id: "concat-string",
    role: "AI/ML Intern",
    company: "ConcatString",
    period: "May 2026 – Present",
    type: "Internship",
    description: [
      "Processing inventory and supply-chain documents by converting invoice PDFs into EDI formats using internal parsing systems",
      "Transforming EDI data into FTX outputs for downstream business workflows",
      "Supporting document automation workflows and improving data accuracy for inventory management operations",
      "Working with parsing tools and integration pipelines to ensure reliable and accurate data conversion",
      "Independently building AI/ML projects to deepen practical skills beyond core internship responsibilities",
    ],
    tech: ["Python", "EDI", "PDF Parsing", "Data Transformation", "AI/ML"],
  },
  {
    id: "silver-touch",
    role: "Web Development Intern",
    company: "Silver Touch Technologies",
    period: "June 2025",
    type: "Internship",
    description: [
      "Developed responsive web interfaces using modern frontend technologies including React and Tailwind CSS",
      "Diagnosed and resolved UI bugs, improving application stability and cross-browser compatibility",
      "Followed industry-standard Git workflows and contributed to code reviews with senior developers",
      "Delivered client-facing features under production timelines in a professional development environment",
    ],
    tech: ["React", "JavaScript", "Tailwind CSS", "Git"],
  },
  {
    id: "nympix",
    role: "Software Development Intern",
    company: "Nympix Technologies LLP",
    period: "June 2024",
    type: "Internship",
    description: [
      "Contributed to software development tasks including feature implementation and test case execution",
      "Participated in requirements analysis sessions, translating stakeholder needs into technical specifications",
      "Collaborated with cross-functional teams to maintain development velocity and meet project milestones",
      "Gained hands-on exposure to the full software development lifecycle in a professional team setting",
    ],
    tech: ["Software Testing", "Requirement Analysis", "Team Collaboration"],
  },
];

export const education: Education = {
  institution: "Indus University",
  degree: "Bachelor of Technology (B.Tech)",
  field: "Computer Science Engineering",
  gpa: "8.79",
  period: "2022 – 2026",
  graduated: true,
  icon: "🎓",
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "⚡",
    color: "from-yellow-400 to-orange-500",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    icon: "🔧",
    color: "from-green-400 to-emerald-600",
    skills: ["Express.js", "FastAPI", "REST APIs", "Node.js"],
  },
  {
    name: "Database",
    icon: "🗄️",
    color: "from-blue-400 to-cyan-500",
    skills: ["MongoDB", "Supabase", "PostgreSQL"],
  },
  {
    name: "AI / ML",
    icon: "🤖",
    color: "from-purple-500 to-violet-600",
    skills: [
      "Python",
      "Machine Learning",
      "Prompt Engineering",
      "Gemini API",
      "AI Integration",
    ],
  },
  {
    name: "Tools",
    icon: "🛠️",
    color: "from-pink-400 to-rose-600",
    skills: ["Git", "GitHub", "Vercel", "Render", "VS Code"],
  },
];

export const stats: Stat[] = [
  { label: "Projects Built", value: 5, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "Internships", value: 3, suffix: "" },
  { label: "Active Internship", value: 1, suffix: "" },
];

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "FastAPI",
  "Express.js",
  "MongoDB",
  "Supabase",
  "Tailwind CSS",
  "Framer Motion",
  "Socket.IO",
  "Gemini API",
  "Git",
  "Vercel",
  "Node.js",
  "PostgreSQL",
];

export const personalInfo = {
  name: "Jeet Patel",
  title: "AI/ML Engineer & Full Stack Developer",
  tagline: "Building intelligent products powered by AI, data, and modern web technologies.",
  email: "jeet310704@gmail.com",
  github: "https://github.com/jeet310704",
  linkedin: "https://www.linkedin.com/in/jeet3174/",
  location: "Ahmedabad, India",
  available: true,
};
