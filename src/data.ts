export const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/planes', label: 'Planes' },
  { to: '/horarios', label: 'Horarios' },
  { to: '/clases', label: 'Clases' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/nosotros#contacto', label: 'Contacto' },
] as const

export const plans = [
  {
    id: 'basico',
    name: 'Básico',
    price: '$25.000',
    popular: false,
    features: [
      'Acceso a sala de musculación',
      'Horario de 08:00 a 14:00',
      'Evaluación inicial',
      'Lockers',
    ],
  },
  {
    id: 'full',
    name: 'Full',
    price: '$35.000',
    popular: true,
    features: [
      'Acceso completo a la sala',
      'Clases grupales incluidas',
      'Evaluación mensual',
      'App de seguimiento',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$45.000',
    popular: false,
    features: [
      'Todo lo del plan Full',
      'Entrenador personal',
      'Plan nutricional',
      'Acceso preferencial',
    ],
  },
] as const

export const classFilters = [
  'Todos',
  'Funcional',
  'Spinning',
  'Cross Training',
  'HIIT',
  'Yoga',
  'Zumba',
] as const

export const classCards = [
  {
    id: 'spinning',
    name: 'Spinning',
    filter: 'Spinning',
    schedule: 'Lunes a Sábado | 19:00',
    capacity: 25,
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'funcional',
    name: 'Funcional',
    filter: 'Funcional',
    schedule: 'Lunes a Viernes | 18:00',
    capacity: 20,
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'cross',
    name: 'Cross Training',
    filter: 'Cross Training',
    schedule: 'Lunes a Sábado | 20:00',
    capacity: 18,
    image:
      'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'hiit',
    name: 'HIIT',
    filter: 'HIIT',
    schedule: 'Martes y Jueves | 19:00',
    capacity: 22,
    image:
      'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'yoga',
    name: 'Yoga',
    filter: 'Yoga',
    schedule: 'Lunes a Viernes | 09:00',
    capacity: 16,
    image:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'zumba',
    name: 'Zumba',
    filter: 'Zumba',
    schedule: 'Miércoles y Viernes | 19:00',
    capacity: 25,
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80',
  },
] as const

export const days = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo',
] as const

export const scheduleByDay: Record<
  (typeof days)[number],
  { time: string; name: string; place: string; status: 'Disponible' }[]
> = {
  Lunes: [
    { time: '08:00 - 10:00', name: 'Musculación', place: 'Sala principal', status: 'Disponible' },
    { time: '10:00 - 11:00', name: 'Yoga', place: 'Sala 2', status: 'Disponible' },
    { time: '18:00 - 19:00', name: 'Funcional', place: 'Sala principal', status: 'Disponible' },
    { time: '19:00 - 20:00', name: 'Spinning', place: 'Sala de spinning', status: 'Disponible' },
    { time: '20:00 - 21:00', name: 'Cross Training', place: 'Sala principal', status: 'Disponible' },
  ],
  Martes: [
    { time: '08:00 - 10:00', name: 'Musculación', place: 'Sala principal', status: 'Disponible' },
    { time: '18:00 - 19:00', name: 'HIIT', place: 'Sala principal', status: 'Disponible' },
    { time: '19:00 - 20:00', name: 'Zumba', place: 'Sala 2', status: 'Disponible' },
    { time: '20:00 - 21:00', name: 'Funcional', place: 'Sala principal', status: 'Disponible' },
  ],
  Miércoles: [
    { time: '08:00 - 10:00', name: 'Musculación', place: 'Sala principal', status: 'Disponible' },
    { time: '10:00 - 11:00', name: 'Yoga', place: 'Sala 2', status: 'Disponible' },
    { time: '19:00 - 20:00', name: 'Spinning', place: 'Sala de spinning', status: 'Disponible' },
    { time: '20:00 - 21:00', name: 'Cross Training', place: 'Sala principal', status: 'Disponible' },
  ],
  Jueves: [
    { time: '08:00 - 10:00', name: 'Musculación', place: 'Sala principal', status: 'Disponible' },
    { time: '18:00 - 19:00', name: 'HIIT', place: 'Sala principal', status: 'Disponible' },
    { time: '19:00 - 20:00', name: 'Funcional', place: 'Sala principal', status: 'Disponible' },
    { time: '20:00 - 21:00', name: 'Zumba', place: 'Sala 2', status: 'Disponible' },
  ],
  Viernes: [
    { time: '08:00 - 10:00', name: 'Musculación', place: 'Sala principal', status: 'Disponible' },
    { time: '10:00 - 11:00', name: 'Yoga', place: 'Sala 2', status: 'Disponible' },
    { time: '19:00 - 20:00', name: 'Spinning', place: 'Sala de spinning', status: 'Disponible' },
    { time: '20:00 - 21:00', name: 'Zumba', place: 'Sala 2', status: 'Disponible' },
  ],
  Sábado: [
    { time: '08:00 - 10:00', name: 'Musculación', place: 'Sala principal', status: 'Disponible' },
    { time: '10:00 - 11:00', name: 'Funcional', place: 'Sala principal', status: 'Disponible' },
    { time: '11:00 - 12:00', name: 'Spinning', place: 'Sala de spinning', status: 'Disponible' },
  ],
  Domingo: [
    { time: '09:00 - 12:00', name: 'Musculación', place: 'Sala principal', status: 'Disponible' },
    { time: '10:00 - 11:00', name: 'Yoga', place: 'Sala 2', status: 'Disponible' },
  ],
}

export const socios = [
  { name: 'Martín Álvarez', plan: 'Full', shift: 'Tarde', status: 'Activo' },
  { name: 'Lucía Fernández', plan: 'Premium', shift: 'Mañana', status: 'Activo' },
  { name: 'Diego Pérez', plan: 'Básico', shift: 'Noche', status: 'Inactivo' },
  { name: 'Camila Soto', plan: 'Full', shift: 'Tarde', status: 'Activo' },
  { name: 'Nicolás Romero', plan: 'Premium', shift: 'Mañana', status: 'Activo' },
  { name: 'Valentina Díaz', plan: 'Básico', shift: 'Tarde', status: 'Inactivo' },
] as const

export const pagos = [
  {
    member: 'Martín Álvarez',
    plan: 'Full',
    amount: '$35.000',
    method: 'Transferencia',
    date: '03/09/2026',
    status: 'Pagado',
  },
  {
    member: 'Lucía Fernández',
    plan: 'Premium',
    amount: '$45.000',
    method: 'Tarjeta',
    date: '02/09/2026',
    status: 'Pagado',
  },
  {
    member: 'Diego Pérez',
    plan: 'Básico',
    amount: '$25.000',
    method: 'Efectivo',
    date: '28/08/2026',
    status: 'Vencido',
  },
  {
    member: 'Camila Soto',
    plan: 'Full',
    amount: '$35.000',
    method: 'Tarjeta',
    date: '01/09/2026',
    status: 'Pendiente',
  },
  {
    member: 'Nicolás Romero',
    plan: 'Premium',
    amount: '$45.000',
    method: 'Transferencia',
    date: '04/09/2026',
    status: 'Pagado',
  },
] as const

export const inscripciones = [
  { name: 'Sofía Herrera', plan: 'Full', date: '08/09/2026', status: 'Confirmada' },
  { name: 'Julián Castro', plan: 'Básico', date: '07/09/2026', status: 'Pendiente' },
  { name: 'Martina López', plan: 'Premium', date: '06/09/2026', status: 'Confirmada' },
  { name: 'Franco Ruiz', plan: 'Full', date: '05/09/2026', status: 'Confirmada' },
] as const
