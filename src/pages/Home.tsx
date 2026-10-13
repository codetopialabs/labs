import { Link } from 'react-router'
import { FieldGrid } from '../components/FieldGrid'
import { Latest } from '../components/Latest'
import { StatusIcon } from '../components/StatusIcon'
import { WorkCards } from '../components/WorkCards'
import { WorkWithUs } from '../components/WorkWithUs'
import { scope } from '../data/areas'
import { formatDate } from '../data/date'
import { exploring } from '../data/exploring'
import { posts } from '../data/posts'
import { projects } from '../data/projects'

export function Home() {
  return (
    <>
      <title>Codetopia Labs</title>
      <h1 className="hero">We research what's hard and engineer what works.</h1>

      <Latest />

      <section className="section">
        <div className="section-head">
          <h2 className="eyebrow">What we do</h2>
        </div>
        <p className="scope">{scope}</p>
        <FieldGrid />
      </section>

      <section className="section">
        <div className="section-head">
          <h2 className="eyebrow">Selected work</h2>
          <Link to="/projects" className="section-more" viewTransition>
            All projects
          </Link>
        </div>
        <WorkCards items={projects.slice(0, 3)} />
      </section>

      <section className="section">
        <div className="section-head">
          <h2 className="eyebrow">Exploring</h2>
        </div>
        <ul className="exploring">
          {exploring.map((item) => (
            <li key={item.name}>
              <StatusIcon status="research" />
              <div>
                <h3 className="exploring-name">{item.name}</h3>
                <p className="exploring-line">{item.line}</p>
              </div>
            </li>
          ))}
        </ul>
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
