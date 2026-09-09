import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { plans } from '../data'

type PlanCardsProps = {
  selectable?: boolean
  selectedId?: string
  onSelect?: (id: string) => void
}

export function PlanCards({ selectable = false, selectedId, onSelect }: PlanCardsProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {plans.map((plan) => {
        const selected = selectable && selectedId === plan.id
        const highlighted = plan.popular || selected

        return (
          <article
            key={plan.id}
            className={`relative rounded-xl border bg-card p-6 ${
              highlighted ? 'border-lime' : 'border-line'
            } ${selectable ? 'cursor-pointer' : ''}`}
            onClick={() => onSelect?.(plan.id)}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime px-3 py-1 text-[10px] font-bold tracking-wider text-ink">
                MÁS POPULAR
              </span>
            )}
            <h3 className="font-display text-2xl tracking-wide text-white">{plan.name}</h3>
            <p className="mt-3 font-display text-4xl text-white">
              {plan.price}
              <span className="ml-1 text-sm font-sans font-normal text-muted">/mes</span>
            </p>
            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-white/80">
                  <Check size={16} className="mt-0.5 shrink-0 text-lime" />
                  {feature}
                </li>
              ))}
            </ul>
            {!selectable && (
              <Link
                to={`/inscripcion?plan=${plan.id}`}
                className={`mt-8 flex w-full items-center justify-center rounded-lg py-3 text-sm font-bold ${
                  plan.popular ? 'bg-lime text-ink' : 'border border-lime text-lime'
                }`}
              >
                Elegir plan
              </Link>
            )}
          </article>
        )
      })}
    </div>
  )
}
