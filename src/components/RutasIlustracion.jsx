// Esquema decorativo de rutas desde Santiago (no es un mapa a escala).
const ORIGEN = { x: 80, y: 290 };
const DESTINOS = [
  { nombre: 'Cusco', x: 125, y: 190, curva: [60, 235] },
  { nombre: 'Cancún', x: 215, y: 120, curva: [110, 150] },
  { nombre: 'París', x: 335, y: 60, curva: [190, 90] },
  { nombre: 'Roma', x: 395, y: 135, curva: [300, 175] },
  { nombre: 'Tokio', x: 410, y: 245, curva: [330, 285] },
];

export default function RutasIlustracion() {
  return (
    <svg
      viewBox="0 0 480 340"
      role="img"
      aria-label="Esquema de rutas desde Santiago hacia los destinos disponibles"
      className="w-full rounded-2xl bg-marino"
    >
      {/* cuadrícula de puntos */}
      <defs>
        <pattern id="puntos" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.2" fill="#69C0B0" opacity="0.25" />
        </pattern>
      </defs>
      <rect width="480" height="340" rx="16" fill="url(#puntos)" />

      {DESTINOS.map((d) => (
        <g key={d.nombre}>
          <path
            d={`M ${ORIGEN.x} ${ORIGEN.y} Q ${d.curva[0]} ${d.curva[1]} ${d.x} ${d.y}`}
            fill="none"
            stroke="#69C0B0"
            strokeWidth="2"
            strokeDasharray="6 7"
            strokeLinecap="round"
          />
          <circle cx={d.x} cy={d.y} r="6" fill="#95E7D8" />
          <text x={d.x + 12} y={d.y + 5} fill="#E6F6F2" fontSize="15" fontWeight="700">
            {d.nombre}
          </text>
        </g>
      ))}

      <circle cx={ORIGEN.x} cy={ORIGEN.y} r="10" fill="#FFFFFF" />
      <circle cx={ORIGEN.x} cy={ORIGEN.y} r="4" fill="#0F1C2D" />
      <text x={ORIGEN.x + 16} y={ORIGEN.y + 5} fill="#FFFFFF" fontSize="16" fontWeight="800">
        Santiago
      </text>
    </svg>
  );
}
