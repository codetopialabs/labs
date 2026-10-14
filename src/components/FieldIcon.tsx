// Line icons for the fields, drawn on a 48 grid for the size the emblem
// shows them at. Two tones: the structure is soft, and the part that moves
// (class acc) is bright, so every icon has a focal point.
// A plain string is a structure path. A tuple names a part, with an
// optional delay in seconds so parts can move in sequence.
export type Field =
  | 'research'
  | 'software'
  | 'hardware'
  | 'ai'
  | 'automation'
  | 'data'
  | 'infrastructure'
  | 'design'

type Part = string | [d: string, part: string, delay?: number]

const paths: Record<Field, Part[]> = {
  research: [
    ['M20 32a12 12 0 1 0 0-24 12 12 0 0 0 0 24z', 'acc'],
    'M29 29l13 13',
    'M15 24v-3',
    'M20 24v-7',
    'M25 24v-5',
  ],
  software: [
    'M16 13L5 24l11 11',
    'M32 13l11 11-11 11',
    ['M28 9L20 39', 'fi-slash acc'],
  ],
  hardware: [
    'M15 12h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3V15a3 3 0 0 1 3-3z',
    ['M20 19h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z', 'fi-core acc'],
    ['M18 6v6', 'fi-pin', 0],
    ['M24 6v6', 'fi-pin', 0],
    ['M30 6v6', 'fi-pin', 0],
    ['M36 18h6', 'fi-pin', 0.15],
    ['M36 24h6', 'fi-pin', 0.15],
    ['M36 30h6', 'fi-pin', 0.15],
    ['M30 36v6', 'fi-pin', 0.3],
    ['M24 36v6', 'fi-pin', 0.3],
    ['M18 36v6', 'fi-pin', 0.3],
    ['M6 30h6', 'fi-pin', 0.45],
    ['M6 24h6', 'fi-pin', 0.45],
    ['M6 18h6', 'fi-pin', 0.45],
  ],
  ai: [
    'M8 17.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z',
    'M8 37.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z',
    'M24 11.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z',
    'M24 27.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z',
    'M24 43.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z',
    'M40 17.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z',
    'M40 37.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z',
    ['M11 12.88L21 9.12', 'fi-link acc', 0],
    ['M10.71 15.7L21.29 22.3', 'fi-link acc', 0],
    ['M9.68 16.73L22.32 37.27', 'fi-link acc', 0],
    ['M9.68 31.27L22.32 10.73', 'fi-link acc', 0],
    ['M10.71 32.3L21.29 25.7', 'fi-link acc', 0],
    ['M11 35.12L21 38.88', 'fi-link acc', 0],
    ['M27 9.12L37 12.88', 'fi-link acc', 0.3],
    ['M25.68 10.73L38.32 31.27', 'fi-link acc', 0.3],
    ['M26.71 22.3L37.29 15.7', 'fi-link acc', 0.3],
    ['M26.71 25.7L37.29 32.3', 'fi-link acc', 0.3],
    ['M25.68 37.27L38.32 16.73', 'fi-link acc', 0.3],
    ['M27 38.88L37 35.12', 'fi-link acc', 0.3],
  ],
  automation: [
    'M8 22A16 16 0 0 1 36.5 13.5',
    ['M38 6v8h-8', 'acc'],
    'M40 26A16 16 0 0 1 11.5 34.5',
    ['M10 42v-8h8', 'acc'],
  ],
  data: [
    'M8 12v24c0 3.3 7.2 6 16 6s16-2.7 16-6V12',
    ['M8 12c0-3.3 7.2-6 16-6s16 2.7 16 6-7.2 6-16 6S8 15.3 8 12z', 'fi-layer acc', 0],
    ['M8 24c0 3.3 7.2 6 16 6s16-2.7 16-6', 'fi-layer acc', 0.25],
  ],
  infrastructure: [
    'M10 8h28a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z',
    'M10 26h28a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V28a2 2 0 0 1 2-2z',
    'M28 13v4',
    'M32 13v4',
    'M36 13v4',
    'M28 31v4',
    'M32 31v4',
    'M36 31v4',
    ['M13 15h5', 'fi-led acc'],
    ['M13 33h5', 'fi-led acc', 0.5],
  ],
  design: [
    'M24 38l14-14 6 6-14 14-6-6z',
    'M36 26l-3-15L4 4l7 29 15 3 10-10z',
    'M4 4l15 15',
    ['M22 27a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'acc'],
  ],
}

export function FieldIcon({ field }: { field: Field }) {
  return (
    <svg
      className={`field-icon field-icon-${field}`}
      viewBox="0 0 48 48"
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
            pathLength={name.includes('fi-slash') ? 1 : undefined}
            style={delay ? ({ '--part-delay': `${delay}s` } as React.CSSProperties) : undefined}
          />
        )
      })}
    </svg>
  )
}
