import { StatusKey, WorkCards } from '../components/WorkCards'
import { WorkWithUs } from '../components/WorkWithUs'
import { projects } from '../data/projects'

export function Projects() {
  // The key only earns its space when projects are at different stages.
  const statuses = new Set(projects.map((p) => p.status))
  const withKey = statuses.size > 1
  return (
    <>
      <title>Projects | Codetopia Labs</title>
      <h1>Projects</h1>
      <div className="work-with-key">
        <WorkCards items={projects} detailed headingLevel={2} withKey={withKey} />
        {withKey && <StatusKey statuses={statuses} />}
      </div>
      <WorkWithUs />
    </>
  )
}
