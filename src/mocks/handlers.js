import { http, graphql, HttpResponse, delay } from 'msw';
import { destinos, vuelosPorDestino, hotelesPorDestino } from './data';

export const handlers = [
  // ---------- REST ----------
  // Los patrones empiezan con "*/" para funcionar también cuando el sitio
  // está publicado en una subcarpeta (GitHub Pages: /nombre-del-repo/).

  // GET /api/destinos -> lista de destinos
  http.get('*/api/destinos', async () => {
    await delay(700); // simula la latencia de un servidor real
    return HttpResponse.json(destinos);
  }),

  // GET /api/destinos/:id -> un destino (404 si no existe)
  http.get('*/api/destinos/:id', async ({ params }) => {
    await delay(500);
    const destino = destinos.find((d) => d.id === params.id);
    if (!destino) {
      return HttpResponse.json({ mensaje: `El destino «${params.id}» no existe.` }, { status: 404 });
    }
    return HttpResponse.json(destino);
  }),

  // ---------- GraphQL ----------
  // Una sola consulta entrega vuelos y hoteles del destino elegido.
  graphql.query('OpcionesViaje', async ({ variables }) => {
    await delay(900);
    const { destinoId } = variables;

    if (!destinos.some((d) => d.id === destinoId)) {
      // GraphQL informa los errores dentro del campo "errors" (con HTTP 200)
      return HttpResponse.json({
        errors: [{ message: `No se encontraron opciones: el destino «${destinoId}» no existe.` }],
      });
    }

    return HttpResponse.json({
      data: {
        vuelos: vuelosPorDestino[destinoId] ?? [],
        hoteles: hotelesPorDestino[destinoId] ?? [],
      },
    });
  }),
];
