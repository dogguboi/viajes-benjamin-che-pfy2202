// Rutas relativas: funcionan en local y en GitHub Pages (subcarpeta del repositorio).
export const URL_DESTINOS = 'api/destinos';
export const urlDestino = (id) => `api/destinos/${encodeURIComponent(id)}`;
