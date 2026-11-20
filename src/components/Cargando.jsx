// Indicador de carga accesible: se anuncia a lectores de pantalla (role="status").
export default function Cargando({ texto = 'Cargando…' }) {
  return (
    <div role="status" className="flex items-center gap-3 py-6 text-marino-soft">
      <span
        className="h-6 w-6 animate-spin rounded-full border-4 border-menta border-t-transparent motion-reduce:animate-none"
        aria-hidden="true"
      />
      <span className="font-bold">{texto}</span>
    </div>
  );
}
