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

export default function App() {
  return <RouterProvider router={router} />
}
