export interface Project {
  _id: string;
  _type: string;
  _rev: string;
  updatedAt: string;
  skills: string[];
  deployedSiteLink: string;
  color: string;
  _createdAt: string;
  description: string;
  title: string;
  images: any[]; // Define Image type as needed
  role: string;
  githubLink: string;
}

export interface PersonalInfo {
  _id: string;
  _type: string;
  _rev: string;
  name: string;
  email: string;
  role: string;
  about: string;
  introExcerpt: string;
  socialUrls: SocialUrl[];
  skills: string[];
  resumeLink: string;
}

export interface SocialUrl {
  platform: string;
  url: string;
}
