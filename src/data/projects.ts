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

// What kind of thing a project is; each kind has its own icon.
export type Kind = 'website' | 'platform' | 'bot'

export type Project = {
  name: string
  kind: Kind
  status: Status
  description: string
  tags: string[]
  // Only projects with something to visit get a link.
  url?: string
}

// Newest first.
export const projects: Project[] = [
  {
    name: 'Codetopia Academy',
    kind: 'website',
    status: 'live',
    description: 'Tech classes for children and adults, booked online.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    url: 'https://academy.codetopia.org',
  },
  {
    name: 'Codetopia Community Portal',
    kind: 'platform',
    status: 'live',
    description: 'How new members join the community and get verified.',
    tags: ['Next.js', 'Django', 'PostgreSQL', 'WebSockets'],
    url: 'https://portal.community.codetopia.org',
  },
  {
    name: 'Vector',
    kind: 'bot',
    status: 'live',
    description: "Moderates the community's Discord server around the clock.",
    tags: ['TypeScript', 'discord.js', 'Prisma', 'PostgreSQL'],
  },
]

export const email = 'codetopialabs@gmail.com'
