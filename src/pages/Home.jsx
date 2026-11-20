import { Link } from 'react-router-dom';
import RutasIlustracion from '../components/RutasIlustracion';

const pasos = [
  { titulo: 'Elige un destino', texto: 'Explora ciudades con su país y sus actividades más populares.', tecnologia: 'Datos desde una API REST' },
  { titulo: 'Compara opciones', texto: 'Mira vuelos y hoteles con precios, fechas y disponibilidad.', tecnologia: 'Datos desde una API GraphQL' },
  { titulo: 'Arma tu viaje', texto: 'Elige un vuelo y un hotel y revisa el total estimado.', tecnologia: 'Cálculo en tiempo real' },
];

export default function Home() {
  return (
    <>
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-menta-dark">Desde Santiago al mundo</p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-marino sm:text-5xl">
            Planifica tu próximo viaje
          </h1>
          <div className="mt-3 h-1.5 w-14 rounded-full bg-menta" aria-hidden="true" />
          <p className="mt-5 max-w-md text-lg text-marino-soft">
            Selecciona un destino, revisa los vuelos y hoteles disponibles y arma tu viaje en un solo lugar.
          </p>
          <Link to="/destinos" className="btn-primary mt-7 !px-6 !py-3 !text-base">
            Explorar destinos
          </Link>
        </div>
        <RutasIlustracion />
      </section>

      <section className="mt-14" aria-labelledby="como-funciona">
        <h2 id="como-funciona" className="mb-4 font-display text-2xl font-extrabold">
          Cómo funciona
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {pasos.map((p, i) => (
            <article key={p.titulo} className="tarjeta relative overflow-hidden">
              <span
                className="absolute -right-1 -top-4 font-display text-7xl font-extrabold text-menta/30"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <h3 className="relative font-extrabold">{p.titulo}</h3>
              <p className="relative mt-1 text-sm text-marino-soft">{p.texto}</p>
              <p className="relative mt-3 text-xs font-bold text-menta-dark">{p.tecnologia}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
