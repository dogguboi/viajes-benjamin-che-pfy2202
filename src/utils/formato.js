const formatoCLP = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0,
});
export const formatearPrecio = (valor) => formatoCLP.format(valor);

// Las fechas llegan como "2027-01-15". Se construyen en hora local para evitar
// que la zona horaria las corra un día.
const aFecha = (iso) => {
  const [anio, mes, dia] = iso.split('-').map(Number);
  return new Date(anio, mes - 1, dia);
};
const formatoFecha = new Intl.DateTimeFormat('es-CL', { day: 'numeric', month: 'short', year: 'numeric' });

export const formatearFecha = (iso) => formatoFecha.format(aFecha(iso));
export const calcularNoches = (desde, hasta) => Math.round((aFecha(hasta) - aFecha(desde)) / 86400000);

// Color de la banda de cada destino según su continente (fondo + color de texto legible)
export const BANDA_CONTINENTE = {
  Europa: 'bg-marino text-white',
  Sudamérica: 'bg-aqua text-marino',
  Norteamérica: 'bg-menta text-marino',
  Asia: 'bg-menta-dark text-white',
};
