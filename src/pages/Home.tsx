import { Link } from 'react-router'
import { Emblem, FieldLine } from '../components/Emblem'
import { Latest } from '../components/Latest'
import { useFieldCycle } from '../components/useFieldCycle'
import { WorkCards } from '../components/WorkCards'
import { WorkWithUs } from '../components/WorkWithUs'
import { formatDate } from '../data/date'
import { posts } from '../data/posts'
import { projects } from '../data/projects'

export function Home() {
  const cycle = useFieldCycle()

  return (
    <>
      <title>Codetopia Labs</title>
      <Emblem cycle={cycle} />
      <h1 className="hero">We research what's challenging and engineer what works.</h1>
      <FieldLine cycle={cycle} />

      <Latest />

      <section className="section">
        <div className="section-head">
          <h2 className="eyebrow">Selected work</h2>
          <Link to="/projects" className="section-more" viewTransition>
            All projects
          </Link>
        </div>
        <WorkCards items={projects.slice(0, 3)} />
      </section>

      {posts.length > 0 && (
        <section className="section">
          <div className="section-head">
            <h2 className="eyebrow">Blog</h2>
            <Link to="/blog" className="section-more" viewTransition>
              All posts
            </Link>
          </div>
          <ul className="rows">
            {posts.slice(0, 3).map((post) => (
              <li key={post.slug}>
                <Link to={`/blog/${post.slug}`} viewTransition>
                  {post.title}
                </Link>
                <time className="project-meta" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
              </li>
            ))}
          </ul>
        </section>
      )}

      <WorkWithUs />
    </>
  )
}
