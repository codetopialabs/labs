// Line icons for the fields on the home page, in the same style as the
// status icons. Shapes adapted from Lucide (ISC licence).
export type Field =
  | 'research'
  | 'software'
  | 'hardware'
  | 'ai'
  | 'automation'
  | 'data'
  | 'infrastructure'
  | 'design'

// A plain string is a static path; a tuple names a part that animates
// (see the field icon styles in App.css), with an optional delay in seconds.
type Part = string | [d: string, part: string, delay?: number]

const paths: Record<Field, Part[]> = {
  research: ['M11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12z', 'M20 20l-4.35-4.35'],
  software: [
    'M16 18l6-6-6-6',
    'M8 6l-6 6 6 6',
  ],
  hardware: [
    'M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z',
    ['M9.5 9.5h5v5h-5z', 'fi-core'],
    'M9 1.5V4',
    'M15 1.5V4',
    'M9 20v2.5',
    'M15 20v2.5',
    'M1.5 9H4',
    'M1.5 15H4',
    'M20 9h2.5',
    'M20 15h2.5',
  ],
  ai: [
    'M4.5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
    'M4.5 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
    'M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
    'M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
    'M19.5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
    ['M6.5 6L10 6', 'fi-link', 0],
    ['M5.56 7.7L10.94 16.3', 'fi-link', 0.25],
    ['M5.56 16.3L10.94 7.7', 'fi-link', 0.25],
    ['M6.5 18L10 18', 'fi-link', 0],
    ['M13.56 7.25L17.94 10.75', 'fi-link', 0.5],
    ['M13.56 16.75L17.94 13.25', 'fi-link', 0.5],
  ],
  automation: [
    'M3 12a9 9 0 0 1 15.5-6.2L21 8',
    'M21 3v5h-5',
    'M21 12a9 9 0 0 1-15.5 6.2L3 16',
    'M3 21v-5h5',
  ],
  data: [
    'M12 8c4.4 0 8-1.3 8-3s-3.6-3-8-3-8 1.3-8 3 3.6 3 8 3z',
    'M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5',
    ['M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3', 'fi-band'],
  ],
  infrastructure: [
    'M4 3h16a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z',
    'M4 13h16a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1z',
    ['M7 7h3', 'fi-led'],
    ['M7 17h3', 'fi-led'],
  ],
  design: [
    'M12 19l7-7 3 3-7 7-3-3z',
    'M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z',
    'M2 2l7.6 7.6',
    'M11 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  ],
}

export function FieldIcon({ field }: { field: Field }) {
  return (
    <svg
      className={`field-icon field-icon-${field}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[field].map((part) => {
        if (typeof part === 'string') return <path key={part} d={part} />
        const [d, name, delay] = part
        return (
          <path
            key={d}
            d={d}
            className={name}
            style={delay ? ({ '--link-delay': `${delay}s` } as React.CSSProperties) : undefined}
          />
        )
      })}
    </svg>
  )
}
