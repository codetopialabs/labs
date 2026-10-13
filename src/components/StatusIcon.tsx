import type { Status } from '../data/projects'

// Line icons for project status, one per stage of a lab's work:
// research (lens), experiment (flask), building (wrench), live (signal), archived (box).
// Shapes adapted from Lucide (ISC licence).
const paths: Record<Status, string[]> = {
  research: ['M11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12z', 'M20 20l-4.35-4.35'],
  experiment: ['M9 3h6', 'M10 3v6.5L4.6 18.4A1.75 1.75 0 0 0 6.1 21h11.8a1.75 1.75 0 0 0 1.5-2.6L14 9.5V3', 'M7.2 15h9.6'],
  building: [
    'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
  ],
  live: [
    'M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z',
    'M16.24 7.76a6 6 0 0 1 0 8.49',
    'M7.76 16.24a6 6 0 0 1 0-8.49',
    'M19.07 4.93a10 10 0 0 1 0 14.14',
    'M4.93 19.07a10 10 0 0 1 0-14.14',
  ],
  archived: ['M3 3h18v5H3z', 'M4.5 8v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8', 'M10 12h4'],
}

export function StatusIcon({ status }: { status: Status }) {
  return (
    <svg
      className="status-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[status].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}
