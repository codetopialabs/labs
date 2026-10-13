import { Link } from 'react-router'

export function NotFound() {
  return (
    <>
      <title>Not found | Codetopia Labs</title>
      <p className="eyebrow">404</p>
      <h1>Page not found.</h1>
      <p>
        Go to the{' '}
        <Link to="/" viewTransition>
          home page
        </Link>
        .
      </p>
    </>
  )
}
