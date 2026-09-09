import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../components/Logo'

export function Login() {
  const navigate = useNavigate()
  const [remember, setRemember] = useState(false)

  return (
    <main className="relative flex min-h-screen items-center justify-center px-5">
      <img
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=80"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" />

      <form
        className="relative w-full max-w-md rounded-2xl border border-line bg-panel p-8"
        onSubmit={(event) => {
          event.preventDefault()
          navigate('/admin')
        }}
      >
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        <label className="block text-sm text-muted">
          Email
          <input
            type="email"
            defaultValue="admin@ironcore.gym"
            className="mt-2 w-full rounded-lg border border-line bg-card px-4 py-3 text-white outline-none focus:border-lime"
          />
        </label>
        <label className="mt-4 block text-sm text-muted">
          Contraseña
          <input
            type="password"
            defaultValue="admin"
            className="mt-2 w-full rounded-lg border border-line bg-card px-4 py-3 text-white outline-none focus:border-lime"
          />
        </label>
        <div className="mt-4 flex items-center justify-between text-xs text-muted">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={remember}
              onChange={(event) => setRemember(event.target.checked)}
              className="accent-lime"
            />
            Recordarme
          </label>
          <button type="button" className="hover:text-lime">
            ¿Olvidaste tu contraseña?
          </button>
        </div>
        <button
          type="submit"
          className="mt-6 w-full rounded-lg bg-lime py-3 text-sm font-bold text-ink"
        >
          Ingresar
        </button>
      </form>
    </main>
  )
}
