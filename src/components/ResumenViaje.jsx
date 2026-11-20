import { calcularNoches, formatearFecha, formatearPrecio } from '../utils/formato';

// Resumen de la planificación: los valores se DERIVAN de lo elegido, no se guardan aparte.
export default function ResumenViaje({ destino, vuelo, hotel }) {
  const noches = vuelo ? calcularNoches(vuelo.fechaSalida, vuelo.fechaRegreso) : 0;
  const costoHotel = hotel && vuelo ? hotel.precioPorNoche * noches : 0;
  const total = vuelo && hotel ? vuelo.precio + costoHotel : null;

  // El hotel debe tener disponibilidad durante todo el viaje (las fechas ISO se comparan como texto)
  const hotelNoCubre = vuelo && hotel && (hotel.fechaDesde > vuelo.fechaSalida || hotel.fechaHasta < vuelo.fechaRegreso);

  return (
    <section className="tarjeta lg:sticky lg:top-4" aria-label="Resumen de tu viaje">
      <h2 className="font-display text-xl font-extrabold">Tu viaje a {destino.nombre}</h2>

      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="font-bold text-marino-soft">Vuelo</dt>
          <dd>
            {vuelo ? (
              <>
                {vuelo.aerolinea} · {formatearFecha(vuelo.fechaSalida)} al {formatearFecha(vuelo.fechaRegreso)}
                <span className="block font-bold text-menta-dark">{formatearPrecio(vuelo.precio)}</span>
              </>
            ) : (
              <span className="text-marino-soft">Aún no eliges un vuelo.</span>
            )}
          </dd>
        </div>
        <div>
          <dt className="font-bold text-marino-soft">Hotel</dt>
          <dd>
            {hotel ? (
              <>
                {hotel.nombre}
                {vuelo ? (
                  <span className="block font-bold text-menta-dark">
                    {noches} noches × {formatearPrecio(hotel.precioPorNoche)} = {formatearPrecio(costoHotel)}
                  </span>
                ) : (
                  <span className="block text-marino-soft">Elige un vuelo para calcular las noches.</span>
                )}
              </>
            ) : (
              <span className="text-marino-soft">Aún no eliges un hotel.</span>
            )}
          </dd>
        </div>
      </dl>

      {hotelNoCubre && (
        <p role="status" className="mt-4 rounded-lg border-l-4 border-ambar bg-ambar-light px-3 py-2 text-sm text-marino">
          Este hotel no tiene disponibilidad para todas las fechas de tu vuelo. Prueba con otro hotel u otro vuelo.
        </p>
      )}

      <div className="mt-5 border-t-2 border-dashed border-marino/25 pt-4">
        <p className="text-sm font-bold text-marino-soft">Total estimado</p>
        <p className="font-display text-3xl font-extrabold text-menta-dark">{total === null ? '—' : formatearPrecio(total)}</p>
        {total === null && <p className="text-xs text-marino-soft">Elige un vuelo y un hotel para ver el total.</p>}
      </div>
    </section>
  );
}
