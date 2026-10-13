import { Link } from 'react-router'
import { formatDate } from '../data/date'
import { posts } from '../data/posts'
import { NotFound } from './NotFound'

export function Blog() {
  if (posts.length === 0) return <NotFound />

  return (
    <>
      <title>Blog | Codetopia Labs</title>
      <h1>Blog</h1>
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`} viewTransition>{post.title}</Link>
            <time className="project-meta" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
          </li>
        ))}
      </ul>
    </>
  )
}
