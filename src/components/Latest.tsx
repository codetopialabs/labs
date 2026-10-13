import { Link } from 'react-router'
import { posts } from '../data/posts'
import { PostMark } from './PostMark'

// Announces the newest blog post under the home headline for FRESH_DAYS
// after its date. Projects are not announced: they are already listed on
// the home page.
const FRESH_DAYS = 60
const loadedAt = Date.now()

function isFresh(date: string) {
  return loadedAt - Date.parse(`${date}T00:00:00Z`) <= FRESH_DAYS * 24 * 60 * 60 * 1000
}

export function Latest() {
  const post = posts[0]
  if (!post || !isFresh(post.date)) return null

  return (
    <Link to={`/blog/${post.slug}`} className="latest" viewTransition>
      <span className="latest-tag">
        <PostMark />
        New post
      </span>
      {post.title}
    </Link>
  )
}
