import { useState } from 'react'

// Dark is the default. A visitor's choice is saved in their browser; the
// inline script in index.html applies it before the page draws.
type Theme = 'dark' | 'light'

const themeColors: Record<Theme, string> = { dark: '#0b0b0c', light: '#ffffff' }

function currentTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(currentTheme)
  const next: Theme = theme === 'dark' ? 'light' : 'dark'

  function toggle() {
    document.documentElement.dataset.theme = next
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColors[next])
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage can be blocked; the switch still works for this visit.
    }
    setTheme(next)
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
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
        {theme === 'dark' ? (
          // Sun: switch to light.
          <>
            <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </>
        ) : (
          // Moon: switch to dark.
          <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z" />
        )}
      </svg>
    </button>
  )
}
