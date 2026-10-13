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
  // Used in the page address: /projects/<slug>
  slug: string
  name: string
  status: Status
  description: string
  tags: string[]
  // The day the project was added to this site (YYYY-MM-DD). The newest
  // project or post is announced on the home page.
  added: string
  // Only projects with something to visit get a link.
  url?: string
  // The day work started (YYYY-MM-DD), shown on the project page.
  started: string
  // Project page: why it was needed, the main pieces, and where it is now.
  problem: string
  built: string[]
  now: string
}

// Newest first.
export const projects: Project[] = [
  {
    slug: 'codetopia-academy',
    name: 'Codetopia Academy',
    status: 'live',
    description:
      'The website for Codetopia Academy, where children and adults learn tech in small online classes.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    added: '2026-10-11',
    url: 'https://academy.codetopia.org',
    started: '2026-09-21',
    problem:
      'Codetopia Academy runs weekend tech classes for children and adults in small online groups. It needed a site that explains the classes clearly to parents and adult learners and gets them registered.',
    built: [
      "Separate pages for children's and adults' classes.",
      'A registration flow, with a direct WhatsApp line for questions.',
      'Static pages built with React and Vite, so the site loads quickly on mobile connections.',
    ],
    now: 'Parents and adult learners use it to find a class and register.',
  },
  {
    slug: 'community-portal',
    name: 'Codetopia Community Portal',
    status: 'live',
    description:
      'Where members join the Codetopia community, get verified and keep track of their progress.',
    tags: ['Next.js', 'Django', 'PostgreSQL', 'WebSockets'],
    added: '2026-04-16',
    url: 'https://portal.community.codetopia.org',
    started: '2026-04-16',
    problem:
      'Joining the Codetopia community used to run through WhatsApp, Discord and spreadsheets. Onboarding was manual, and the core team had no single view of where each member was.',
    built: [
      'Self-registration and a structured onboarding journey for new members.',
      'Verification by the Community Manager, after which Vector adds the member to the Discord server automatically.',
      'An operations side for the core team: onboarding pipelines, roles and permissions, and live updates on community activity.',
    ],
    now: 'It is how new members join the Codetopia community and get into its Discord server.',
  },
  {
    slug: 'vector',
    name: 'Vector',
    status: 'live',
    description:
      'The Discord bot that looks after the Codetopia community server, from new member checks to moderation.',
    tags: ['TypeScript', 'discord.js', 'Prisma', 'PostgreSQL'],
    added: '2026-04-01',
    started: '2026-04-01',
    problem:
      'The community Discord server needed to keep out unverified accounts and keep moderation consistent, without a moderator always being online.',
    built: [
      'Portal verification: new members get a one-time link to confirm their account on the portal, then gain access automatically.',
      'Moderation commands, a word filter and spam detection, with automatic mutes and bans at set warning thresholds.',
      "A record of every moderation action, kept in the database and posted to the moderators' channel.",
    ],
    now: 'Running on the Codetopia community server.',
  },
]

export const email = 'codetopialabs@gmail.com'
