import SeleccionCard from './SeleccionCard';
import DisponibilidadBadge from './DisponibilidadBadge';
import IconoAvion from './IconoAvion';
import { formatearFecha, formatearPrecio } from '../utils/formato';

export default function VueloCard({ vuelo, destino, seleccionado, onSeleccionar }) {
  const ciudadOrigen = vuelo.origen.replace(/\s*\(.*\)/, ''); // "Santiago (SCL)" -> "Santiago"

  return (
    <SeleccionCard
      pase
      seleccionado={seleccionado}
      agotado={vuelo.asientosDisponibles === 0}
      onSeleccionar={onSeleccionar}
      lateral={<p className="font-display text-2xl font-extrabold text-menta-dark">{formatearPrecio(vuelo.precio)}</p>}
    >
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="font-bold">{vuelo.aerolinea}</h3>
        <DisponibilidadBadge cantidad={vuelo.asientosDisponibles} unidad="asientos" />
      </div>

      <div className="mt-3 flex items-center gap-3">
        <span className="font-display text-xl font-extrabold">{ciudadOrigen}</span>
        <span className="relative h-5 flex-1 border-t-2 border-dashed border-marino/30" aria-hidden="true">
          <IconoAvion className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-90 bg-fondo-light px-0.5 text-menta-dark" />
        </span>
        <span className="font-display text-xl font-extrabold">{destino}</span>
      </div>

      <p className="mt-2 text-sm text-marino-soft">
        Ida {formatearFecha(vuelo.fechaSalida)} · Regreso {formatearFecha(vuelo.fechaRegreso)}
      </p>
    </SeleccionCard>
  );
}
