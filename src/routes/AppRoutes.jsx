import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';

// Lazy loading: cada página se descarga solo cuando el usuario la visita.
const Home = lazy(() => import('../pages/Home'));
const Destinos = lazy(() => import('../pages/Destinos'));
const DestinoDetalle = lazy(() => import('../pages/DestinoDetalle'));
const NotFound = lazy(() => import('../pages/NotFound'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="destinos" element={<Destinos />} />
        <Route path="destinos/:id" element={<DestinoDetalle />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
