import { Heart, Target, Users, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PlanCards } from '../components/PlanCards'

const benefits = [
  { icon: Heart, title: 'Salud', text: 'Mejorá tu condición física y tu bienestar.' },
  { icon: Zap, title: 'Energía', text: 'Entrená y sentí el impulso en tu día a día.' },
  { icon: Target, title: 'Objetivos', text: 'Un plan claro para llegar a tu mejor versión.' },
  { icon: Users, title: 'Comunidad', text: 'Entrená acompañado y mantené la constancia.' },
]

export function Planes() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 py-16">
        <h1 className="font-display text-5xl tracking-wide text-white uppercase">
          Nuestros planes
        </h1>
        <p className="mt-3 text-muted">
          Elegí el plan que mejor se adapte a tus objetivos.
        </p>
        <div className="mt-12">
          <PlanCards />
        </div>
      </section>

      <section className="bg-panel">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-center">
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-lime/40 text-lime">
                <Icon size={24} />
              </span>
              <h3 className="font-display text-xl tracking-wide text-white">{title}</h3>
              <p className="mt-2 text-sm text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-4 px-5 py-16">
          <h2 className="font-display text-4xl tracking-wide text-white uppercase">
            ¿Tenés dudas?
          </h2>
          <p className="max-w-md text-white/70">Nuestro equipo está para ayudarte.</p>
          <Link
            to="/nosotros#contacto"
            className="w-fit rounded-lg bg-lime px-5 py-2.5 text-sm font-bold text-ink"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </main>
  )
}
