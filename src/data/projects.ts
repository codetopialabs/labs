// Where a project stands, in the order work moves through the lab.
// Research: studying the problem. Experiment: testing ideas and prototypes.
// Building: in development. Live: shipped and in use. Archived: retired.
export type Status = 'research' | 'experiment' | 'building' | 'live' | 'archived'

export const statusLabels: Record<Status, string> = {
  research: 'Research',
  experiment: 'Experiment',
  building: 'Building',
  live: 'Live',
  archived: 'Archived',
}

export type Project = {
  name: string
  status: Status
  description: string
  tags: string[]
  // The year the project reached its current status.
  year: string
  // Only projects with something to visit get a link.
  url?: string
}

export const projects: Project[] = [
  {
    name: 'Codetopia Academy',
    status: 'live',
    description:
      'Website for Codetopia Academy, weekend tech classes in small online groups for children and adults.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    year: '2026',
    url: 'https://academy.codetopia.org',
  },
]

export const email = 'codetopialabs@gmail.com'
