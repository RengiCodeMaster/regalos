import { Category, Product, Testimonial } from './types';

export const WHATSAPP_NUMBER = '51913961433'; // Added country code 51 for Peru

export const PRODUCTS: Product[] = [
  // Pack Amor Eterno
  {
    id: 'p1',
    name: 'Pack Amor Infinito',
    price: 150,
    category: Category.AMOR_ETERNO,
    image: '',
    description: 'La máxima expresión de amor: 12 rosas rojas selectas, un tierno oso de peluche y chocolates Ferrero Rocher para endulzar el alma.',
    popular: true
  },
  {
    id: 'p2',
    name: 'Combo Dulce Despertar',
    price: 120,
    category: Category.AMOR_ETERNO,
    image: '',
    description: 'Inicia su día con una sonrisa: Desayuno sorpresa gourmet, acompañado de un peluche abrazable y globos festivos.',
  },
  {
    id: 'p3',
    name: 'Desayuno Sorpresa Premium',
    price: 130,
    category: Category.AMOR_ETERNO,
    image: '',
    description: 'Despierta con alegría: Jugo natural, sándwich gourmet, frutas frescas y waffle, todo en una hermosa caja de madera.',
  },
  {
    id: 'p4',
    name: 'Pack Cita Romántica',
    price: 160,
    category: Category.AMOR_ETERNO,
    image: '',
    description: 'Para celebrar el amor: Vino tinto, copas personalizadas y una selección de quesos y fiambres.',
  },

  // Ramos Buchones
  {
    id: 'r1',
    name: 'Ramo Buchón 50 Rosas',
    price: 200,
    category: Category.RAMOS_BUCHONES,
    image: '',
    description: 'Impacta y enamora: 50 rosas rojas frescas envueltas en elegante papel coreano. Un regalo inolvidable.',
    popular: true
  },
  {
    id: 'r2',
    name: 'Ramo Buchón Imperial',
    price: 250,
    category: Category.RAMOS_BUCHONES,
    image: '',
    description: 'Lujo total: 100 rosas rojas coronadas con tiara dorada y mariposas. Para quien merece reinar en tu corazón.',
  },
  {
    id: 'r3',
    name: 'Ramo Sol y Luna',
    price: 180,
    category: Category.RAMOS_BUCHONES,
    image: '',
    description: 'La combinación perfecta de pasión y alegría: Rosas rojas y girasoles vibrantes en una presentación gigante.',
  },
  {
    id: 'r4',
    name: 'Ramo Buchón Pink Dream',
    price: 220,
    category: Category.RAMOS_BUCHONES,
    image: '',
    description: 'Dulzura pura: 50 rosas rosadas de tono pastel, envueltas en papel de seda blanco y lazo satinado.',
  },
  {
    id: 'r5',
    name: 'Ramo Buchón Girasoles',
    price: 190,
    category: Category.RAMOS_BUCHONES,
    image: '',
    description: 'Luz y energía: Un masivo arreglo de girasoles brillantes que iluminarán el día de quien más quieres.',
  },
  {
    id: 'r6',
    name: 'Ramo Eterno Azul',
    price: 240,
    category: Category.RAMOS_BUCHONES,
    image: '',
    description: 'Único y mágico: Rosas azules exóticas, representando un amor infinito y misterioso.',
    popular: true
  },

  // Chocolates & Dulces
  {
    id: 'c1',
    name: 'Torre de Tentación',
    price: 85,
    category: Category.CHOCOLATES,
    image: '',
    description: 'Una explosión de sabor: Caja sorpresa repleta de los mejores chocolates importados (Snickers, M&Ms, Ferrero).',
  },
  {
    id: 'c2',
    name: 'Corazón Kinder Lover',
    price: 95,
    category: Category.CHOCOLATES,
    image: '',
    description: 'Puro placer: Arreglo exclusivo en forma de corazón, desbordante de productos Kinder Bueno y delicias.',
  },
  {
    id: 'c3',
    name: 'Caja Dulces Momentos',
    price: 60,
    category: Category.CHOCOLATES,
    image: '',
    description: 'Detalle perfecto: Selección de chocolates europeos y trufas artesanales en una elegante caja de regalo.',
  },
  {
    id: 'c4',
    name: 'Bouquet de Ferrero',
    price: 110,
    category: Category.CHOCOLATES,
    image: '',
    description: 'Elegancia comestible: Un ramo hecho enteramente de bombones Ferrero Rocher, la combinación perfecta de lujo y sabor.',
  },

  // Peluches Gigantes
  {
    id: 'pl1',
    name: 'Oso Gigante "Te Amo"',
    price: 350,
    category: Category.PELUCHES,
    image: '',
    description: '2 metros de ternura: El regalo definitivo para dejar huella. Suave, enorme y perfecto para abrazar.',
    popular: true
  },
  {
    id: 'pl2',
    name: 'Stitch Edición Especial',
    price: 280,
    category: Category.PELUCHES,
    image: '',
    description: 'Ohana significa familia: Peluche importado de Stitch, tamaño gigante, acabado premium.',
  },
  {
    id: 'pl3',
    name: 'Panda Gigante Abrazable',
    price: 220,
    category: Category.PELUCHES,
    image: '',
    description: 'Ternura en blanco y negro: Panda de felpa extra suave, 1.5 metros de puro amor.',
  },
  {
    id: 'pl4',
    name: 'Unicornio Mágico',
    price: 180,
    category: Category.PELUCHES,
    image: '',
    description: 'Fantasía hecha regalo: Unicornio de colores pastel con detalles brillantes, perfecto para los soñadores.',
    popular: true
  },

  // Ocasión: Cumpleaños
  {
    id: 'cum1',
    name: 'Party Box Deluxe',
    price: 130,
    category: Category.CUMPLEANOS,
    image: '',
    description: '¡Feliz Vuelta al Sol! Caja festiva con globos metálicos, pastel personal, velitas y snacks premium.',
    popular: true
  },
  {
    id: 'cum2',
    name: 'Arreglo Floral Celebration',
    price: 110,
    category: Category.CUMPLEANOS,
    image: '',
    description: 'Colores vibrantes para un día especial: Gerbera, rosas y lirios en tonos alegres con topper de "Feliz Cumpleaños".',
  },

  // Ocasión: Aniversario
  {
    id: 'anv1',
    name: 'Cena Romántica en Casa',
    price: 180,
    category: Category.ANIVERSARIO,
    image: '',
    description: 'Celebra su amor: Set de vinos, copas grabadas con fecha, quesos finos y velas aromáticas.',
  },
  {
    id: 'anv2',
    name: 'Caja de Rosas infinitas',
    price: 200,
    category: Category.ANIVERSARIO,
    image: '',
    description: 'Amor que perdura: Caja acrílica de lujo con rosas preservadas que duran años, simbolizando su unión eterna.',
  },

  // Ocasión: Graduación
  {
    id: 'gra1',
    name: 'Pack Éxito Profesional',
    price: 140,
    category: Category.GRADUACION,
    image: '',
    description: 'El mundo es tuyo: Oso con birrete, espumante para brindar y chocolates finos.',
  },
  {
    id: 'gra2',
    name: 'Ramo Graduado',
    price: 90,
    category: Category.GRADUACION,
    image: '',
    description: 'Orgullo total: Arreglo floral elegante con detalles dorados y negros, incluye tarjeta de felicitación personalizada.',
  },

  // Ocasión: Mejórate Pronto
  {
    id: 'rec1',
    name: 'Canasta Vitaminas y Amor',
    price: 100,
    category: Category.MEJORATE_PRONTO,
    image: '',
    description: 'Recupérate pronto: Selección de frutas frescas de estación, miel, té relajante y un peluche reconfortante.',
  },
  {
    id: 'rec2',
    name: 'Ramo de Alegría',
    price: 80,
    category: Category.MEJORATE_PRONTO,
    image: '',
    description: 'Luz en días grises: Arreglo de girasoles y flores silvestres para levantar el ánimo al instante.',
  },

  // Ocasión: San Valentín
  {
    id: 'val1',
    name: 'Love Box Ultimate',
    price: 250,
    category: Category.SAN_VALENTIN,
    image: '',
    description: 'Cupido se lució: Caja gigante con globos de corazón, 24 rosas rojas, peluche mediano y tus chocolates favoritos.',
    popular: true
  },
  {
    id: 'val2',
    name: 'Desayuno Love You',
    price: 130,
    category: Category.SAN_VALENTIN,
    image: '',
    description: 'Amanecer con amor: Waffles en forma de corazón, fresas con chocolate y jugo natural en bandeja decorada.',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Carlos M.',
    comment: '¡Increíble! A mi novia le encantó el ramo buchón. Llegó puntual y las flores estaban fresquísimas. ¡Gracias!',
    image: ''
  },
  {
    id: 't2',
    name: 'Andrea R.',
    comment: 'El oso gigante es un sueño, súper suave y de calidad. La atención por WhatsApp fue A1. Recomiendo Detallitos Jany.',
    image: ''
  },
  {
    id: 't3',
    name: 'Luis P.',
    comment: 'Pedí la caja de chocolates para el aniversario y fue un éxito total. Presentación impecable. ¡Volveré a comprar!',
    image: ''
  }
];
