# IronCore Gym

Sitio web y panel de administración de **IronCore Gym**, un gimnasio pensado para inscripciones, consulta de planes, horarios y clases, y gestión interna de socios.

Identidad visual oscura, tipografía deportiva y acento lima (`#C8FF00`).

## Stack

| Tecnología | Uso |
| --- | --- |
| React 19 + TypeScript | Interfaz y tipado |
| Vite 7 | Bundler y servidor de desarrollo |
| Tailwind CSS 4 | Estilos |
| React Router 7 | Navegación |
| Lucide | Iconografía |

## Requisitos

- Node.js 20 o superior
- npm

## Puesta en marcha

```bash
npm install
npm run dev
```

La aplicación queda disponible en `http://localhost:5173`.

```bash
npm run build    # compilación de producción
npm run preview  # vista previa del build
npm run lint     # ESLint
```

## Sitio público

| Ruta | Sección |
| --- | --- |
| `/` | Inicio: hero, beneficios, planes, horarios y clases |
| `/planes` | Planes Básico, Full y Premium |
| `/horarios` | Grilla semanal de turnos |
| `/clases` | Catálogo de clases grupales |
| `/nosotros` | Historia, contacto y ubicación |
| `/inscripcion` | Alta de socio en 5 pasos |

El botón **Ingresar** del navbar abre el acceso al panel.

## Panel de administración

| Ruta | Módulo |
| --- | --- |
| `/login` | Acceso al panel |
| `/admin` | Dashboard de socios, ingresos, asistencias y pagos |
| `/admin/socios` | Listado de socios |
| `/admin/inscripciones` | Inscripciones |
| `/admin/turnos` | Turnos |
| `/admin/asistencias` | Registro de asistencias |
| `/admin/pagos` | Historial de pagos |
| `/admin/clases` | Clases |
| `/admin/profesores` | Profesores |
| `/admin/reportes` | Indicadores |
| `/admin/notificaciones` | Notificaciones |
| `/admin/configuracion` | Datos del gimnasio y tema |

## Estructura

```
src/
  components/        Layout público, navbar, footer y shell del admin
  pages/             Inicio, planes, horarios, clases, nosotros, inscripción y login
  pages/admin/       Dashboard y módulos de gestión
  data.ts            Contenido y datos de referencia
```

## Estado actual

La interfaz replica el diseño funcional de IronCore. Los datos son de referencia en el cliente; aún no hay backend ni persistencia.
