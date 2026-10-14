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
  withKey = false,
  list = false,
}: {
  items: Project[]
  detailed?: boolean
  // With the status key beside the cards, wide screens show only the icon.
  withKey?: boolean
  // Card names are h3 under a section heading, h2 when the cards sit
  // directly under the page title.
  headingLevel?: 2 | 3
  // One row per project instead of tiles.
  list?: boolean
}) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  // Three across, or two when that fills every row (4 cards as 2 by 2
  // instead of 3 and a lone one).
  const twoUp = !list && items.length % 3 !== 0 && items.length % 2 === 0
  const className = ['cards work', twoUp && 'two-up', list && 'is-list', withKey && 'with-key']
    .filter(Boolean)
    .join(' ')
  return (
    <ul className={className}>
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
            <p className="card-status status" title={statusLabels[project.status]}>
              <StatusIcon status={project.status} />
              <span className="card-status-label">{statusLabels[project.status]}</span>
            </p>
          )}
        </li>
      ))}
    </ul>
  )
}

// The statuses on the page with what each one means, in the left margin
// level with the cards. Wide screens only; smaller ones name the status on
// each card instead.
export function StatusKey({ statuses }: { statuses: Set<Status> }) {
  return (
    <section className="section status-key-wrap">
      <h2 className="eyebrow">What the statuses mean</h2>
      <dl className="status-key">
        {(Object.keys(statusLabels) as Status[])
          .filter((status) => statuses.has(status))
          .map((status) => (
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
