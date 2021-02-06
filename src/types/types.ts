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

export interface PexelPhoto {
  id: number
  width: number
  height: number
  url: string
  photographer: string
  photographer_url: string
  photographer_id: number
  avg_color: string
  src: {
    original: string
    large2x: string
    large: string
    medium: string
    small: string
    portrait: string
    landscape: string
    tiny: string
  }
}
