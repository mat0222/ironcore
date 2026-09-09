import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PlanCards } from '../components/PlanCards'
import { days, plans, scheduleByDay } from '../data'

const steps = ['Plan', 'Datos', 'Turno', 'Pago', 'Confirmación'] as const

export function Inscripcion() {
  const [params] = useSearchParams()
  const initialPlan = plans.some((plan) => plan.id === params.get('plan'))
    ? params.get('plan')!
    : 'full'

  const [step, setStep] = useState(0)
  const [planId, setPlanId] = useState(initialPlan)
  const [day, setDay] = useState<(typeof days)[number]>('Lunes')
  const [slot, setSlot] = useState('')
  const [payment, setPayment] = useState('Transferencia')
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    dni: '',
    nacimiento: '',
    telefono: '',
    email: '',
  })

  const plan = useMemo(() => plans.find((item) => item.id === planId), [planId])

  function next() {
    setStep((value) => Math.min(value + 1, steps.length - 1))
  }

  function back() {
    setStep((value) => Math.max(value - 1, 0))
  }

  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
        {steps.map((label, index) => (
          <div key={label} className="flex items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                index <= step ? 'bg-lime text-ink' : 'bg-card text-muted'
              }`}
            >
              {index + 1}
            </div>
            <span className={`text-xs sm:text-sm ${index <= step ? 'text-white' : 'text-muted'}`}>
              {label}
            </span>
            {index < steps.length - 1 && <span className="mx-2 hidden h-px w-8 bg-line sm:block" />}
          </div>
        ))}
      </div>

      {step === 0 && (
        <section>
          <h1 className="mb-8 text-center font-display text-4xl tracking-wide text-white uppercase">
            Elegí tu plan
          </h1>
          <PlanCards selectable selectedId={planId} onSelect={setPlanId} />
        </section>
      )}

      {step === 1 && (
        <section>
          <h1 className="font-display text-4xl tracking-wide text-white uppercase">
            Completá tus datos personales
          </h1>
          <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
            <Field
              label="Nombre"
              value={form.nombre}
              onChange={(value) => setForm({ ...form, nombre: value })}
            />
            <Field
              label="Apellido"
              value={form.apellido}
              onChange={(value) => setForm({ ...form, apellido: value })}
            />
            <Field
              label="DNI"
              value={form.dni}
              onChange={(value) => setForm({ ...form, dni: value })}
            />
            <Field
              label="Fecha de nacimiento"
              type="date"
              value={form.nacimiento}
              onChange={(value) => setForm({ ...form, nacimiento: value })}
            />
            <Field
              label="Teléfono"
              value={form.telefono}
              onChange={(value) => setForm({ ...form, telefono: value })}
            />
            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={(value) => setForm({ ...form, email: value })}
            />
          </form>
          <div className="mt-10">
            <PlanCards selectable selectedId={planId} onSelect={setPlanId} />
          </div>
        </section>
      )}

      {step === 2 && (
        <section>
          <h1 className="font-display text-4xl tracking-wide text-white uppercase">
            Elegí tu turno
          </h1>
          <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
            {days.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setDay(item)
                  setSlot('')
                }}
                className={`rounded-lg px-4 py-2 text-sm font-semibold whitespace-nowrap ${
                  day === item ? 'bg-lime text-ink' : 'border border-line bg-card text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="mt-6 space-y-3">
            {scheduleByDay[day].map((item) => {
              const id = `${day}-${item.time}-${item.name}`
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setSlot(id)}
                  className={`flex w-full items-center justify-between rounded-xl border px-5 py-4 text-left ${
                    slot === id ? 'border-lime bg-card' : 'border-line bg-card'
                  }`}
                >
                  <span>
                    <span className="block font-display text-white">{item.time}</span>
                    <span className="text-sm text-muted">
                      {item.name} · {item.place}
                    </span>
                  </span>
                  <span className="text-sm font-semibold text-lime">Disponible &gt;</span>
                </button>
              )
            })}
          </div>
        </section>
      )}

      {step === 3 && (
        <section>
          <h1 className="font-display text-4xl tracking-wide text-white uppercase">Pago</h1>
          <p className="mt-3 text-muted">
            Plan {plan?.name} · {plan?.price}
          </p>
          <div className="mt-8 grid gap-3">
            {['Transferencia', 'Tarjeta', 'Efectivo'].map((method) => (
              <button
                key={method}
                type="button"
                onClick={() => setPayment(method)}
                className={`rounded-xl border px-5 py-4 text-left ${
                  payment === method ? 'border-lime bg-card' : 'border-line bg-card'
                }`}
              >
                {method}
              </button>
            ))}
          </div>
        </section>
      )}

      {step === 4 && (
        <section className="rounded-xl border border-lime bg-card p-8 text-center">
          <h1 className="font-display text-4xl tracking-wide text-white uppercase">
            Confirmación
          </h1>
          <p className="mt-4 text-white/75">
            Tu inscripción quedó registrada. Plan {plan?.name}, turno {day}
            {slot ? ` · ${slot.split('-').slice(1).join(' ')}` : ''}.
          </p>
        </section>
      )}

      <div className="mt-10 flex justify-between">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white disabled:opacity-30"
        >
          Volver
        </button>
        {step < steps.length - 1 && (
          <button
            type="button"
            onClick={next}
            className="rounded-lg bg-lime px-6 py-3 text-sm font-bold text-ink"
          >
            Siguiente
          </button>
        )}
      </div>
    </main>
  )
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
}: {
  label: string
  value: string
  onChange: (value: string) => void
  type?: string
}) {
  return (
    <label className="block text-sm text-muted">
      {label}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-lg border border-line bg-card px-4 py-3 text-white outline-none focus:border-lime"
      />
    </label>
  )
}
