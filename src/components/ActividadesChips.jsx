export default function ActividadesChips({ actividades, max }) {
  const lista = max ? actividades.slice(0, max) : actividades;
  const restantes = actividades.length - lista.length;

  return (
    <ul className="flex flex-wrap gap-2" aria-label="Actividades populares">
      {lista.map((a) => (
        <li key={a} className="rounded-full border border-marino/15 bg-fondo-light px-3 py-1 text-xs font-bold text-marino">
          {a}
        </li>
      ))}
      {restantes > 0 && <li className="px-1 py-1 text-xs font-bold text-marino-soft">+{restantes} más</li>}
    </ul>
  );
}
