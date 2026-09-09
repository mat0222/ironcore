import { classCards, days, inscripciones, scheduleByDay } from '../../data'

export function InscripcionesAdmin() {
  return (
    <AdminTable
      title="Inscripciones"
      headers={['Socio', 'Plan', 'Fecha', 'Estado']}
      rows={inscripciones.map((row) => [row.name, row.plan, row.date, row.status])}
    />
  )
}

export function TurnosAdmin() {
  const rows = days.flatMap((day) =>
    scheduleByDay[day].map((slot) => [day, slot.time, slot.name, slot.place, slot.status]),
  )
  return (
    <AdminTable
      title="Turnos"
      headers={['Día', 'Horario', 'Clase', 'Sala', 'Estado']}
      rows={rows}
    />
  )
}

export function AsistenciasAdmin() {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-display text-3xl tracking-wide text-white uppercase">Asistencias</h1>
        <button type="button" className="rounded-lg bg-lime px-4 py-2 text-sm font-bold text-ink">
          Registrar asistencia
        </button>
      </div>
      <AdminTable
        title=""
        headers={['Socio', 'Clase', 'Fecha', 'Estado']}
        rows={[
          ['Martín Álvarez', 'Musculación', '09/09/2026', 'Presente'],
          ['Lucía Fernández', 'Yoga', '09/09/2026', 'Presente'],
          ['Diego Pérez', 'HIIT', '09/09/2026', 'Ausente'],
          ['Camila Soto', 'Spinning', '09/09/2026', 'Presente'],
        ]}
      />
    </div>
  )
}

export function ClasesAdmin() {
  return (
    <AdminTable
      title="Clases"
      headers={['Clase', 'Horario', 'Capacidad']}
      rows={classCards.map((item) => [item.name, item.schedule, String(item.capacity)])}
    />
  )
}

export function ProfesoresAdmin() {
  return (
    <AdminTable
      title="Profesores"
      headers={['Nombre', 'Especialidad', 'Estado']}
      rows={[
        ['Ana Gómez', 'Yoga', 'Activo'],
        ['Pedro Ruiz', 'Spinning', 'Activo'],
        ['Laura Méndez', 'Funcional', 'Activo'],
        ['Tomás Vega', 'Cross Training', 'Activo'],
      ]}
    />
  )
}

export function ReportesAdmin() {
  return (
    <div>
      <h1 className="mb-6 font-display text-3xl tracking-wide text-white uppercase">Reportes</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['Ingresos del mes', '$8.450.000'],
          ['Nuevos socios', '38'],
          ['Asistencias del mes', '4.120'],
        ].map(([label, value]) => (
          <article key={label} className="rounded-xl border border-line bg-card p-5">
            <p className="text-sm text-muted">{label}</p>
            <p className="mt-2 font-display text-3xl text-white">{value}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export function NotificacionesAdmin() {
  return (
    <AdminTable
      title="Notificaciones"
      headers={['Mensaje', 'Fecha', 'Estado']}
      rows={[
        ['Pago pendiente — Camila Soto', '08/09/2026', 'Pendiente'],
        ['Nueva inscripción — Sofía Herrera', '08/09/2026', 'Enviada'],
        ['Turno completo — Spinning 19:00', '07/09/2026', 'Enviada'],
      ]}
    />
  )
}

function AdminTable({
  title,
  headers,
  rows,
}: {
  title: string
  headers: string[]
  rows: string[][]
}) {
  return (
    <div>
      {title && (
        <h1 className="mb-6 font-display text-3xl tracking-wide text-white uppercase">{title}</h1>
      )}
      <div className="overflow-x-auto rounded-xl border border-line bg-card">
        <table className="w-full text-left text-sm">
          <thead className="text-muted">
            <tr>
              {headers.map((header) => (
                <th key={header} className="px-5 py-4 font-medium">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.join('-')} className="border-t border-white/5">
                {row.map((cell) => (
                  <td key={cell} className="px-5 py-4">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
