import {
  BarChart3,
  Bell,
  ClipboardCheck,
  Clock,
  CreditCard,
  Dumbbell,
  GraduationCap,
  LayoutDashboard,
  Search,
  Settings,
  UserPlus,
  Users,
} from 'lucide-react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Logo } from '../Logo'

const menu = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/admin/socios', label: 'Socios', icon: Users, end: false },
  { to: '/admin/inscripciones', label: 'Inscripciones', icon: UserPlus, end: false },
  { to: '/admin/turnos', label: 'Turnos', icon: Clock, end: false },
  { to: '/admin/asistencias', label: 'Asistencias', icon: ClipboardCheck, end: false },
  { to: '/admin/pagos', label: 'Pagos', icon: CreditCard, end: false },
  { to: '/admin/clases', label: 'Clases', icon: Dumbbell, end: false },
  { to: '/admin/profesores', label: 'Profesores', icon: GraduationCap, end: false },
  { to: '/admin/reportes', label: 'Reportes', icon: BarChart3, end: false },
  { to: '/admin/notificaciones', label: 'Notificaciones', icon: Bell, end: false },
  { to: '/admin/configuracion', label: 'Configuración', icon: Settings, end: false },
]

export function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-ink text-white">
      <aside className="hidden w-64 shrink-0 border-r border-white/5 bg-panel lg:block">
        <div className="px-5 py-6">
          <Link to="/">
            <Logo compact />
          </Link>
        </div>
        <nav className="flex flex-col gap-1 px-3">
          {menu.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${
                  isActive ? 'bg-lime/15 text-lime' : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-white/5 bg-panel px-5 py-4">
          <div className="flex w-full max-w-md items-center gap-2 rounded-lg border border-line bg-card px-3 py-2">
            <Search size={16} className="text-muted" />
            <input
              type="search"
              placeholder="Buscar"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-muted"
            />
          </div>
          <div className="ml-4 flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium">Admin</p>
              <p className="text-xs text-muted">IronCore Gym</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime font-bold text-ink">
              IC
            </div>
          </div>
        </header>

        <div className="flex gap-2 overflow-x-auto border-b border-white/5 px-4 py-3 lg:hidden">
          {menu.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `rounded-lg px-3 py-1.5 text-xs whitespace-nowrap ${
                  isActive ? 'bg-lime text-ink' : 'bg-card text-white/70'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="flex-1 p-5 lg:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
