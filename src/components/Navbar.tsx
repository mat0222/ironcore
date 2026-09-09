import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data'
import { Logo } from './Logo'

type NavbarProps = {
  transparent?: boolean
}

export function Navbar({ transparent = false }: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <header
      className={`z-40 ${
        transparent
          ? 'absolute top-0 right-0 left-0 bg-transparent'
          : 'sticky top-0 border-b border-white/5 bg-ink/95 backdrop-blur'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <Link to="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive && link.to !== '/nosotros#contacto'
                    ? 'text-lime'
                    : 'text-white/80 hover:text-lime'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden rounded-lg border border-white/25 px-5 py-2.5 text-sm font-bold text-white transition hover:border-lime hover:text-lime sm:inline-flex"
          >
            Ingresar
          </Link>
          <Link
            to="/inscripcion"
            className="hidden rounded-lg bg-lime px-5 py-2.5 text-sm font-bold text-ink transition hover:bg-lime-dim sm:inline-flex"
          >
            Inscribirse
          </Link>
          <button
            type="button"
            className="rounded-lg border border-white/15 p-2 text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-sm text-white/85"
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg border border-white/25 px-5 py-2.5 text-center text-sm font-bold text-white"
            >
              Ingresar
            </Link>
            <Link
              to="/inscripcion"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-lime px-5 py-2.5 text-center text-sm font-bold text-ink"
            >
              Inscribirse
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
