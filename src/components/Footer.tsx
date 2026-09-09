import { Link } from 'react-router-dom'
import { navLinks } from '../data'
import { Logo } from './Logo'

function SocialIcon({
  label,
  path,
}: {
  label: string
  path: string
}) {
  return (
    <a
      href="#"
      className="rounded-full border border-white/15 p-2 text-white/80 hover:text-lime"
      aria-label={label}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d={path} />
      </svg>
    </a>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <Logo />
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} className="hover:text-lime">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <SocialIcon
            label="Facebook"
            path="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v8h4v-8h3l1-4h-4V9c0-.6.4-1 1-1Z"
          />
          <SocialIcon
            label="Instagram"
            path="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2ZM17.2 7.1a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z"
          />
          <SocialIcon
            label="Twitter"
            path="M19.6 7.2c.6-.4 1.1-1 1.4-1.6-.6.3-1.2.5-1.9.6A3.1 3.1 0 0 0 12 8.8a8.8 8.8 0 0 1-7.2-3.6 3.1 3.1 0 0 0 1 4.1 3 3 0 0 1-1.4-.4v.1a3.1 3.1 0 0 0 2.5 3 3 3 0 0 1-1.4 0 3.1 3.1 0 0 0 2.9 2.2A6.2 6.2 0 0 1 4 16.4 8.8 8.8 0 0 0 8.8 18c5.8 0 9-4.8 9-9v-.4Z"
          />
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-white/40">
        © 2026 IronCore Gym. Todos los derechos reservados.
      </div>
    </footer>
  )
}
