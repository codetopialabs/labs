import { WorkWithUs } from '../components/WorkWithUs'
import { roles } from '../data/careers'

export function Careers() {
  return (
    <>
      <title>Careers | Codetopia Labs</title>
      <h1>Careers</h1>
      {roles.length === 0 ? (
        <>
          <p>We don't have open roles right now.</p>
          <p>
            We're always glad to hear from people who like challenging problems. Tell us what you've
            built and what you'd like to work on.
          </p>
        </>
      ) : (
        <ul className="roles">
          {roles.map((role) => (
            <li key={role.title} className="role">
              <h2 className="role-title">
                {role.url ? (
                  <a href={role.url} target="_blank" rel="noopener noreferrer">
                    {role.title}
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                ) : (
                  role.title
                )}
              </h2>
              <p className="role-meta">
                {role.type}, {role.location}
              </p>
              <p>{role.description}</p>
            </li>
          ))}
        </ul>
      )}
      <WorkWithUs title="Want to work on challenging problems with us?" />
    </>
  )
}
