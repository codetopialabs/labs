import { ProjectList, StatusKey } from '../components/ProjectList'
import { WorkWithUs } from '../components/WorkWithUs'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <>
      <title>Projects | Codetopia Labs</title>
      <h1>Projects</h1>
      <p className="page-intro">Things we've built or are working on, and where each one stands.</p>
      {/* The key only earns its space when projects are at different stages. */}
      {new Set(projects.map((p) => p.status)).size > 1 && <StatusKey />}
      <ProjectList items={projects} />
      <WorkWithUs />
    </>
  )
}
