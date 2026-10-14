import { StatusKey, WorkCards } from '../components/WorkCards'
import { ViewToggle } from '../components/ViewToggle'
import { useView } from '../components/useView'
import { WorkWithUs } from '../components/WorkWithUs'
import { projects } from '../data/projects'

export function Projects() {
  // The key only earns its space when projects are at different stages.
  const statuses = new Set(projects.map((p) => p.status))
  const withKey = statuses.size > 1
  const [view, setView] = useView()
  return (
    <>
      <title>Projects | Codetopia Labs</title>
      <div className="page-head">
        <h1>Projects</h1>
        <ViewToggle view={view} onChange={setView} />
      </div>
      <div className="work-with-key">
        <WorkCards
          items={projects}
          detailed
          headingLevel={2}
          withKey={withKey}
          list={view === 'list'}
        />
        {withKey && <StatusKey statuses={statuses} />}
      </div>
      <WorkWithUs />
    </>
  )
}
