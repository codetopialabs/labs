import { kindLabels, statusLabels, statusMeanings, type Project, type Status } from '../data/projects'
import { replayIcon } from './replay'
import { ProjectIcon } from './ProjectIcon'
import { StatusIcon } from './StatusIcon'

// Projects as cards. Each card's icon shows what kind of thing the project
// is (website, platform, bot) and plays its motion a few times, one card
// after another, then rests; hovering a card replays it. Live projects link
// to their site; the link covers the whole card.
const STAGGER_S = 0.6

export function WorkCards({
  items,
  detailed = false,
  headingLevel = 3,
}: {
  items: Project[]
  detailed?: boolean
  // Card names are h3 under a section heading, h2 when the cards sit
  // directly under the page title.
  headingLevel?: 2 | 3
}) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  return (
    <ul className="cards work">
      {items.map((project, i) => (
        <li
          key={project.name}
          className="card"
          style={{ '--stagger': `${i * STAGGER_S}s` } as React.CSSProperties}
          onMouseEnter={(e) => replayIcon(e.currentTarget)}
        >
          <div className="card-top">
            <ProjectIcon kind={project.kind} />
            <span className="card-kind">{project.kindLabel ?? kindLabels[project.kind]}</span>
          </div>
          <Heading className="card-name">
            {project.url ? (
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.name}
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            ) : (
              project.name
            )}
          </Heading>
          <p className="card-line">{project.description}</p>
          {detailed && project.tags.length > 0 && (
            <ul className="tags" aria-label="Built with">
              {project.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
          )}
          {detailed && (
            <p className="card-status status">
              <StatusIcon status={project.status} />
              {statusLabels[project.status]}
            </p>
          )}
        </li>
      ))}
    </ul>
  )
}

// The statuses with what each one means, so the word on a card is clear.
export function StatusKey() {
  return (
    <section className="section">
      <h2 className="eyebrow">What the statuses mean</h2>
      <dl className="status-key">
        {(Object.keys(statusLabels) as Status[]).map((status) => (
          <div key={status}>
            <dt className="status">
              <StatusIcon status={status} />
              {statusLabels[status]}
            </dt>
            <dd>{statusMeanings[status]}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
