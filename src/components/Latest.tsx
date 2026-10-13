import { Link } from 'react-router'
import { posts } from '../data/posts'
import { projects, type Project } from '../data/projects'
import { FlaskMark } from './FlaskMark'
import { PostMark } from './PostMark'
import { StatusIcon } from './StatusIcon'

// The newest thing on the site, post or project, announced under the
// statement on the home page. On the same day a post wins. Nothing is
// announced once the newest item is more than FRESH_DAYS old, so "New"
// never goes stale.
const FRESH_DAYS = 60
const loadedAt = Date.now()

function isFresh(date: string) {
  return loadedAt - Date.parse(`${date}T00:00:00Z`) <= FRESH_DAYS * 24 * 60 * 60 * 1000
}

export function Latest() {
  const post = posts[0]
  const project = [...projects].sort((a, b) => b.added.localeCompare(a.added))[0]
  const showProject = project && (!post || project.added > post.date)

  if (showProject) {
    if (!isFresh(project.added)) return null
    const label = (
      <>
        <span className="latest-tag">
          <ProjectMark project={project} />
          New project
        </span>
        {project.name}
      </>
    )
    return (
      <Link to={`/projects/${project.slug}`} className="latest" viewTransition>
        {label}
      </Link>
    )
  }

  if (!post || !isFresh(post.date)) return null
  return (
    <Link to={`/blog/${post.slug}`} className="latest" viewTransition>
      <span className="latest-tag">
        <PostMark />
        New post
      </span>
      {post.title}
    </Link>
  )
}

function ProjectMark({ project }: { project: Project }) {
  if (project.status === 'experiment') return <FlaskMark />
  return (
    <span className={`latest-status latest-status-${project.status}`}>
      <StatusIcon status={project.status} />
    </span>
  )
}
