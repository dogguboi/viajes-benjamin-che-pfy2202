import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Cargando from './Cargando';

// Estructura común de todas las páginas. <Outlet /> muestra la ruta hija activa.
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
        <Suspense fallback={<Cargando texto="Cargando página…" />}>
          <Outlet />
        </Suspense>
      </main>
      <footer className="border-t border-marino/15 py-4 text-center text-sm text-marino-soft">
        Agencia de Viajes · Proyecto Desarrollo Frontend II
      </footer>
    </div>
  );
}
