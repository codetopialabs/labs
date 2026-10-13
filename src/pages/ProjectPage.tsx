import { Link, useParams } from 'react-router'
import { StatusIcon } from '../components/StatusIcon'
import { formatDate } from '../data/date'
import { projects, statusLabels } from '../data/projects'
import { NotFound } from './NotFound'

export function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  if (!project) return <NotFound />

  return (
    <article className="project-page">
      <title>{`${project.name} | Codetopia Labs`}</title>
      <Link to="/projects" className="back-link" viewTransition>
        /projects
      </Link>
      <h1>{project.name}</h1>
      <p className="project-facts project-page-facts">
        <span className={`status status-${project.status}`}>
          <StatusIcon status={project.status} />
          {statusLabels[project.status]}
        </span>
        <span>Started {formatDate(project.started)}</span>
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            Visit site
          </a>
        )}
      </p>
      <p className="project-lede">{project.description}</p>

      <section className="section">
        <h2 className="eyebrow">The problem</h2>
        <p>{project.problem}</p>
      </section>

      <section className="section">
        <h2 className="eyebrow">What we built</h2>
        <ul className="built">
          {project.built.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="eyebrow">Where it is now</h2>
        <p>{project.now}</p>
      </section>

      <section className="section">
        <h2 className="eyebrow">Built with</h2>
        <p className="project-meta">{project.tags.join(', ')}</p>
      </section>
    </article>
  )
}
