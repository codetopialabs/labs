import { email } from '../data/projects'

export function About() {
  return (
    <>
      <title>About | Codetopia Labs</title>
      <h1>
        Codetopia Labs is the research and engineering division of Codetopia. We write about
        what we learn along the way.
      </h1>
      <p>
        Recent work includes the{' '}
        <a href="https://academy.codetopia.org" target="_blank" rel="noopener noreferrer">
          Codetopia Academy
        </a>{' '}
        website.
      </p>
      <p>
        Working on something we could help with? Email us at{' '}
        <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </>
  )
}
