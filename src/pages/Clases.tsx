import { useState } from 'react'
import { Link } from 'react-router-dom'
import { classCards, classFilters } from '../data'

export function Clases() {
  const [filter, setFilter] = useState<(typeof classFilters)[number]>('Todos')
  const visible =
    filter === 'Todos' ? classCards : classCards.filter((item) => item.filter === filter)

  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="font-display text-5xl tracking-wide text-white uppercase">Clases</h1>
      <p className="mt-3 text-muted">Entrenamiento en grupo, más motivación.</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {classFilters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`rounded-full px-4 py-2 text-sm font-semibold ${
              filter === item ? 'bg-lime text-ink' : 'border border-line bg-card text-white'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <article key={item.id} className="overflow-hidden rounded-xl border border-line bg-card">
            <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h2 className="font-display text-2xl tracking-wide text-white">{item.name}</h2>
              <p className="mt-2 text-sm text-muted">{item.schedule}</p>
              <p className="mt-1 text-sm text-muted">Capacidad: {item.capacity}</p>
              <Link
                to="/inscripcion"
                className="mt-5 inline-flex rounded-lg bg-lime px-4 py-2 text-sm font-bold text-ink"
              >
                Reservar
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
