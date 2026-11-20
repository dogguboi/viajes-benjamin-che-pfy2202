import { Link } from 'react-router-dom';
import ActividadesChips from './ActividadesChips';
import { BANDA_CONTINENTE } from '../utils/formato';

// Tarjeta tipo "postal": banda de color arriba y los datos abajo
export default function DestinoCard({ destino }) {
  const estilo = BANDA_CONTINENTE[destino.continente] ?? 'bg-marino text-white';

  return (
    <Link to={`/destinos/${destino.id}`} className="tarjeta flex flex-col overflow-hidden !p-0 transition-shadow hover:shadow-md">
      <div className={`banda relative px-5 py-6 ${estilo}`}>
        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-widest opacity-90">{destino.continente}</p>
          <h2 className="mt-1 font-display text-2xl font-extrabold">{destino.nombre}</h2>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-bold text-menta-dark">{destino.pais}</p>
        <p className="mb-4 mt-1 text-sm text-marino-soft">{destino.descripcion}</p>
        <div className="mt-auto">
          <ActividadesChips actividades={destino.actividades} max={2} />
          <p className="mt-4 text-sm font-bold text-menta-dark">Ver vuelos y hoteles →</p>
        </div>
      </div>
    </Link>
  );
}
