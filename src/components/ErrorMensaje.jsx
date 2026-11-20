// Mensaje de error amigable, con opción de reintentar y/o una acción alternativa.
export default function ErrorMensaje({ titulo = 'Algo salió mal', mensaje, onReintentar, children }) {
  return (
    <div role="alert" className="rounded-xl border-l-4 border-alerta bg-alerta-light p-5">
      <h2 className="font-extrabold text-alerta">{titulo}</h2>
      <p className="mt-1 text-marino">{mensaje}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {onReintentar && (
          <button type="button" className="btn-primary" onClick={onReintentar}>
            Reintentar
          </button>
        )}
        {children}
      </div>
    </div>
  );
}
