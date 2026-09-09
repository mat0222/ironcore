import { Pencil, Trash2 } from 'lucide-react'
import { socios } from '../../data'

export function Socios() {
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="font-display text-3xl tracking-wide text-white uppercase">Socios</h1>
        <button type="button" className="rounded-lg bg-lime px-4 py-2 text-sm font-bold text-ink">
          Nuevo socio
        </button>
      </div>

      <div className="mb-4 flex flex-wrap gap-3">
        <select className="rounded-lg border border-line bg-card px-3 py-2 text-sm">
          <option>Estado</option>
          <option>Activo</option>
          <option>Inactivo</option>
        </select>
        <select className="rounded-lg border border-line bg-card px-3 py-2 text-sm">
          <option>Plan</option>
          <option>Básico</option>
          <option>Full</option>
          <option>Premium</option>
        </select>
        <select className="rounded-lg border border-line bg-card px-3 py-2 text-sm">
          <option>Turno</option>
          <option>Mañana</option>
          <option>Tarde</option>
          <option>Noche</option>
        </select>
      </div>

      <div className="overflow-x-auto rounded-xl border border-line bg-card">
        <table className="w-full text-left text-sm">
          <thead className="text-muted">
            <tr>
              <th className="px-5 py-4 font-medium">Nombre</th>
              <th className="px-5 py-4 font-medium">Plan</th>
              <th className="px-5 py-4 font-medium">Turno</th>
              <th className="px-5 py-4 font-medium">Estado</th>
              <th className="px-5 py-4 font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {socios.map((row) => (
              <tr key={row.name} className="border-t border-white/5">
                <td className="px-5 py-4">{row.name}</td>
                <td className="px-5 py-4">{row.plan}</td>
                <td className="px-5 py-4">{row.shift}</td>
                <td className="px-5 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      row.status === 'Activo'
                        ? 'bg-lime/15 text-lime'
                        : 'bg-red-500/15 text-red-400'
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex gap-2 text-muted">
                    <Pencil size={16} />
                    <Trash2 size={16} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
