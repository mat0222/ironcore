const stats = [
  { value: '+8', label: 'Años de experiencia' },
  { value: '1.200', label: 'Socios activos' },
  { value: '10', label: 'Entrenadores' },
  { value: '+1.500 m²', label: 'Espacio de entreno' },
]

export function Nosotros() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="relative mx-auto max-w-6xl px-5 py-20">
          <h1 className="font-display text-5xl tracking-wide text-white uppercase">
            Sobre nosotros
          </h1>
          <p className="mt-3 max-w-xl text-white/75">
            Más que un gimnasio, somos una comunidad.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl tracking-wide text-white uppercase">
            Nuestra historia
          </h2>
          <p className="mt-5 text-white/70">
            IronCore nació como un espacio para entrenar en serio, con
            acompañamiento real y una comunidad que empuja.
          </p>
          <p className="mt-4 text-white/70">
            Más que un gimnasio, somos el lugar donde cada socio encuentra
            constancia, energía y un equipo que está para ayudarte.
          </p>
        </div>

        <form
          id="contacto"
          className="rounded-xl border border-line bg-card p-6"
          onSubmit={(event) => event.preventDefault()}
        >
          <h3 className="font-display text-2xl tracking-wide text-white">
            Envíanos un mensaje
          </h3>
          <div className="mt-5 space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full rounded-lg border border-line bg-ink px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-lime"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border border-line bg-ink px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-lime"
            />
            <textarea
              rows={4}
              placeholder="Mensaje"
              className="w-full resize-none rounded-lg border border-line bg-ink px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-lime"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-lime py-3 text-sm font-bold text-ink"
            >
              Enviar
            </button>
          </div>
        </form>
      </section>

      <section className="bg-lime">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl text-ink">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-ink/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="overflow-hidden rounded-xl border border-line">
          <iframe
            title="Ubicación IronCore Gym"
            src="https://maps.google.com/maps?q=Buenos%20Aires&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-80 w-full grayscale"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  )
}
