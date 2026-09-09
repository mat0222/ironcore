import { Bike, Dumbbell, Flame, Music2, Sparkles, Trophy } from 'lucide-react'
import { useState } from 'react'
import { days, scheduleByDay } from '../data'

const icons: Record<string, typeof Dumbbell> = {
  Musculación: Dumbbell,
  Yoga: Sparkles,
  Funcional: Dumbbell,
  Spinning: Bike,
  'Cross Training': Trophy,
  HIIT: Flame,
  Zumba: Music2,
}

export function Horarios() {
  const [day, setDay] = useState<(typeof days)[number]>('Lunes')
  const slots = scheduleByDay[day]

  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <h1 className="font-display text-5xl tracking-wide text-white uppercase">Horarios</h1>
      <p className="mt-3 text-muted">Organizá tu entrenamiento.</p>

      <div className="mt-10 flex gap-2 overflow-x-auto pb-2">
        {days.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setDay(item)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold whitespace-nowrap ${
              day === item ? 'bg-lime text-ink' : 'border border-line bg-card text-white'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-3">
        {slots.map((slot) => {
          const Icon = icons[slot.name] ?? Dumbbell
          return (
            <div
              key={`${slot.time}-${slot.name}`}
              className="flex flex-col gap-3 rounded-xl border border-line bg-card px-5 py-4 sm:flex-row sm:items-center"
            >
              <p className="w-40 font-display text-lg tracking-wide text-white">{slot.time}</p>
              <div className="flex flex-1 items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-lime/40 text-lime">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="font-medium text-white">{slot.name}</p>
                  <p className="text-sm text-muted">{slot.place}</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-lime">Disponible &gt;</span>
            </div>
          )
        })}
      </div>
    </main>
  )
}
