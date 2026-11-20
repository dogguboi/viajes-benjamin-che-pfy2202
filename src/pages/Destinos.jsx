import { useMemo, useState } from 'react';
import PageTitle from '../components/PageTitle';
import DestinoCard from '../components/DestinoCard';
import Cargando from '../components/Cargando';
import ErrorMensaje from '../components/ErrorMensaje';
import useFetch from '../hooks/useFetch';
import { URL_DESTINOS } from '../api/rest';

export default function Destinos() {
  // REST: lista de destinos
  const { data: destinos, loading, error, reintentar } = useFetch(URL_DESTINOS);
  const [continente, setContinente] = useState('Todos');

  const continentes = useMemo(() => ['Todos', ...new Set((destinos ?? []).map((d) => d.continente))], [destinos]);
  const visibles = useMemo(
    () => (continente === 'Todos' ? destinos ?? [] : (destinos ?? []).filter((d) => d.continente === continente)),
    [destinos, continente]
  );

  return (
    <>
      <PageTitle title="Destinos" subtitle="Elige un destino para ver sus vuelos y hoteles disponibles." />

      {loading && <Cargando texto="Cargando destinos…" />}

      {error && <ErrorMensaje titulo="No pudimos cargar los destinos" mensaje={error} onReintentar={reintentar} />}

      {destinos && (
        <>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <label htmlFor="filtro-continente" className="text-sm font-bold">
                Continente
              </label>
              <select
                id="filtro-continente"
                className="campo max-w-xs"
                value={continente}
                onChange={(e) => setContinente(e.target.value)}
              >
                {continentes.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <p className="text-sm text-marino-soft" aria-live="polite">
              Mostrando {visibles.length} de {destinos.length} destinos
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visibles.map((d) => (
              <DestinoCard key={d.id} destino={d} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
