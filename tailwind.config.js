/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Paleta del proyecto: azul marino + verde menta + aqua + blanco
      colors: {
        marino: { DEFAULT: '#0F1C2D', soft: '#4B5A6A' },                      // texto, barra superior, botón principal
        fondo:  { DEFAULT: '#E6F6F2', light: '#FFFFFF' },                     // fondo de página y tarjetas
        menta:  { DEFAULT: '#69C0B0', dark: '#1F6F61', light: '#DDF3EE' },    // acento de marca; "dark" para texto y enlaces
        aqua:   { DEFAULT: '#95E7D8' },                                       // acento claro (enlace activo, franjas)
        // Colores funcionales (la paleta de marca no trae rojo ni amarillo):
        alerta: { DEFAULT: '#B3261E', light: '#FBE4E2' },                     // errores y "agotado"
        ambar:  { DEFAULT: '#F2A93B', dark: '#7A4E00', light: '#FFF1D6' },    // advertencias y "últimos disponibles"
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'], // títulos
      },
    },
  },
  plugins: [],
};
