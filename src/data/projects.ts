// Where a project stands, in the order work moves through the lab.
export type Status = 'research' | 'experiment' | 'building' | 'live' | 'archived'

export const statusLabels: Record<Status, string> = {
  research: 'Research',
  experiment: 'Experiment',
  building: 'Building',
  live: 'Live',
  archived: 'Archived',
}

// What each status means, shown under the projects.
export const statusMeanings: Record<Status, string> = {
  research: "We're studying the problem before building anything.",
  experiment: "We're testing ideas with early prototypes.",
  building: 'In development and not released yet.',
  live: 'Released and in use.',
  archived: 'No longer worked on.',
}

// What kind of thing a project is; each kind has its own icon.
export type Kind = 'website' | 'platform' | 'bot'

// Default label for each kind, shown beside its icon. A project can say
// something more specific with kindLabel.
export const kindLabels: Record<Kind, string> = {
  website: 'Website',
  platform: 'Platform',
  bot: 'Bot',
}

export type Project = {
  name: string
  kind: Kind
  kindLabel?: string
  status: Status
  description: string
  tags: string[]
  // Only projects with something to visit get a link.
  url?: string
}

// Newest first.
export const projects: Project[] = [
  {
    name: 'Academy Portal',
    kind: 'platform',
    status: 'building',
    description: 'A learning platform where students in the academy take lessons and track their progress.',
    tags: [],
  },
  {
    name: 'Codetopia Academy',
    kind: 'website',
    status: 'live',
    description: 'Tech classes for children and adults, booked online.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    url: 'https://academy.codetopia.org',
  },
  {
    name: 'Community Portal',
    kind: 'platform',
    status: 'live',
    description: 'How new members join the community and get verified.',
    tags: ['Next.js', 'Django', 'PostgreSQL', 'WebSockets'],
    url: 'https://portal.community.codetopia.org',
  },
  {
    name: 'Vector',
    kind: 'bot',
    kindLabel: 'Discord bot',
    status: 'live',
    description: "Moderates the community's Discord server around the clock.",
    tags: ['TypeScript', 'discord.js', 'Prisma', 'PostgreSQL'],
  },
]

export const email = 'codetopialabs@gmail.com'
