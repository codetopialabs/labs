// A lab flask with bubbles rising through it. Used for a new project that is
// in the Experiment stage. Same drawing as the Experiment status icon.

const bubbles = [
  { cx: 9.8, r: 1.3, delay: 0 },
  { cx: 13.8, r: 1, delay: 0.55 },
  { cx: 11.8, r: 1.5, delay: 1.1 },
]

export function FlaskMark() {
  return (
    <svg
      className="new-mark"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path
        className="new-mark-liquid"
        d="M7.2 15h9.6l2.6 3.4a1.75 1.75 0 0 1-1.5 2.6H6.1a1.75 1.75 0 0 1-1.5-2.6z"
        stroke="none"
      />
      {bubbles.map((b) => (
        <circle
          key={b.cx}
          className="new-mark-bubble"
          cx={b.cx}
          cy={18}
          r={b.r}
          strokeWidth="1.2"
          style={{ animationDelay: `${b.delay}s` }}
        />
      ))}
      <path d="M9 3h6" />
      <path d="M10 3v6.5L4.6 18.4A1.75 1.75 0 0 0 6.1 21h11.8a1.75 1.75 0 0 0 1.5-2.6L14 9.5V3" />
    </svg>
  )
}
