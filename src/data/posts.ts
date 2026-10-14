export type Post = {
  slug: string
  title: string
  date: string
  body: string[]
}

// Newest first. The blog (nav link, home section, pages, sitemap) only
// appears once there is at least one post.
export const posts: Post[] = [
  {
    slug: 'how-a-new-member-gets-in',
    title: 'How a new member gets into the Codetopia community',
    date: '2026-10-14',
    body: [
      "Codetopia's community runs on two pieces of software we built: a portal where people sign up, and a Discord bot called Vector that looks after the server. This is how they work together when someone new joins.",
      'It starts on the portal. A new member creates an account, tells us a bit about themselves and goes through a short onboarding journey. Nothing happens on Discord yet.',
      "Once onboarding is done, the Community Manager reviews the profile and verifies the member. That step is done by a person, not a script.",
      'Joining the Discord server is where Vector comes in. Every new arrival gets a Pending role, which only lets them see a #verify channel. There they run /link, and Vector replies with a one-time link to the portal.',
      'When they open that link and confirm, Vector grants access to the rest of the server automatically. Nobody has to match Discord usernames to sign-ups by hand.',
      'Vector also handles the day to day. It runs a word filter, mutes anyone who sends five messages in five seconds, and turns warnings into an automatic one-hour mute at three and a ban at five. Every action it takes is logged for the moderators.',
      'Before this, joining ran through WhatsApp, Discord and spreadsheets, and the core team had no single view of where each member was. Now every member has one record from the moment they sign up.',
    ],
  },
]
