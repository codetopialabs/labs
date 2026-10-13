import { ProjectList, StatusKey } from '../components/ProjectList'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <>
      <title>Projects | Codetopia Labs</title>
      <h1>Projects</h1>
      <StatusKey />
      <ProjectList items={projects} />
    </>
  )
}
