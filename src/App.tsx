import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AdminLayout } from './components/admin/AdminLayout'
import { Layout } from './components/Layout'
import { ScrollToHash } from './components/ScrollToHash'
import {
  AsistenciasAdmin,
  ClasesAdmin,
  InscripcionesAdmin,
  NotificacionesAdmin,
  ProfesoresAdmin,
  ReportesAdmin,
  TurnosAdmin,
} from './pages/admin/AdminTables'
import { Configuracion } from './pages/admin/Configuracion'
import { Dashboard } from './pages/admin/Dashboard'
import { Pagos } from './pages/admin/Pagos'
import { Socios } from './pages/admin/Socios'
import { Clases } from './pages/Clases'
import { Home } from './pages/Home'
import { Horarios } from './pages/Horarios'
import { Inscripcion } from './pages/Inscripcion'
import { Login } from './pages/Login'
import { Nosotros } from './pages/Nosotros'
import { Planes } from './pages/Planes'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/horarios" element={<Horarios />} />
          <Route path="/clases" element={<Clases />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/inscripcion" element={<Inscripcion />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="socios" element={<Socios />} />
          <Route path="inscripciones" element={<InscripcionesAdmin />} />
          <Route path="turnos" element={<TurnosAdmin />} />
          <Route path="asistencias" element={<AsistenciasAdmin />} />
          <Route path="pagos" element={<Pagos />} />
          <Route path="clases" element={<ClasesAdmin />} />
          <Route path="profesores" element={<ProfesoresAdmin />} />
          <Route path="reportes" element={<ReportesAdmin />} />
          <Route path="notificaciones" element={<NotificacionesAdmin />} />
          <Route path="configuracion" element={<Configuracion />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
