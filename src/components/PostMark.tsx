// A page whose lines write themselves in, then fade and start again.
// Announces a new blog post on the home page.
export function PostMark() {
  return (
    <svg
      className="post-mark"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
      <path d="M14 2v6h6" />
      <path className="post-mark-line" pathLength={1} d="M8 13h8" />
      <path className="post-mark-line" pathLength={1} d="M8 17h5" style={{ animationDelay: '0.35s' }} />
    </svg>
  )
}
