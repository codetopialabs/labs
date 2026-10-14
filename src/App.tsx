import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { Blog } from './pages/Blog'
import { Careers } from './pages/Careers'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Post } from './pages/Post'
import { Projects } from './pages/Projects'
import './App.css'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects', element: <Projects /> },
      { path: '/blog', element: <Blog /> },
      { path: '/blog/:slug', element: <Post /> },
      { path: '/about', element: <About /> },
      { path: '/careers', element: <Careers /> },
      { path: '/contact', element: <Navigate to="/about" replace /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

// Pages in nav order, so a page transition can drift the right way.
const order = ['/', '/about', '/projects', '/blog', '/careers']

function rank(path: string) {
  const exact = order.indexOf(path)
  if (exact !== -1) return exact
  // A sub-page, like a post, sits just after its section.
  const section = order.findIndex((p) => p !== '/' && path.startsWith(`${p}/`))
  return section === -1 ? order.length : section + 0.5
}

// Runs before the router starts its view transition, so the CSS can read it.
let lastPath = router.state.location.pathname
router.subscribe((state) => {
  const path = state.location.pathname
  if (path === lastPath) return
  document.documentElement.dataset.nav = rank(path) < rank(lastPath) ? 'back' : 'forward'
  lastPath = path
})

export default function App() {
  return <RouterProvider router={router} />
}
