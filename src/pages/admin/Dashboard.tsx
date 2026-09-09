import { CreditCard, DollarSign, UserCheck, Users } from 'lucide-react'
import { inscripciones } from '../../data'

const cards = [
  { label: 'Socios activos', value: '842', icon: Users },
  { label: 'Ingresos del mes', value: '$8.450.000', icon: DollarSign },
  { label: 'Asistencias hoy', value: '187', icon: UserCheck },
  { label: 'Pagos pendientes', value: '43', icon: CreditCard },
]

const income = [62, 70, 55, 78, 84, 90, 75, 88, 93, 80, 96, 100]
const months = ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
const members = [12, 18, 16, 22, 28, 24, 30, 34, 32, 38, 36, 42]
const occupancy = [
  { label: 'Mañana', value: 72 },
  { label: 'Tarde', value: 91 },
  { label: 'Noche', value: 64 },
]

export function Dashboard() {
  return (
    <div>
      <h1 className="font-display text-3xl tracking-wide text-white uppercase">Dashboard</h1>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map(({ label, value, icon: Icon }) => (
          <article key={label} className="rounded-xl border border-line bg-card p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted">{label}</p>
              <Icon size={18} className="text-lime" />
            </div>
            <p className="mt-3 font-display text-3xl text-white">{value}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-3">
        <article className="rounded-xl border border-line bg-card p-5 xl:col-span-1">
          <h2 className="mb-4 text-sm font-semibold text-white">Ingresos mensuales</h2>
          <div className="flex h-40 items-end gap-1.5">
            {income.map((value, index) => (
              <div key={months[index]} className="flex flex-1 flex-col items-center gap-2">
                <div className="w-full rounded-t bg-lime" style={{ height: `${value}%` }} />
                <span className="text-[10px] text-muted">{months[index]}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-xl border border-line bg-card p-5">
          <h2 className="mb-4 text-sm font-semibold text-white">Nuevos socios</h2>
          <svg viewBox="0 0 240 120" className="h-40 w-full">
            <polyline
              fill="none"
              stroke="#C8FF00"
              strokeWidth="3"
              points={members
                .map((value, index) => `${index * 20 + 10},${110 - value * 2}`)
                .join(' ')}
            />
          </svg>
        </article>

        <article className="rounded-xl border border-line bg-card p-5">
          <h2 className="mb-4 text-sm font-semibold text-white">Ocupación por turnos</h2>
          <div className="space-y-4">
            {occupancy.map((item) => (
              <div key={item.label}>
                <div className="mb-1 flex justify-between text-sm">
                  <span>{item.label}</span>
                  <span className="text-lime">{item.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-ink">
                  <div className="h-2 rounded-full bg-lime" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>

      <article className="mt-6 rounded-xl border border-line bg-card p-5">
        <h2 className="mb-4 text-sm font-semibold text-white">Últimas inscripciones</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-muted">
              <tr>
                <th className="pb-3 font-medium">Socio</th>
                <th className="pb-3 font-medium">Plan</th>
                <th className="pb-3 font-medium">Fecha</th>
                <th className="pb-3 font-medium">Estado</th>
              </tr>
            </thead>
            <tbody>
              {inscripciones.map((row) => (
                <tr key={row.name} className="border-t border-white/5">
                  <td className="py-3">{row.name}</td>
                  <td>{row.plan}</td>
                  <td>{row.date}</td>
                  <td>
                    <StatusPill status={row.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  )
}

function StatusPill({ status }: { status: string }) {
  const tone =
    status === 'Confirmada' || status === 'Activo' || status === 'Pagado'
      ? 'bg-lime/15 text-lime'
      : status === 'Vencido' || status === 'Inactivo'
        ? 'bg-red-500/15 text-red-400'
        : 'bg-yellow-400/15 text-yellow-300'

  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tone}`}>{status}</span>
}
