import { StatusKey, WorkCards } from '../components/WorkCards'
import { WorkWithUs } from '../components/WorkWithUs'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <>
      <title>Projects | Codetopia Labs</title>
      <h1>Projects</h1>
      {/* The key only earns its space when projects are at different stages. */}
      {new Set(projects.map((p) => p.status)).size > 1 && <StatusKey />}
      <WorkCards items={projects} detailed headingLevel={2} />
      <WorkWithUs />
    </>
  )
}
