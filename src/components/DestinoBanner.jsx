import { BANDA_CONTINENTE } from '../utils/formato';

// Encabezado de la página de un destino: color según continente
export default function DestinoBanner({ destino }) {
  const estilo = BANDA_CONTINENTE[destino.continente] ?? 'bg-marino text-white';

  return (
    <header className={`banda relative overflow-hidden rounded-2xl px-6 py-8 ${estilo}`}>
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-widest opacity-90">{destino.continente}</p>
        <h1 className="mt-1 font-display text-4xl font-extrabold sm:text-5xl">
          {destino.nombre}, {destino.pais}
        </h1>
        <p className="mt-3 max-w-prose opacity-90">{destino.descripcion}</p>
      </div>
    </header>
  );
}
