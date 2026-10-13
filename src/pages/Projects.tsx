import { ProjectList, StatusKey } from '../components/ProjectList'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <>
      <title>Projects | Codetopia Labs</title>
      <h1>Projects</h1>
      <p className="page-intro">Things we've built or are working on, and where each one stands.</p>
      {/* The key only earns its space once there are a few projects to compare. */}
      {projects.length >= 3 && <StatusKey />}
      <ProjectList items={projects} />
    </>
  )
}
