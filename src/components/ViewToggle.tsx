import type { View } from './useView'

// The grid / list switch above the projects.
const icons: Record<View, string> = {
  grid: 'M4 4h6.5v6.5H4zM13.5 4H20v6.5h-6.5zM4 13.5h6.5V20H4zM13.5 13.5H20V20h-6.5z',
  list: 'M4 6h16M4 12h16M4 18h16',
}

export function ViewToggle({ view, onChange }: { view: View; onChange: (view: View) => void }) {
  return (
    <div className="view-toggle" role="group" aria-label="Show projects as">
      {(['grid', 'list'] as const).map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={view === option}
          aria-label={option === 'grid' ? 'Grid' : 'List'}
          title={option === 'grid' ? 'Grid' : 'List'}
          onClick={() => onChange(option)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d={icons[option]} />
          </svg>
        </button>
      ))}
    </div>
  )
}
