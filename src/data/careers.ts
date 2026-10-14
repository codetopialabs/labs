// Open roles, shown on /careers. While this is empty, the page says there
// are no open roles and invites people to get in touch anyway.
export type Role = {
  title: string
  // For example 'Full-time', 'Contract' or 'Internship'.
  type: string
  location: string
  description: string
  // Where to apply; leave out to apply by email.
  url?: string
}

export const roles: Role[] = []
