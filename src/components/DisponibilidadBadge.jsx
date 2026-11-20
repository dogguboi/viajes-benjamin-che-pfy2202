// Disponibilidad: menta = hay, ámbar = quedan pocos, rojo = agotado
export default function DisponibilidadBadge({ cantidad, unidad }) {
  let estilo = 'bg-menta-light text-menta-dark';
  let texto = `${cantidad} ${unidad} disponibles`;

  if (cantidad === 0) {
    estilo = 'bg-alerta-light text-alerta';
    texto = 'Agotado';
  } else if (cantidad <= 3) {
    estilo = 'bg-ambar-light text-ambar-dark';
    texto = `Últimos ${cantidad}`;
  }

  return <span className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-bold ${estilo}`}>{texto}</span>;
}
