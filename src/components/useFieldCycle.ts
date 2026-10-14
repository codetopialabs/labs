import { useEffect, useState } from 'react'
import { fields } from '../data/areas'

// The home page's field showcase: the emblem above the headline and the
// field line under it share one current field. On arrival it cycles
// through every field once, then rests on the first (motion should stop on
// its own; WCAG 2.2.2). Hovering, focusing or tapping a word in the field
// line shows that field; hovering the emblem replays the cycle.
const STEP_MS = 2500

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useFieldCycle() {
  const [index, setIndex] = useState(0)
  const [cycling, setCycling] = useState(() => !reducedMotion())
  // Set when the visitor picks a field, so it can be announced.
  const [picked, setPicked] = useState(false)

  useEffect(() => {
    if (!cycling) return
    const timer = window.setTimeout(() => {
      if (index === fields.length - 1) {
        setIndex(0)
        setCycling(false)
      } else {
        setIndex(index + 1)
      }
    }, STEP_MS)
    return () => window.clearTimeout(timer)
  }, [index, cycling])

  return {
    index,
    pick(i: number) {
      setCycling(false)
      setPicked(true)
      setIndex(i)
    },
    replay() {
      if (cycling || reducedMotion()) return
      setPicked(false)
      setIndex(0)
      setCycling(true)
    },
    picked,
  }
}

export type Cycle = ReturnType<typeof useFieldCycle>
