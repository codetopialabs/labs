import { useEffect, useRef } from 'react'

// A maze that generates itself (depth-first carve), searches itself
// (breadth-first flood from the top-left), then traces the shortest path
// to the bottom-right. Then a new maze.

const N = 7 // cells per side
const G = 2 * N + 1 // grid blocks per side, walls included
const BLOCK = 4 // CSS px per block
const PX = G * BLOCK
const START = G + 1
const GOAL = G * G - G - 2

const WALL = 0
const OPEN = 1
const SEEN = 2
const PATH = 3

type Step = [index: number, state: number]

function solve() {
  const steps: Step[][] = [[], [], []]
  const open = new Set<number>()

  // Carve: iterative depth-first backtracker over cells.
  const at = (r: number, c: number) => (2 * r + 1) * G + (2 * c + 1)
  const visited = new Set([0])
  const stack = [0]
  steps[0].push([START, OPEN])
  open.add(START)
  while (stack.length) {
    const cell = stack[stack.length - 1]
    const r = Math.floor(cell / N)
    const c = cell % N
    const options = [
      [r - 1, c],
      [r + 1, c],
      [r, c - 1],
      [r, c + 1],
    ].filter(([nr, nc]) => nr >= 0 && nr < N && nc >= 0 && nc < N && !visited.has(nr * N + nc))
    if (!options.length) {
      stack.pop()
      continue
    }
    const [nr, nc] = options[Math.floor(Math.random() * options.length)]
    const wall = (at(r, c) + at(nr, nc)) / 2
    steps[0].push([wall, OPEN], [at(nr, nc), OPEN])
    open.add(wall).add(at(nr, nc))
    visited.add(nr * N + nc)
    stack.push(nr * N + nc)
  }

  // Search: breadth-first flood until the goal is reached.
  const parent = new Map([[START, -1]])
  const queue = [START]
  while (queue.length) {
    const block = queue.shift()!
    steps[1].push([block, SEEN])
    if (block === GOAL) break
    for (const next of [block - G, block + G, block - 1, block + 1]) {
      if (open.has(next) && !parent.has(next)) {
        parent.set(next, block)
        queue.push(next)
      }
    }
  }

  // Trace: walk parents back from the goal.
  const path: number[] = []
  for (let b = GOAL; b !== -1; b = parent.get(b)!) path.push(b)
  steps[2] = path.reverse().map((b): Step => [b, PATH])

  return steps
}

export function Maze() {
  const canvas = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const el = canvas.current
    const ctx = el?.getContext('2d')
    if (!el || !ctx) return

    const dpr = window.devicePixelRatio || 1
    el.width = PX * dpr
    el.height = PX * dpr
    ctx.scale(dpr, dpr)

    const style = getComputedStyle(el)
    const ink = style.getPropertyValue('--text').trim() || '#262626'
    const paper = style.getPropertyValue('--bg').trim() || '#ffffff'
    const alpha = [0.1, 0, 0.24, 1]

    const paint = (index: number, state: number) => {
      const x = (index % G) * BLOCK
      const y = Math.floor(index / G) * BLOCK
      ctx.globalAlpha = 1
      ctx.fillStyle = paper
      ctx.fillRect(x, y, BLOCK, BLOCK)
      ctx.globalAlpha = alpha[state]
      ctx.fillStyle = ink
      ctx.fillRect(x, y, BLOCK, BLOCK)
    }
    const reset = () => {
      for (let i = 0; i < G * G; i++) paint(i, WALL)
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      reset()
      solve().flat().forEach(([i, s]) => paint(i, s))
      return
    }

    // Blocks painted per frame for each phase: carve, search, trace.
    const speed = [1, 1, 0.5]
    let steps = solve()
    let phase = 0
    let cursor = 0
    let hold = 0
    let frame = 0
    reset()

    const tick = () => {
      frame = requestAnimationFrame(tick)
      if (hold > 0) {
        hold--
        if (hold === 0 && phase === 3) {
          steps = solve()
          phase = 0
          cursor = 0
          reset()
        }
        return
      }
      cursor += speed[phase]
      const list = steps[phase]
      while (list.length && cursor >= 1) {
        const step = list.shift()!
        paint(step[0], step[1])
        cursor--
      }
      if (!list.length) {
        phase++
        cursor = 0
        hold = phase === 3 ? 150 : 30
      }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className="maze" aria-hidden="true">
      <canvas ref={canvas} style={{ width: PX, height: PX }} />
    </div>
  )
}
