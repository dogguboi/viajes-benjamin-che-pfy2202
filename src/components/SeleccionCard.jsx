// Tarjeta base para una opción elegible. Con pase=true se dibuja como un pase de abordar:
// información a la izquierda y talón a la derecha, separados por una línea punteada.
export default function SeleccionCard({ seleccionado, agotado, onSeleccionar, lateral, pase = false, children }) {
  const muesca =
    'absolute z-10 hidden h-5 w-5 rounded-full border border-marino/15 bg-fondo sm:block';

  return (
    <li
      className={`relative flex flex-col rounded-xl border bg-fondo-light sm:flex-row ${
        seleccionado ? 'border-menta-dark ring-2 ring-menta-dark' : 'border-marino/15'
      }`}
    >
      <div className="min-w-0 flex-1 p-5">{children}</div>

      <div
        className={`relative flex flex-row items-center justify-between gap-3 border-t-2 p-5
          sm:w-48 sm:shrink-0 sm:flex-col sm:items-end sm:justify-center sm:border-l-2 sm:border-t-0 ${
            pase ? 'border-dashed border-marino/25' : 'border-solid border-marino/10'
          }`}
      >
        {pase && (
          <>
            <span className={`${muesca} -left-[11px] -top-[11px]`} aria-hidden="true" />
            <span className={`${muesca} -bottom-[11px] -left-[11px]`} aria-hidden="true" />
          </>
        )}
        {lateral}
        <button
          type="button"
          className={seleccionado ? 'btn-secondary' : 'btn-primary'}
          onClick={onSeleccionar}
          disabled={agotado}
          aria-pressed={seleccionado}
        >
          {agotado ? 'Sin disponibilidad' : seleccionado ? 'Quitar' : 'Elegir'}
        </button>
      </div>
    </li>
  );
}
