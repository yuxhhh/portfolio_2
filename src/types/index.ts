export type ProjectCategory = 
  | 'All' 
  | 'AI / ML' 
  | 'Blockchain' 
  | 'Full Stack' 
  | 'DevOps' 
  | 'Cybersecurity';

export type ProjectStatus = 'Completed' | 'In progress' | 'Prototype';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'AI / ML' | 'Blockchain' | 'Full Stack' | 'DevOps' | 'Cybersecurity';
  subCategories?: string[];
  featured: boolean;
  status: ProjectStatus;
  headline: string;
  description: string;
  technologies: string[];
  architecture?: string;
  keyFeatures: string[];
  myContribution: string;
  challenges: string;
  lessonsLearned: string;
  previewType: 'transaction-monitor' | 'pipeline-visual' | 'security-audit' | 'quantum-voting' | 'expense-tracker' | 'attendance-system' | 'summarizer' | 'skillswap' | 'smart-fridge' | 'expresschat';
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface SkillGroup {
  category: string;
  tagline: string;
  skills: {
    name: string;
    verifiedContext?: string;
  }[];
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  type: 'education' | 'project' | 'focus';
}

export interface EducationInfo {
  institution: string;
  campus: string;
  degree: string;
  graduationYear: number;
  cgpa: string;
  highlights: string[];
}

export interface PersonalInfo {
  name: string;
  monogram: string;
  headline: string;
  heroIntro: string;
  heroSubline: string;
  editorialBio: string;
  status: {
    isAvailable: boolean;
    badgeText: string;
    detail: string;
  };
  education: EducationInfo;
  location: string;
  interests: string[];
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
  };
  resume: {
    filePath: string;
    isAvailable: boolean;
    note: string;
  };
}
