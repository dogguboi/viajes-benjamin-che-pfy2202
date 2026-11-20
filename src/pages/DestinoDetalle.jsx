import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import DestinoBanner from '../components/DestinoBanner';
import Cargando from '../components/Cargando';
import ErrorMensaje from '../components/ErrorMensaje';
import ActividadesChips from '../components/ActividadesChips';
import VueloCard from '../components/VueloCard';
import HotelCard from '../components/HotelCard';
import ResumenViaje from '../components/ResumenViaje';
import useFetch from '../hooks/useFetch';
import { urlDestino } from '../api/rest';
import { OPCIONES_VIAJE } from '../api/graphql';

// Mensaje legible para errores de Apollo (de red o devueltos por el servidor GraphQL)
const mensajeApollo = (error) =>
  error.networkError
    ? 'No se pudo conectar con el servidor de vuelos y hoteles. Inténtalo de nuevo.'
    : error.graphQLErrors?.[0]?.message ?? error.message;

function DestinoContenido({ id }) {
  // REST: información del destino
  const { data: destino, loading, error, reintentar } = useFetch(urlDestino(id));

  // GraphQL: vuelos y hoteles del destino (Apollo guarda el resultado en caché)
  const opciones = useQuery(OPCIONES_VIAJE, { variables: { destinoId: id }, notifyOnNetworkStatusChange: true });

  // Elecciones del usuario (se guarda solo el id; el objeto se busca en los datos)
  const [vueloId, setVueloId] = useState(null);
  const [hotelId, setHotelId] = useState(null);
  const alternar = (actual, nuevo, setter) => setter(actual === nuevo ? null : nuevo);

  const volver = (
    <Link to="/destinos" className="btn-secondary">
      Volver a destinos
    </Link>
  );

  if (loading) return <Cargando texto="Cargando destino…" />;
  if (error) return <ErrorMensaje titulo="No pudimos cargar el destino" mensaje={error} onReintentar={reintentar}>{volver}</ErrorMensaje>;

  const vuelos = opciones.data?.vuelos ?? [];
  const hoteles = opciones.data?.hoteles ?? [];
  const vueloElegido = vuelos.find((v) => v.id === vueloId);
  const hotelElegido = hoteles.find((h) => h.id === hotelId);

  return (
    <>
      <Link to="/destinos" className="mb-4 inline-block text-sm font-bold text-menta-dark hover:underline">
        ← Volver a destinos
      </Link>
      <DestinoBanner destino={destino} />
      <h2 className="mb-2 mt-5 text-sm font-bold text-marino-soft">Actividades populares</h2>
      <ActividadesChips actividades={destino.actividades} />

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          {opciones.loading && <Cargando texto="Buscando vuelos y hoteles…" />}

          {opciones.error && (
            <ErrorMensaje
              titulo="No pudimos cargar vuelos y hoteles"
              mensaje={mensajeApollo(opciones.error)}
              onReintentar={() => opciones.refetch()}
            />
          )}

          {opciones.data && (
            <>
              <section aria-labelledby="titulo-vuelos">
                <h2 id="titulo-vuelos" className="mb-3 font-display text-2xl font-extrabold">Vuelos</h2>
                {vuelos.length === 0 ? (
                  <p className="tarjeta text-marino-soft">No hay vuelos disponibles para este destino por ahora.</p>
                ) : (
                  <ul className="space-y-6">
                    {vuelos.map((v) => (
                      <VueloCard
                        key={v.id}
                        vuelo={v}
                        destino={destino.nombre}
                        seleccionado={v.id === vueloId}
                        onSeleccionar={() => alternar(vueloId, v.id, setVueloId)}
                      />
                    ))}
                  </ul>
                )}
              </section>

              <section aria-labelledby="titulo-hoteles">
                <h2 id="titulo-hoteles" className="mb-3 font-display text-2xl font-extrabold">Hoteles</h2>
                {hoteles.length === 0 ? (
                  <p className="tarjeta text-marino-soft">No hay hoteles disponibles para este destino por ahora.</p>
                ) : (
                  <ul className="space-y-3">
                    {hoteles.map((h) => (
                      <HotelCard
                        key={h.id}
                        hotel={h}
                        seleccionado={h.id === hotelId}
                        onSeleccionar={() => alternar(hotelId, h.id, setHotelId)}
                      />
                    ))}
                  </ul>
                )}
              </section>
            </>
          )}
        </div>

        <aside>
          <ResumenViaje destino={destino} vuelo={vueloElegido} hotel={hotelElegido} />
        </aside>
      </div>
    </>
  );
}

export default function DestinoDetalle() {
  const { id } = useParams();
  // key={id}: al cambiar de destino, el componente se reinicia (se borran las elecciones anteriores)
  return <DestinoContenido key={id} id={id} />;
}
