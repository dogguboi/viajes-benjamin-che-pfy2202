import { NavLink } from 'react-router-dom';
import IconoAvion from './IconoAvion';

const enlaces = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/destinos', label: 'Destinos' },
];

// Enlace activo: aqua con texto marino. Inactivo: claro sobre marino.
const claseEnlace = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-bold transition-colors ${
    isActive ? 'bg-aqua text-marino' : 'text-fondo hover:bg-white/10'
  }`;

export default function Navbar() {
  return (
    <header>
      <div className="bg-marino">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center gap-2 px-4 py-3" aria-label="Principal">
          <NavLink to="/" end className="mr-auto flex items-center gap-2.5 text-fondo">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-menta text-marino">
              <IconoAvion className="h-4 w-4 rotate-45" />
            </span>
            <span className="font-display text-xl font-extrabold">Agencia de Viajes</span>
          </NavLink>
          {enlaces.map((e) => (
            <NavLink key={e.to} to={e.to} end={e.end} className={claseEnlace}>
              {e.label}
            </NavLink>
          ))}
        </nav>
      </div>
      {/* Franja de acento con los tonos de menta de la marca */}
      <div className="flex h-1.5" aria-hidden="true">
        <span className="flex-1 bg-menta-dark" />
        <span className="flex-1 bg-aqua" />
        <span className="flex-1 bg-menta" />
      </div>
    </header>
  );
}
