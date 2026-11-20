// Datos simulados del "backend". Se usan en los handlers de MSW.

export const destinos = [
  {
    id: 'paris', nombre: 'París', pais: 'Francia', continente: 'Europa',
    descripcion: 'La ciudad luz: museos de clase mundial, cafés con terraza y paseos junto al Sena.',
    actividades: ['Subir a la Torre Eiffel', 'Visitar el Louvre', 'Paseo en barco por el Sena', 'Recorrer Montmartre'],
  },
  {
    id: 'roma', nombre: 'Roma', pais: 'Italia', continente: 'Europa',
    descripcion: 'Casi tres mil años de historia en cada esquina, con una gastronomía imperdible.',
    actividades: ['Recorrer el Coliseo', 'Conocer el Vaticano', 'Lanzar una moneda en la Fontana di Trevi', 'Probar pasta artesanal'],
  },
  {
    id: 'cusco', nombre: 'Cusco', pais: 'Perú', continente: 'Sudamérica',
    descripcion: 'Antigua capital del Imperio inca y puerta de entrada a Machu Picchu.',
    actividades: ['Caminata a Machu Picchu', 'Valle Sagrado de los Incas', 'Mercado de San Pedro', 'Fortaleza de Sacsayhuamán'],
  },
  {
    id: 'isla-de-pascua', nombre: 'Isla de Pascua', pais: 'Chile', continente: 'Sudamérica',
    descripcion: 'Isla remota del Pacífico, famosa por sus moáis y su cultura rapanui.',
    actividades: ['Ver los moáis de Rano Raraku', 'Atardecer en Ahu Tahai', 'Playa Anakena', 'Buceo en aguas cristalinas'],
  },
  {
    id: 'cancun', nombre: 'Cancún', pais: 'México', continente: 'Norteamérica',
    descripcion: 'Playas de arena blanca, mar turquesa y ruinas mayas a pocas horas de distancia.',
    actividades: ['Nadar en cenotes', 'Ruinas de Chichén Itzá', 'Snorkel en el arrecife', 'Excursión a Isla Mujeres'],
  },
  {
    id: 'tokio', nombre: 'Tokio', pais: 'Japón', continente: 'Asia',
    descripcion: 'Una metrópolis donde conviven la tradición y la tecnología más avanzada.',
    actividades: ['Cruce de Shibuya', 'Templo Senso-ji', 'Mercado de Tsukiji', 'Cerezos en flor en el parque Ueno'],
  },
];

const ORIGEN = 'Santiago (SCL)';
const vuelo = (id, aerolinea, fechaSalida, fechaRegreso, precio, asientosDisponibles) => ({
  id, aerolinea, origen: ORIGEN, fechaSalida, fechaRegreso, precio, asientosDisponibles,
});
const hotel = (id, nombre, estrellas, precioPorNoche, fechaDesde, fechaHasta, habitacionesDisponibles) => ({
  id, nombre, estrellas, precioPorNoche, fechaDesde, fechaHasta, habitacionesDisponibles,
});

export const vuelosPorDestino = {
  paris: [
    vuelo('v-par-1', 'LATAM', '2027-01-15', '2027-01-25', 1150000, 14),
    vuelo('v-par-2', 'Air France', '2027-02-10', '2027-02-20', 1320000, 3),
    vuelo('v-par-3', 'Iberia', '2027-03-05', '2027-03-15', 980000, 0), // agotado
  ],
  roma: [
    vuelo('v-rom-1', 'ITA Airways', '2027-02-01', '2027-02-11', 1090000, 22),
    vuelo('v-rom-2', 'LATAM', '2027-03-12', '2027-03-22', 1180000, 6),
  ],
  cusco: [
    vuelo('v-cus-1', 'LATAM', '2027-01-20', '2027-01-27', 320000, 30),
    vuelo('v-cus-2', 'SKY Airline', '2027-02-14', '2027-02-21', 245000, 2),
    vuelo('v-cus-3', 'JetSMART', '2027-03-03', '2027-03-10', 199000, 18),
  ],
  'isla-de-pascua': [
    vuelo('v-ipc-1', 'LATAM', '2027-01-08', '2027-01-15', 560000, 9),
    vuelo('v-ipc-2', 'LATAM', '2027-02-19', '2027-02-26', 590000, 4),
  ],
  cancun: [
    vuelo('v-can-1', 'LATAM', '2027-01-10', '2027-01-20', 780000, 17),
    vuelo('v-can-2', 'Avianca', '2027-02-05', '2027-02-15', 840000, 1),
  ],
  tokio: [
    vuelo('v-tok-1', 'Japan Airlines', '2027-04-02', '2027-04-14', 1890000, 8),
    vuelo('v-tok-2', 'ANA', '2027-04-20', '2027-05-02', 1950000, 5),
  ],
};

export const hotelesPorDestino = {
  paris: [
    hotel('h-par-1', 'Hôtel Lumière', 4, 145000, '2027-01-10', '2027-02-28', 8),
    hotel('h-par-2', 'Le Petit Marais', 3, 98000, '2027-01-01', '2027-03-31', 2),
    hotel('h-par-3', 'Résidence Sena', 5, 310000, '2027-02-01', '2027-02-28', 0), // agotado
  ],
  roma: [
    hotel('h-rom-1', 'Hotel Colosseo', 4, 120000, '2027-01-15', '2027-03-31', 12),
    hotel('h-rom-2', 'Casa Trastevere', 3, 85000, '2027-02-01', '2027-03-31', 5),
  ],
  cusco: [
    hotel('h-cus-1', 'Casa Inca', 3, 52000, '2027-01-01', '2027-03-31', 15),
    hotel('h-cus-2', 'Hotel Plaza Andina', 4, 89000, '2027-01-15', '2027-02-28', 4),
  ],
  'isla-de-pascua': [], // sin hoteles: sirve para probar el estado "vacío"
  cancun: [
    hotel('h-can-1', 'Playa Azul Resort', 5, 210000, '2027-01-05', '2027-03-31', 6),
    hotel('h-can-2', 'Hotel Cenote', 3, 75000, '2027-01-01', '2027-02-28', 10),
  ],
  tokio: [
    hotel('h-tok-1', 'Shinjuku Stay', 3, 78000, '2027-03-25', '2027-05-15', 11),
    hotel('h-tok-2', 'Sakura Grand', 4, 160000, '2027-04-01', '2027-04-30', 3),
  ],
};
