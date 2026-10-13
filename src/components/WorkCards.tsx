import { statusLabels, type Project, type Status } from '../data/projects'
import { StatusIcon } from './StatusIcon'

// Projects as cards, in the same style as the field cards. Each card's
// status icon loops its motion, one card after another. Live projects link
// to their site; the link covers the whole card.
const STAGGER_S = 0.6

export function WorkCards({ items, detailed = false }: { items: Project[]; detailed?: boolean }) {
  return (
    <ul className="cards work">
      {items.map((project, i) => (
        <li
          key={project.name}
          className={`card status-${project.status}`}
          style={{ '--stagger': `${i * STAGGER_S}s` } as React.CSSProperties}
        >
          <StatusIcon status={project.status} />
          <h3 className="card-name">
            {project.url ? (
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            ) : (
              project.name
            )}
          </h3>
          <p className="card-line">{project.description}</p>
          {detailed && (
            <ul className="tags" aria-label="Built with">
              {project.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
          )}
          {detailed && <p className="card-status">{statusLabels[project.status]}</p>}
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
