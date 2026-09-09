import { pagos } from '../../data'

export function Pagos() {
  return (
    <div>
      <h1 className="mb-6 font-display text-3xl tracking-wide text-white uppercase">Pagos</h1>
      <div className="overflow-x-auto rounded-xl border border-line bg-card">
        <table className="w-full text-left text-sm">
          <thead className="text-muted">
            <tr>
              <th className="px-5 py-4 font-medium">Socio</th>
              <th className="px-5 py-4 font-medium">Plan</th>
              <th className="px-5 py-4 font-medium">Monto</th>
              <th className="px-5 py-4 font-medium">Método</th>
              <th className="px-5 py-4 font-medium">Fecha</th>
              <th className="px-5 py-4 font-medium">Estado</th>
            </tr>
          </thead>
          <tbody>
            {pagos.map((row) => (
              <tr key={`${row.member}-${row.date}`} className="border-t border-white/5">
                <td className="px-5 py-4">{row.member}</td>
                <td className="px-5 py-4">{row.plan}</td>
                <td className="px-5 py-4">{row.amount}</td>
                <td className="px-5 py-4">{row.method}</td>
                <td className="px-5 py-4">{row.date}</td>
                <td className="px-5 py-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      row.status === 'Pagado'
                        ? 'bg-lime/15 text-lime'
                        : row.status === 'Vencido'
                          ? 'bg-red-500/15 text-red-400'
                          : 'bg-yellow-400/15 text-yellow-300'
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
