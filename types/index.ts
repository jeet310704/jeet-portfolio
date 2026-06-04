export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  category: string;
  gradient: string;
  link?: string;
  github?: string;
  year: string;
  featured?: boolean;
  tags?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  description: string[];
  tech?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  gpa: string;
  period: string;
  icon: string;
  graduated?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  color: string;
  skills: string[];
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface CommandItem {
  id: string;
  label: string;
  icon: string;
  action: () => void;
  group: string;
}
