import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client';

// Cliente Apollo: envía las consultas GraphQL por POST al endpoint "graphql".
// Apollo guarda las respuestas en caché: volver a un destino ya consultado es instantáneo.
export const client = new ApolloClient({
  link: new HttpLink({ uri: 'graphql' }),
  cache: new InMemoryCache({ addTypename: false }),
});

// Una sola consulta trae vuelos y hoteles; se piden solo los campos que la interfaz usa.
export const OPCIONES_VIAJE = gql`
  query OpcionesViaje($destinoId: ID!) {
    vuelos(destinoId: $destinoId) {
      id
      aerolinea
      origen
      fechaSalida
      fechaRegreso
      precio
      asientosDisponibles
    }
    hoteles(destinoId: $destinoId) {
      id
      nombre
      estrellas
      precioPorNoche
      fechaDesde
      fechaHasta
      habitacionesDisponibles
    }
  }
`;
