# Agencia de Viajes · Integración Frontend + Backend (mock)

Proyecto sumativo de **Desarrollo Frontend II (PFY2202)**. Aplicación para una agencia de viajes donde el usuario elige un destino, revisa los vuelos y hoteles disponibles y arma su viaje con un total estimado.

## Funcionalidades

- **Inicio** con una explicación del flujo.
- **Destinos**: lista de destinos con país y actividades populares (**API REST**), con filtro por continente.
- **Detalle de destino**: información del destino (**REST**) y sus **vuelos y hoteles** con precios, fechas y disponibilidad (**GraphQL**).
- **Planificador de viaje**: el usuario elige un vuelo y un hotel; el resumen calcula las noches y el total, y avisa si el hotel no tiene disponibilidad para las fechas del vuelo.
- Estados de **carga**, **error** (con botón *Reintentar*), **vacío** y **agotado** en todas las consultas.
- Diseño **responsive** (probado desde 390 px de ancho), con paleta azul marino / menta / aqua, tarjetas de destino tipo postal por continente y vuelos con forma de pase de abordar.

## Tecnologías

React 18 · React Router 6 · Apollo Client (GraphQL) · MSW 2 (backend mock) · Tailwind CSS 3 · Vite

Tipografías autoalojadas con `@fontsource`: **Fraunces** (títulos) y **Manrope** (texto), por lo que no dependen de Google Fonts.

## Cómo funciona el backend mock

No hay servidor real. **MSW (Mock Service Worker)** instala un *Service Worker* en el navegador que intercepta las peticiones y responde con los datos de `src/mocks/data.js`, simulando además la latencia de red.

| Tipo | Petición | Respuesta |
|---|---|---|
| REST | `GET api/destinos` | Lista de destinos (id, nombre, país, continente, descripción, actividades) |
| REST | `GET api/destinos/:id` | Un destino; **404** con mensaje si no existe |
| GraphQL | `POST graphql` · `query OpcionesViaje($destinoId: ID!)` | `vuelos { id aerolinea origen fechaSalida fechaRegreso precio asientosDisponibles }` y `hoteles { id nombre estrellas precioPorNoche fechaDesde fechaHasta habitacionesDisponibles }` |

Una sola consulta GraphQL entrega vuelos y hoteles juntos, pidiendo únicamente los campos que la interfaz usa. Si el destino no existe, el servidor responde con un error GraphQL (`errors`).

> **Importante:** el mock permanece activo también en el sitio publicado en GitHub Pages, porque no existe un servidor real. Por eso el Service Worker (`public/mockServiceWorker.js`) debe mantenerse en el repositorio.

## Estructura

```
public/mockServiceWorker.js   Service Worker de MSW (generado con "npx msw init")
src/
├── api/          Cliente Apollo y consulta GraphQL; rutas REST
├── components/   Componentes reutilizables (tarjetas, badges, resumen, carga, error…)
├── hooks/        useFetch: hook para consumir endpoints REST
├── mocks/        Datos, handlers (REST + GraphQL) y worker de MSW
├── pages/        Una página por ruta
├── routes/       Configuración de React Router (con lazy loading)
└── utils/        Formato de precios y fechas
```

## Cómo ejecutarlo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # compilación para producción
```

## Publicación en GitHub Pages

1. Crear el repositorio `viajes-nombre-apellido-siglaCurso` y subir el código.
2. Ejecutar `npm run deploy` (compila y publica `dist` en la rama `gh-pages`).
3. En GitHub: *Settings → Pages → Branch: gh-pages / (root)*.
4. El sitio quedará en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

Se usa `HashRouter` para que las rutas funcionen al recargar la página en GitHub Pages.

## Pruebas en navegadores

Recorrido probado en cada navegador: ver destinos → filtrar por continente → abrir un destino → elegir vuelo y hotel → revisar el total → abrir `#/destinos/999` (error) → abrir Isla de Pascua (sin hoteles) → probar en ancho móvil.

| Navegador | Versión | Resultado | Observaciones |
|---|---|---|---|
| Chromium (automatizado, Playwright) | 153 | ✅ 18 de 18 comprobaciones correctas (incluye carga de tipografías y ancho móvil) | Probado sobre el build servido en una subcarpeta, como en GitHub Pages |
| Google Chrome | _completar_ | _completar_ | |
| Microsoft Edge | _completar_ | _completar_ | |
| Mozilla Firefox | _completar_ | _completar_ | |
| Safari / móvil | _completar_ | _completar_ | |
