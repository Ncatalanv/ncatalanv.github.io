export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  repoUrl: string;
}

export interface NewsItem {
  id: number;
  section: number;
  title: string;
  date: string;
  content: string;
}

export interface AboutMeProps {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  photo: string;
  bio: string;
  linkedInUrl: string;
  githubUrl: string;
}

export interface ProjectCardProps {
  project: Project;
}

export interface NewsCardProps {
  item: NewsItem;
}
