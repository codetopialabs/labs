import { useParams } from 'react-router'
import { formatDate } from '../data/date'
import { posts } from '../data/posts'
import { NotFound } from './NotFound'

export function Post() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return <NotFound />

  return (
    <article className="post">
      <title>{`${post.title} | Codetopia Labs`}</title>
      <time className="eyebrow" dateTime={post.date}>
        {formatDate(post.date, 'long')}
      </time>
      <h1 className="post-title">{post.title}</h1>
      {post.body.map((paragraph) => (
        <p key={paragraph.slice(0, 24)}>{paragraph}</p>
      ))}
    </article>
  )
}
