// The card icons play a few passes when the page loads, then rest (motion
// that runs on by itself should stop; WCAG 2.2.2). Hovering a card replays
// one pass of its icon: the card is marked as replaying (one pass, no
// stagger delay, see App.css) and its icon's animations are restarted.
export const PASSES = 3

export function replayIcon(card: HTMLElement) {
  const icon = card.querySelector('svg')
  if (!icon) return
  const parts: (HTMLElement | SVGElement)[] = [icon, ...icon.querySelectorAll('path')]
  card.classList.add('is-replaying')
  for (const part of parts) part.style.animationName = 'none'
  void card.offsetWidth // let the browser register the reset before restarting
  for (const part of parts) part.style.animationName = ''
}
