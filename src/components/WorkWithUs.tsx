import { useEffect, useState } from 'react'
import { email } from '../data/projects'

// Closing call to action at the end of every page. The address opens the
// visitor's email app; the button beside it copies the address, for anyone
// without an email app set up.
export function WorkWithUs({
  title = "Trying to wrap your head around something you're working on, we would like to hear about it.",
}: {
  title?: string
}) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(timer)
  }, [copied])

  async function copy() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
    } catch {
      // Clipboard can be blocked; the mailto link still works.
    }
  }

  return (
    <section className="section work-with-us">
      <h2 className="work-with-us-title">{title}</h2>
      <p className="contact">
        <a className="contact-email" href={`mailto:${email}`}>
          {email}
        </a>
        <button
          type="button"
          className="contact-copy"
          onClick={copy}
          aria-label="Copy email address"
          title="Copy email address"
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
            {copied ? (
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            ) : (
              <>
                <path d="M10 8h9a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 19 20h-9a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 10 8z" />
                <path d="M15.5 8V5.5A1.5 1.5 0 0 0 14 4H5A1.5 1.5 0 0 0 3.5 5.5v9A1.5 1.5 0 0 0 5 16h3.5" />
              </>
            )}
          </svg>
        </button>
        <span className={`contact-copied${copied ? ' is-shown' : ''}`} aria-live="polite">
          {copied ? 'Copied' : ''}
        </span>
      </p>
    </section>
  )
}
