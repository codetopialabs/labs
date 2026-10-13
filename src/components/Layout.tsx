import { Link, NavLink, Outlet, ScrollRestoration } from 'react-router'
import { posts } from '../data/posts'
import { socials } from '../data/socials'
import { LabsLogo } from './LabsLogo'
import { socialMarks } from './socialMarks'

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
          {posts.length > 0 && (
            <NavLink to="/blog" viewTransition>
              /blog
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  )
}

function SocialLinks() {
  return (
    <>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${social.name} (opens in new tab)`}
          title={social.name}
        >
          <svg className="social-mark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d={socialMarks[social.name]} fillRule="evenodd" />
          </svg>
        </a>
      ))}
    </>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <span>
          A{' '}
          <a href="https://codetopia.org" target="_blank" rel="noopener noreferrer">
            Codetopia<span className="sr-only"> (opens in new tab)</span>
          </a>{' '}
          initiative
        </span>
      </div>
      <div className="footer-links">
        <SocialLinks />
      </div>
    </footer>
  )
}

export function Layout() {
  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <Header />
      <main className="page" id="content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      {/* On wide screens the socials sit in the left margin, outside the page. */}
      <nav className="social-rail" aria-label="Social links">
        <SocialLinks />
      </nav>
      <ScrollRestoration />
    </>
  )
}
