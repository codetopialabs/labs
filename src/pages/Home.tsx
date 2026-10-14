import { Link } from 'react-router'
import { Emblem } from '../components/Emblem'
import { Latest } from '../components/Latest'
import { WorkCards } from '../components/WorkCards'
import { WorkWithUs } from '../components/WorkWithUs'
import { fields } from '../data/areas'
import { formatDate } from '../data/date'
import { posts } from '../data/posts'
import { projects } from '../data/projects'

export function Home() {
  return (
    <div className="home">
      <title>Codetopia Labs</title>
      {/* The opening fills the first screen and sits in its centre. */}
      <div className="home-opening">
        <Emblem />
        <h1 className="hero">We research what's hard and engineer what works.</h1>
        <p className="field-line">
          {fields.map((field) => field.name.toLowerCase()).join(' / ')}
        </p>
        <Latest />
      </div>

      <section className="section">
        <div className="section-head">
          <h2 className="eyebrow">Selected work</h2>
        </div>
        <WorkCards items={projects.slice(0, 3)} />
        <Link to="/projects" className="section-more home-more" viewTransition>
          All projects
        </Link>
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
    </div>
  )
}
