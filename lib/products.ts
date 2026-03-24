export interface Product {
  slug: string
  name: string
  category: 'soggiorno' | 'cucina' | 'camera'
  categoryLabel: string
  shortDescription: string
  description: string
  price: string
  image: string
  images: string[]
  materials: string[]
  dimensions: { label: string; value: string }[]
  featured: boolean
  style: 'classico' | 'contemporaneo' | 'minimalista'
  material: 'legno' | 'marmo' | 'tessuto' | 'metallo'
}

export const products: Product[] = [
  {
    slug: 'divano-torino',
    name: 'Divano Torino',
    category: 'soggiorno',
    categoryLabel: 'Soggiorno',
    shortDescription: 'Divano su misura in lino naturale con struttura in legno massello di noce.',
    description: 'Il Divano Torino rappresenta l\'eccellenza dell\'artigianato italiano. Realizzato a mano da maestri artigiani con oltre trent\'anni di esperienza, combina comfort e raffinatezza in un pezzo destinato a durare generazioni.',
    price: 'Su richiesta',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80',
    ],
    materials: ['Lino naturale', 'Legno massello di noce', 'Piume d\'oca', 'Imbottitura in lattice naturale'],
    dimensions: [
      { label: 'Larghezza', value: '240 cm' },
      { label: 'Profondità', value: '95 cm' },
      { label: 'Altezza', value: '82 cm' },
      { label: 'Altezza seduta', value: '44 cm' },
    ],
    featured: true,
    style: 'classico',
    material: 'tessuto',
  },
  {
    slug: 'tavolo-lago',
    name: 'Tavolo Lago',
    category: 'soggiorno',
    categoryLabel: 'Soggiorno',
    shortDescription: 'Tavolo da pranzo in marmo Calacatta con base in ottone spazzolato.',
    description: 'Il Tavolo Lago è un pezzo scultorico che trasforma ogni sala da pranzo in un luogo di celebrazione. La lastra di marmo Calacatta, unica per venatura, poggia su una base artigianale in ottone spazzolato lavorata a mano.',
    price: 'Su richiesta',
    image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80',
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80',
    ],
    materials: ['Marmo Calacatta', 'Ottone spazzolato', 'Vetro temperato'],
    dimensions: [
      { label: 'Larghezza', value: '200 cm' },
      { label: 'Profondità', value: '100 cm' },
      { label: 'Altezza', value: '75 cm' },
    ],
    featured: true,
    style: 'contemporaneo',
    material: 'marmo',
  },
  {
    slug: 'libreria-venezia',
    name: 'Libreria Venezia',
    category: 'soggiorno',
    categoryLabel: 'Soggiorno',
    shortDescription: 'Libreria modulare in legno di rovere con dettagli in ottone.',
    description: 'La Libreria Venezia reinterpreta la tradizione veneziana delle tarsie lignee in chiave contemporanea. Ogni modulo è realizzato a mano in legno di rovere massiccio con incastri a coda di rondine.',
    price: 'Su richiesta',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    ],
    materials: ['Rovere massiccio', 'Ottone naturale', 'Vetro extrachiaro'],
    dimensions: [
      { label: 'Larghezza', value: '300 cm' },
      { label: 'Profondità', value: '35 cm' },
      { label: 'Altezza', value: '220 cm' },
    ],
    featured: false,
    style: 'classico',
    material: 'legno',
  },
  {
    slug: 'cucina-alba',
    name: 'Cucina Alba',
    category: 'cucina',
    categoryLabel: 'Cucina',
    shortDescription: 'Cucina su misura in legno di ciliegio con piani in pietra di Vicenza.',
    description: 'La Cucina Alba nasce dall\'incontro tra la tradizione artigianale italiana e le più moderne tecnologie di lavorazione. I frontali in legno di ciliegio invecchiato naturalmente si abbinano a piani in pietra di Vicenza levigata a mano.',
    price: 'Su richiesta',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
      'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80',
    ],
    materials: ['Legno di ciliegio', 'Pietra di Vicenza', 'Ottone brunito', 'Acciaio inox'],
    dimensions: [
      { label: 'Su misura', value: 'Configurabile' },
    ],
    featured: true,
    style: 'classico',
    material: 'legno',
  },
  {
    slug: 'cucina-forma',
    name: 'Cucina Forma',
    category: 'cucina',
    categoryLabel: 'Cucina',
    shortDescription: 'Cucina minimalista con frontali laccati opachi e piano in marmo nero Marquina.',
    description: 'Cucina Forma è un esercizio di sottrazione: ogni elemento ridotto all\'essenziale, ogni linea calibrata con precisione millimetrica. I frontali laccati opachi in bianco seta dialogano con il piano in marmo nero Marquina.',
    price: 'Su richiesta',
    image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=800&q=80',
    ],
    materials: ['MDF laccato opaco', 'Marmo nero Marquina', 'Acciaio spazzolato'],
    dimensions: [
      { label: 'Su misura', value: 'Configurabile' },
    ],
    featured: false,
    style: 'minimalista',
    material: 'marmo',
  },
  {
    slug: 'letto-firenze',
    name: 'Letto Firenze',
    category: 'camera',
    categoryLabel: 'Camera',
    shortDescription: 'Letto imbottito in velluto cipria con testiera intagliata a mano.',
    description: 'Il Letto Firenze è ispirato alla tradizione del mobile fiorentino del Cinquecento. La testiera, intagliata a mano da artigiani locali, presenta motivi geometrici che richiamano i mosaici dei pavimenti di Palazzo Vecchio.',
    price: 'Su richiesta',
    image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
    ],
    materials: ['Velluto cipria', 'Frassino intagliato', 'Rete a doghe in legno massello'],
    dimensions: [
      { label: 'Larghezza', value: '180 cm' },
      { label: 'Lunghezza', value: '210 cm' },
      { label: 'Altezza testiera', value: '130 cm' },
    ],
    featured: true,
    style: 'classico',
    material: 'tessuto',
  },
  {
    slug: 'armadio-siena',
    name: 'Armadio Siena',
    category: 'camera',
    categoryLabel: 'Camera',
    shortDescription: 'Armadio a quattro ante in legno di noce con specchi bisellati.',
    description: 'L\'Armadio Siena è pensato per chi considera il guardaroba un rituale quotidiano. Le ante in legno di noce con cornici a profilo morbido incorniciano specchi bisellati che amplificano la luce naturale.',
    price: 'Su richiesta',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    ],
    materials: ['Noce canaletto', 'Specchio bisellato', 'Interni in tessuto di lino'],
    dimensions: [
      { label: 'Larghezza', value: '240 cm' },
      { label: 'Profondità', value: '62 cm' },
      { label: 'Altezza', value: '240 cm' },
    ],
    featured: false,
    style: 'classico',
    material: 'legno',
  },
  {
    slug: 'comodino-alba',
    name: 'Comodino Alba',
    category: 'camera',
    categoryLabel: 'Camera',
    shortDescription: 'Comodino sospeso in legno di rovere con piano in marmo Botticino.',
    description: 'Il Comodino Alba si ispira all\'architettura razionalista italiana degli anni Cinquanta. La sospensione a parete libera il pavimento visivamente, mentre il piano in marmo Botticino aggiunge un tocco di lusso discreto.',
    price: 'Su richiesta',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    ],
    materials: ['Rovere naturale', 'Marmo Botticino', 'Struttura in acciaio verniciato'],
    dimensions: [
      { label: 'Larghezza', value: '50 cm' },
      { label: 'Profondità', value: '35 cm' },
      { label: 'Altezza', value: '25 cm' },
    ],
    featured: false,
    style: 'minimalista',
    material: 'marmo',
  },
  {
    slug: 'poltrona-como',
    name: 'Poltrona Como',
    category: 'soggiorno',
    categoryLabel: 'Soggiorno',
    shortDescription: 'Poltrona lounge in cashmere grigio perla con base in ottone lucido.',
    description: 'La Poltrona Como è il risultato di anni di ricerca sull\'ergonomia del relax. La seduta avvolgente in cashmere grigio perla accoglie il corpo con una leggerezza quasi impalpabile, mentre la base sottile in ottone lucido la solleva visivamente.',
    price: 'Su richiesta',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
    ],
    materials: ['Cashmere grigio perla', 'Ottone lucido', 'Imbottitura in piume d\'oca'],
    dimensions: [
      { label: 'Larghezza', value: '82 cm' },
      { label: 'Profondità', value: '88 cm' },
      { label: 'Altezza', value: '76 cm' },
    ],
    featured: false,
    style: 'contemporaneo',
    material: 'tessuto',
  },
  {
    slug: 'cucina-cortona',
    name: 'Cucina Cortona',
    category: 'cucina',
    categoryLabel: 'Cucina',
    shortDescription: 'Cucina rustica in legno di ulivo con piano in pietra serena toscana.',
    description: 'La Cucina Cortona porta nell\'abitare contemporaneo la sapienza costruttiva dei falegnami toscani. Ogni pezzo di legno di ulivo è selezionato a mano per la sua venatura unica e lavorato con tecniche tradizionali di falegnameria.',
    price: 'Su richiesta',
    image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80',
    ],
    materials: ['Legno di ulivo', 'Pietra serena', 'Ceramica artigianale', 'Ferro battuto'],
    dimensions: [
      { label: 'Su misura', value: 'Configurabile' },
    ],
    featured: false,
    style: 'classico',
    material: 'legno',
  },
]

export const categories = [
  {
    slug: 'soggiorno',
    label: 'Soggiorno',
    description: 'Divani, tavoli, librerie e complementi per il cuore della casa.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80',
  },
  {
    slug: 'cucina',
    label: 'Cucina',
    description: 'Cucine su misura che trasformano il cucinare in un atto di bellezza.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
  },
  {
    slug: 'camera',
    label: 'Camera',
    description: 'Letti, armadi e complementi per un riposo di qualità eccezionale.',
    image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=1200&q=80',
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getRelatedProducts(slug: string, category: string): Product[] {
  return products.filter((p) => p.category === category && p.slug !== slug).slice(0, 3)
}
