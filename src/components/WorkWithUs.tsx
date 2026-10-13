import { useEffect, useState } from 'react'
import { email } from '../data/projects'

// Closing call to action, shared by the home and about pages. Clicking the
// address opens the visitor's email app if they have one, and also copies
// it, so the click is never a dead end.
export function WorkWithUs() {
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
      <h2 className="work-with-us-title">If you're working on something hard, we'd like to hear about it.</h2>
      <p className="contact">
        <a className="contact-email" href={`mailto:${email}`} onClick={copy}>
          {email}
        </a>
        <span className={`contact-copied${copied ? ' is-shown' : ''}`} aria-live="polite">
          {copied ? 'Copied' : ''}
        </span>
      </p>
    </section>
  )
}
