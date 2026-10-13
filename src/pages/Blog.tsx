import { Link } from 'react-router'
import { posts } from '../data/posts'

export function Blog() {
  return (
    <>
      <title>Blog | Codetopia Labs</title>
      <h1>Blog</h1>
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`} viewTransition>{post.title}</Link>
            <time className="project-meta" dateTime={post.date}>
              {post.date}
            </time>
          </li>
        ))}
      </ul>
    </>
  )
}
