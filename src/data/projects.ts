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

// Newest first.
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
  {
    name: 'Codetopia Community Portal',
    status: 'live',
    description:
      'Membership platform for the Codetopia community. Members sign up, go through onboarding and get verified, and the core team manages roles, teams and programmes in one place.',
    tags: ['Next.js', 'Django', 'PostgreSQL', 'WebSockets'],
    year: '2026',
    added: '2026-04-16',
    url: 'https://portal.community.codetopia.org',
  },
  {
    name: 'Vector',
    status: 'live',
    description:
      'Discord bot that runs the Codetopia community server. It verifies new members against the portal, welcomes them and handles moderation.',
    tags: ['TypeScript', 'discord.js', 'Prisma', 'PostgreSQL'],
    year: '2026',
    added: '2026-04-01',
  },
]

export const email = 'codetopialabs@gmail.com'
