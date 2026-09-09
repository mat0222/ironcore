import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { WhatsAppButton } from './WhatsAppButton'

export function Layout() {
  const { pathname } = useLocation()
  const transparent = pathname === '/'

  return (
    <div className="min-h-screen bg-ink text-white">
      <Navbar transparent={transparent} />
      <Outlet />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
