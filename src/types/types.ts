export interface ProjectDetails {
  title: string
  description: string
  link: string
  github_link: string
  published: boolean
}

export interface MessageDetails {
  email: string
  name: string
  body: string
}

export interface Skill {
  text: string
  color: string
  icon: string
}
