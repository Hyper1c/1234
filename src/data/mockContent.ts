export interface ContentItem {
  id: string;
  title: string;
  year: number;
  genre: string;
  image: string;
  type: 'movie' | 'series';
  rating?: number;
  synopsis?: string;
  duration?: string;
  cast?: string[];
}

export const mockMovies: ContentItem[] = [
  {
    id: '1',
    title: 'Avatar: El Camino del Agua',
    year: 2022,
    genre: 'Ciencia Ficción',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'movie',
    rating: 8.1,
    synopsis: 'Jake Sully vive con su nueva familia formada en el planeta de Pandora. Una vez que una amenaza familiar regresa para terminar lo que se empezó anteriormente, Jake debe trabajar con Neytiri y el ejército de la raza Navi para proteger su planeta.',
    duration: '3h 12min',
    cast: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver']
  },
  {
    id: '2',
    title: 'Top Gun: Maverick',
    year: 2022,
    genre: 'Acción',
    image: 'https://images.pexels.com/photos/163792/model-planes-airplanes-miniature-toy-163792.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'movie',
    rating: 8.7,
    synopsis: 'Después de más de 30 años de servicio como uno de los mejores aviadores de la Armada, Pete "Maverick" Mitchell está donde pertenece, empujando los límites como un valiente piloto de prueba.',
    duration: '2h 10min',
    cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly']
  },
  {
    id: '3',
    title: 'Black Panther: Wakanda Forever',
    year: 2022,
    genre: 'Superhéroes',
    image: 'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'movie',
    rating: 7.3,
    synopsis: 'La reina Ramonda, Shuri, M\'Baku, Okoye y las Dora Milaje luchan para proteger su nación de las potencias mundiales que intervienen tras la muerte del rey T\'Challa.',
    duration: '2h 41min',
    cast: ['Letitia Wright', 'Angela Bassett', 'Tenoch Huerta']
  },
  {
    id: '4',
    title: 'Spider-Man: No Way Home',
    year: 2021,
    genre: 'Superhéroes',
    image: 'https://images.pexels.com/photos/163036/mario-luigi-figures-funny-163036.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'movie',
    rating: 8.4,
    synopsis: 'Con la identidad de Spider-Man revelada, Peter pide ayuda al Doctor Strange. Cuando un hechizo sale mal, enemigos peligrosos de otros mundos comienzan a aparecer.',
    duration: '2h 28min',
    cast: ['Tom Holland', 'Zendaya', 'Benedict Cumberbatch']
  },
  {
    id: '5',
    title: 'Dune',
    year: 2021,
    genre: 'Ciencia Ficción',
    image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'movie',
    rating: 8.0,
    synopsis: 'Paul Atreides, un joven brillante y talentoso nacido con un gran destino que está más allá de su comprensión, debe viajar al planeta más peligroso del universo.',
    duration: '2h 35min',
    cast: ['Timothée Chalamet', 'Rebecca Ferguson', 'Oscar Isaac']
  },
  {
    id: '6',
    title: 'The Batman',
    year: 2022,
    genre: 'Acción',
    image: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'movie',
    rating: 7.8,
    synopsis: 'En su segundo año luchando contra el crimen, Batman descubre la corrupción en Gotham City que se conecta con su propia familia mientras se enfrenta a un asesino conocido como Riddler.',
    duration: '2h 56min',
    cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano']
  }
];

export const mockSeries: ContentItem[] = [
  {
    id: 's1',
    title: 'Stranger Things',
    year: 2022,
    genre: 'Ciencia Ficción',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'series',
    rating: 8.7,
    synopsis: 'Cuando un niño desaparece, su madre, un jefe de policía y sus amigos deben enfrentar fuerzas terroríficas para recuperarlo.',
    duration: '4 temporadas',
    cast: ['Millie Bobby Brown', 'Finn Wolfhard', 'David Harbour']
  },
  {
    id: 's2',
    title: 'The Crown',
    year: 2022,
    genre: 'Drama',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'series',
    rating: 8.6,
    synopsis: 'Sigue la vida política y los romances de la Reina Isabel II y los eventos que dieron forma a la segunda mitad del siglo XX.',
    duration: '6 temporadas',
    cast: ['Imelda Staunton', 'Jonathan Pryce', 'Lesley Manville']
  },
  {
    id: 's3',
    title: 'Wednesday',
    year: 2022,
    genre: 'Comedia',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'series',
    rating: 8.1,
    synopsis: 'Sigue a Wednesday Addams mientras navega por sus años como estudiante en la Academia Nevermore, intentando dominar su habilidad psíquica emergente.',
    duration: '1 temporada',
    cast: ['Jenna Ortega', 'Emma Myers', 'Enid Sinclair']
  },
  {
    id: 's4',
    title: 'House of the Dragon',
    year: 2022,
    genre: 'Fantasía',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'series',
    rating: 8.5,
    synopsis: 'Una precuela de Game of Thrones que se centra en la casa Targaryen 200 años antes de los eventos de la serie original.',
    duration: '1 temporada',
    cast: ['Paddy Considine', 'Emma D\'Arcy', 'Matt Smith']
  }
];

export const mockKidsContent: ContentItem[] = [
  {
    id: 'k1',
    title: 'Encanto',
    year: 2021,
    genre: 'Animación',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'movie',
    rating: 7.2,
    synopsis: 'Una niña colombiana puede ser la última esperanza de su familia cuando descubre que la magia que rodea el Encanto está en peligro.',
    duration: '1h 42min',
    cast: ['Stephanie Beatriz', 'María Cecilia Botero', 'John Leguizamo']
  },
  {
    id: 'k2',
    title: 'Turning Red',
    year: 2022,
    genre: 'Animación',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'movie',
    rating: 7.0,
    synopsis: 'Una niña de 13 años se convierte en un panda rojo gigante cada vez que se emociona demasiado.',
    duration: '1h 40min',
    cast: ['Rosalie Chiang', 'Sandra Oh', 'Ava Morse']
  }
];

export const mockComedyContent: ContentItem[] = [
  {
    id: 'c1',
    title: 'The Good Place',
    year: 2020,
    genre: 'Comedia',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'series',
    rating: 8.2,
    synopsis: 'Una mujer lucha por ser una mejor persona después de descubrir que está en el "lugar bueno".',
    duration: '4 temporadas',
    cast: ['Kristen Bell', 'Ted Danson', 'William Jackson Harper']
  },
  {
    id: 'c2',
    title: 'Brooklyn Nine-Nine',
    year: 2021,
    genre: 'Comedia',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    type: 'series',
    rating: 8.4,
    synopsis: 'Comedia sobre un grupo de detectives en una comisaría de Brooklyn.',
    duration: '8 temporadas',
    cast: ['Andy Samberg', 'Stephanie Beatriz', 'Terry Crews']
  }
];