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
  // The day the project was added to this site (YYYY-MM-DD). The newest
  // project or post is announced on the home page.
  added: string
  // Only projects with something to visit get a link.
  url?: string
}

// Newest first.
export const projects: Project[] = [
  {
    name: 'Codetopia Academy',
    status: 'live',
    description:
      'The website for Codetopia Academy, where children and adults learn tech in small online classes.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    added: '2026-10-11',
    url: 'https://academy.codetopia.org',
  },
  {
    name: 'Codetopia Community Portal',
    status: 'live',
    description:
      'Where members join the Codetopia community, get verified and keep track of their progress.',
    tags: ['Next.js', 'Django', 'PostgreSQL', 'WebSockets'],
    added: '2026-04-16',
    url: 'https://portal.community.codetopia.org',
  },
  {
    name: 'Vector',
    status: 'live',
    description:
      'The Discord bot that looks after the Codetopia community server, from new member checks to moderation.',
    tags: ['TypeScript', 'discord.js', 'Prisma', 'PostgreSQL'],
    added: '2026-04-01',
  },
]

export const email = 'codetopialabs@gmail.com'
