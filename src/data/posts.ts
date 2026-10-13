export type Post = {
  slug: string
  title: string
  date: string
  body: string[]
}

// Newest first. The blog (nav link, home section, pages, sitemap) only
// appears once there is at least one post.
export const posts: Post[] = []
