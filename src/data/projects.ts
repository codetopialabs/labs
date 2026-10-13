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
  // The day the project was added to this site (YYYY-MM-DD). The newest
  // project or post is announced on the home page.
  added: string
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
    added: '2026-10-11',
    url: 'https://academy.codetopia.org',
  },
]

export const email = 'codetopialabs@gmail.com'
