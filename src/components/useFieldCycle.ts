import { useEffect, useState } from 'react'
import { fields } from '../data/areas'

// The home page's field showcase: the emblem above the headline and the
// field line under it share one current field. It keeps moving through the
// fields at an unhurried pace. Hovering the emblem holds it; hovering,
// focusing or tapping a word in the field line shows that field and holds
// it there until the pointer or focus leaves (WCAG 2.2.2: moving content can
// be paused). With reduced motion it stays on the first field.
const STEP_MS = 4000

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useFieldCycle() {
  const [index, setIndex] = useState(0)
  const [held, setHeld] = useState(false)
  // Set when the visitor picks a field, so it can be announced.
  const [picked, setPicked] = useState(false)

  useEffect(() => {
    if (held || reducedMotion()) return
    const timer = window.setTimeout(() => setIndex((index + 1) % fields.length), STEP_MS)
    return () => window.clearTimeout(timer)
  }, [index, held])

  return {
    index,
    pick(i: number) {
      setHeld(true)
      setPicked(true)
      setIndex(i)
    },
    hold() {
      setHeld(true)
    },
    resume() {
      setHeld(false)
      setPicked(false)
    },
    picked,
  }
}

export type Cycle = ReturnType<typeof useFieldCycle>
