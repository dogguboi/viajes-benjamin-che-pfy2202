import { useCallback, useEffect, useState } from 'react';

// Hook reutilizable para consumir endpoints REST.
// Devuelve { data, loading, error, reintentar } y cancela la petición si el componente se desmonta.
export default function useFetch(url) {
  const [estado, setEstado] = useState({ data: null, loading: true, error: null });
  const [intento, setIntento] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setEstado({ data: null, loading: true, error: null });

    (async () => {
      try {
        const res = await fetch(url, { signal: controller.signal });

        if (!res.ok) {
          // Si el servidor envía un mensaje propio (campo "mensaje"), se muestra tal cual.
          let mensaje = `El servidor respondió con un error (código ${res.status}).`;
          try {
            const cuerpo = await res.json();
            if (cuerpo?.mensaje) mensaje = cuerpo.mensaje;
          } catch {
            /* la respuesta no era JSON: se deja el mensaje genérico */
          }
          throw new Error(mensaje);
        }

        const data = await res.json();
        setEstado({ data, loading: false, error: null });
      } catch (err) {
        if (err.name === 'AbortError') return; // petición cancelada a propósito
        const mensaje =
          err instanceof TypeError
            ? 'No se pudo conectar con el servidor. Revisa tu conexión e inténtalo de nuevo.'
            : err.message;
        setEstado({ data: null, loading: false, error: mensaje });
      }
    })();

    return () => controller.abort();
  }, [url, intento]);

  const reintentar = useCallback(() => setIntento((n) => n + 1), []);
  return { ...estado, reintentar };
}
