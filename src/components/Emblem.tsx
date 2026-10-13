import { useEffect, useState } from 'react'
import { fields } from '../data/areas'
import { FieldIcon } from './FieldIcon'

// Above the headline: one field at a time, each icon playing its own motion
// as it appears. It goes through every field once, then rests on the first
// (motion should stop on its own; WCAG 2.2.2). Hovering replays the cycle.
// The full list is in plain text under the headline, so this is decorative.
const STEP_MS = 2500

export function Emblem() {
  const [index, setIndex] = useState(0)
  const [running, setRunning] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    if (!running) return
    const timer = window.setTimeout(() => {
      if (index === fields.length - 1) {
        setIndex(0)
        setRunning(false)
      } else {
        setIndex(index + 1)
      }
    }, STEP_MS)
    return () => window.clearTimeout(timer)
  }, [index, running])

  const field = fields[index]

  return (
    <div
      className="emblem"
      aria-hidden="true"
      onMouseEnter={() => {
        if (running || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        setIndex(0)
        setRunning(true)
      }}
    >
      <span key={field.name} className="emblem-item">
        <FieldIcon field={field.icon} />
        <span className="emblem-name">{field.name}</span>
      </span>
    </div>
  )
}
