import type { Kind } from '../data/projects'

// Line icons for the kind of thing a project is, shown on the work cards.
// A plain string is a static path; a tuple names a part that animates (see
// the work card styles in App.css) with an optional delay in seconds.
type Part = string | [d: string, part: string, delay?: number]

const paths: Record<Kind, Part[]> = {
  // A browser window whose content lines write themselves in.
  website: [
    'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
    'M2 9h20',
    'M5.5 6.5h1',
    'M8 6.5h1',
    ['M6 13h7', 'kind-line', 0],
    ['M6 16h11', 'kind-line', 0.2],
  ],
  // Stacked layers that light up in turn.
  platform: [
    ['M12 2.5 2.5 7.25 12 12l9.5-4.75L12 2.5z', 'kind-layer', 0],
    ['M2.5 12 12 16.75 21.5 12', 'kind-layer', 0.2],
    ['M2.5 16.75 12 21.5l9.5-4.75', 'kind-layer', 0.4],
  ],
  // A robot head whose eyes blink.
  bot: [
    'M6 8h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z',
    'M12 8V4.5',
    'M10 4.5h4',
    'M2 13v2',
    'M22 13v2',
    ['M9 13v2', 'kind-eye'],
    ['M15 13v2', 'kind-eye'],
  ],
}

export function ProjectIcon({ kind }: { kind: Kind }) {
  return (
    <svg
      className={`project-icon kind-${kind}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[kind].map((part) => {
        if (typeof part === 'string') return <path key={part} d={part} />
        const [d, name, delay] = part
        return (
          <path
            key={d}
            d={d}
            className={name}
            pathLength={name === 'kind-line' ? 1 : undefined}
            style={delay ? ({ '--part-delay': `${delay}s` } as React.CSSProperties) : undefined}
          />
        )
      })}
    </svg>
  )
}
