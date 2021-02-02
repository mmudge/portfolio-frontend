export interface ProjectDetails {
  title: string
  description: string
  link: string
  github_link: string
  published: boolean
  technology_ids: number[]
}

export interface MessageDetails {
  email: string
  name: string
  body: string
}

export interface Skill {
  title: string
  text: string
  color: string
  icon: string
}

export interface TechnologyDetails {
  name: string
  text: string
  icon: string
  color: string
  hierarchy: number
}
