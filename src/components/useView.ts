import { useState } from 'react'

// Grid or list for the projects page. A visitor's choice is saved in their
// browser so it holds on the next visit.
export type View = 'grid' | 'list'

const KEY = 'projects-view'

function savedView(): View {
  try {
    return localStorage.getItem(KEY) === 'list' ? 'list' : 'grid'
  } catch {
    return 'grid'
  }
}

export function useView() {
  const [view, setView] = useState<View>(savedView)
  function choose(next: View) {
    try {
      localStorage.setItem(KEY, next)
    } catch {
      // Storage can be blocked; the choice still works for this visit.
    }
    setView(next)
  }
  return [view, choose] as const
}
