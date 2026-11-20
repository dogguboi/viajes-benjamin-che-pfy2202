import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import App from './App';
import { client } from './api/graphql';
// Tipografías autoalojadas (funcionan sin conexión a Google Fonts)
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/700.css';
import '@fontsource/manrope/800.css';
import '@fontsource/fraunces/600.css';
import '@fontsource/fraunces/800.css';
import './index.css';

// El backend es un mock (MSW): debe estar activo ANTES de que React haga su primera petición.
// Se mantiene activo también en el sitio publicado, porque no existe un servidor real.
async function enableMocking() {
  const { worker } = await import('./mocks/browser');
  return worker.start({
    serviceWorker: { url: `${import.meta.env.BASE_URL}mockServiceWorker.js` },
    onUnhandledRequest: 'bypass', // no interfiere con fuentes, scripts, etc.
  });
}

function render() {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      {/* HashRouter evita errores 404 al recargar la página en GitHub Pages */}
      <HashRouter>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </HashRouter>
    </React.StrictMode>
  );
}

// Si el Service Worker no pudo iniciarse, la app igual carga y mostrará mensajes de error claros.
enableMocking().catch(console.error).finally(render);
