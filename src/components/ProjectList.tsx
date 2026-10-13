import { statusLabels, type Project, type Status } from '../data/projects'
import { StatusIcon } from './StatusIcon'

export function ProjectList({ items }: { items: Project[] }) {
  return (
    <ul className="projects">
      {items.map((project) => (
        <li key={project.name}>
          <div className="project-head">
            <h2 className="project-name">
{project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h2>
            <span className="project-meta project-facts">
              <span className={`status status-${project.status}`}>
                <StatusIcon status={project.status} />
                {statusLabels[project.status]}
              </span>
            </span>
          </div>
          <p>{project.description}</p>
          <p className="project-meta">{project.tags.join(', ')}</p>
        </li>
      ))}
    </ul>
  )
}

export function StatusKey() {
  return (
    <ul className="status-key project-meta" aria-label="Project statuses">
      {(Object.keys(statusLabels) as Status[]).map((status) => (
        <li key={status} className="status">
          <StatusIcon status={status} />
          {statusLabels[status]}
        </li>
      ))}
    </ul>
  )
}
