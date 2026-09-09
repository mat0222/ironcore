import {
  Bike,
  Dumbbell,
  Flame,
  HeartPulse,
  Music2,
  Sparkles,
  Trophy,
  Users,
  Wrench,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { PlanCards } from '../components/PlanCards'

const features = [
  { icon: Users, label: 'Entrenadores profesionales' },
  { icon: Wrench, label: 'Equipamiento de última generación' },
  { icon: Flame, label: 'Ambiente motivador' },
  { icon: HeartPulse, label: 'Seguimiento personalizado' },
]

const classes = [
  { icon: Bike, name: 'Spinning' },
  { icon: Dumbbell, name: 'Funcional' },
  { icon: Trophy, name: 'Cross Training' },
  { icon: Flame, name: 'HIIT' },
  { icon: Sparkles, name: 'Yoga' },
  { icon: Music2, name: 'Zumba' },
]

export function Home() {
  return (
    <main>
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

        <div className="relative mx-auto w-full max-w-6xl px-5 pt-24 pb-20">
          <h1 className="max-w-3xl font-display text-5xl leading-[0.95] font-bold tracking-wide text-white uppercase sm:text-6xl lg:text-7xl">
            Tu mejor versión empieza acá
          </h1>
          <p className="mt-5 text-lg text-white/75">
            Entrená. Superate. Alcanzá tus objetivos.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/inscripcion"
              className="rounded-lg bg-lime px-6 py-3 text-sm font-bold tracking-wide text-ink uppercase"
            >
              Inscribirme ahora
            </Link>
            <Link
              to="/planes"
              className="rounded-lg border border-white px-6 py-3 text-sm font-bold tracking-wide text-white uppercase"
            >
              Ver planes
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-panel">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-lime/40 text-lime">
                <Icon size={20} />
              </span>
              <p className="text-sm font-medium text-white">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-10 text-center">
          <h2 className="font-display text-4xl tracking-wide text-white uppercase">
            Nuestros planes
          </h2>
          <p className="mt-2 text-muted">
            Elegí el plan que mejor se adapte a tus objetivos.
          </p>
        </div>
        <PlanCards />
      </section>

      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1800&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-4 px-5 py-16">
          <h2 className="font-display text-4xl tracking-wide text-white uppercase">
            Horarios de entrenamiento
          </h2>
          <p className="max-w-lg text-white/70">
            Encontrá el horario que más te convenga.
          </p>
          <Link
            to="/horarios"
            className="rounded-lg bg-lime px-5 py-2.5 text-sm font-bold text-ink"
          >
            Ver horarios
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="mb-12 text-center font-display text-4xl tracking-wide text-white uppercase">
          Nuestras clases
        </h2>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {classes.map(({ icon: Icon, name }) => (
            <Link
              key={name}
              to="/clases"
              className="flex flex-col items-center gap-3 text-center"
            >
              <span className="flex h-24 w-24 items-center justify-center rounded-full border border-lime bg-card text-lime">
                <Icon size={34} />
              </span>
              <span className="text-sm font-medium text-white">{name}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
