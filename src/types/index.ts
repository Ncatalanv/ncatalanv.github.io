export type NewsCategory = 'academica' | 'tecnologia'

export interface SocialLink {
  label: string
  url: string
}

export interface Profile {
  name: string
  role: string
  tagline: string
  bio: string
  about: string[]
  email: string
  phone: string
  location: string
  avatar: string
  interests: string[]
  socials: SocialLink[]
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  tech: string[]
  demoUrl?: string
  repoUrl?: string
  year: number
  featured: boolean
}

export interface NewsItem {
  id: string
  title: string
  date: string
  summary: string
  category: NewsCategory
}
