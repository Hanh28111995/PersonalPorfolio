// Global TypeScript types
export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
}

export interface Experience {
  company: string
  role: string
  period: string
}
