import SeleccionCard from './SeleccionCard';
import DisponibilidadBadge from './DisponibilidadBadge';
import { formatearFecha, formatearPrecio } from '../utils/formato';

export default function HotelCard({ hotel, seleccionado, onSeleccionar }) {
  return (
    <SeleccionCard
      seleccionado={seleccionado}
      agotado={hotel.habitacionesDisponibles === 0}
      onSeleccionar={onSeleccionar}
      lateral={
        <p className="text-right font-display text-2xl font-extrabold text-menta-dark">
          {formatearPrecio(hotel.precioPorNoche)}
          <span className="block font-sans text-xs font-normal text-marino-soft">por noche</span>
        </p>
      }
    >
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="font-bold">{hotel.nombre}</h3>
        <DisponibilidadBadge cantidad={hotel.habitacionesDisponibles} unidad="habitaciones" />
      </div>
      <p className="mt-1 text-sm font-bold text-ambar-dark" aria-label={`${hotel.estrellas} estrellas`}>
        {'★'.repeat(hotel.estrellas)}
      </p>
      <p className="mt-1 text-sm text-marino-soft">
        Disponible del {formatearFecha(hotel.fechaDesde)} al {formatearFecha(hotel.fechaHasta)}
      </p>
    </SeleccionCard>
  );
}
