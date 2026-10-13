import { Link, NavLink, Outlet, ScrollRestoration } from 'react-router'
import { email } from '../data/projects'
import { LabsLogo } from './LabsLogo'

function Header() {
  return (
    <header className="header">
      <nav className="nav" aria-label="Primary navigation">
        <Link to="/" className="logo" aria-label="Codetopia Labs home" viewTransition>
          <LabsLogo height={30} />
        </Link>
        <div className="nav-links">
          <NavLink to="/about" viewTransition>
            /about
          </NavLink>
          <NavLink to="/projects" viewTransition>
            /projects
          </NavLink>
          <NavLink to="/blog" viewTransition>
            /blog
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <a href={`mailto:${email}`}>{email}</a>
      <span>
        A{' '}
        <a href="https://codetopia.org" target="_blank" rel="noopener noreferrer">
          Codetopia
        </a>{' '}
        initiative
      </span>
    </footer>
  )
}

export function Layout() {
  return (
    <>
      <Header />
      <main className="page">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  )
}
