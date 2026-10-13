import { Link } from 'react-router'
import { Maze } from '../components/Maze'
import { StatusIcon } from '../components/StatusIcon'
import { posts } from '../data/posts'
import { projects, statusLabels } from '../data/projects'

export function Home() {
  const latest = posts[0]

  return (
    <>
      <title>Codetopia Labs</title>
      <Maze />
      <h1 className="lede">
        Codetopia Labs is the research and engineering division of{' '}
        <a href="https://codetopia.org" target="_blank" rel="noopener noreferrer">
          Codetopia
        </a>
        , a network of initiatives built in Ghana.
      </h1>

      {latest && (
        <Link to={`/blog/${latest.slug}`} className="latest" viewTransition>
          <span className="latest-tag">New</span>
          {latest.title}
        </Link>
      )}

      <section className="section">
        <div className="section-head">
          <h2 className="eyebrow">Projects</h2>
          <Link to="/projects" className="section-more" viewTransition>
            All projects
          </Link>
        </div>
        <ul className="rows">
          {projects.slice(0, 3).map((project) => (
            <li key={project.name}>
              {project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              ) : (
                <span>{project.name}</span>
              )}
              <span className={`status status-${project.status} project-meta`}>
                <StatusIcon status={project.status} />
                {statusLabels[project.status]}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <div className="section-head">
          <h2 className="eyebrow">Notes</h2>
          <Link to="/blog" className="section-more" viewTransition>
            All notes
          </Link>
        </div>
        <ul className="rows">
          {posts.slice(0, 3).map((post) => (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`} viewTransition>
                {post.title}
              </Link>
              <time className="project-meta" dateTime={post.date}>
                {post.date}
              </time>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
