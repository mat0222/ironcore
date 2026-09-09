import { useState } from 'react'

const colors = ['#C8FF00', '#ffffff', '#3b82f6', '#f97316']

export function Configuracion() {
  const [color, setColor] = useState('#C8FF00')

  return (
    <div className="max-w-3xl">
      <h1 className="mb-6 font-display text-3xl tracking-wide text-white uppercase">
        Configuración
      </h1>

      <form className="space-y-6 rounded-xl border border-line bg-card p-6" onSubmit={(e) => e.preventDefault()}>
        <h2 className="text-sm font-semibold text-white">Información del gimnasio</h2>
        <label className="block text-sm text-muted">
          Nombre
          <input
            defaultValue="IronCore Gym"
            className="mt-2 w-full rounded-lg border border-line bg-ink px-4 py-3 text-white outline-none focus:border-lime"
          />
        </label>
        <label className="block text-sm text-muted">
          Dirección
          <input
            defaultValue="Av. Corrientes 1234, CABA"
            className="mt-2 w-full rounded-lg border border-line bg-ink px-4 py-3 text-white outline-none focus:border-lime"
          />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm text-muted">
            Teléfono
            <input
              defaultValue="11 0000-0000"
              className="mt-2 w-full rounded-lg border border-line bg-ink px-4 py-3 text-white outline-none focus:border-lime"
            />
          </label>
          <label className="block text-sm text-muted">
            Email
            <input
              defaultValue="hola@ironcore.gym"
              className="mt-2 w-full rounded-lg border border-line bg-ink px-4 py-3 text-white outline-none focus:border-lime"
            />
          </label>
        </div>

        <label className="block text-sm text-muted">
          Logo
          <input type="file" className="mt-2 block w-full text-sm text-white" />
        </label>

        <div>
          <p className="text-sm text-muted">Colores del sistema</p>
          <div className="mt-3 flex gap-3">
            {colors.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setColor(item)}
                className={`h-10 w-10 rounded-full border-2 ${
                  color === item ? 'border-white' : 'border-transparent'
                }`}
                style={{ background: item }}
                aria-label={item}
              />
            ))}
          </div>
        </div>

        <button type="submit" className="rounded-lg bg-lime px-5 py-2.5 text-sm font-bold text-ink">
          Guardar
        </button>
      </form>
    </div>
  )
}
