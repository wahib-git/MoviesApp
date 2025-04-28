export interface Film {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  year: number;
  genre: string;
  isNew: boolean;
  trailerUrl: string;
}

/* export class Film {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  year: number;
  genre: string;
  isNew: boolean;
  trailerUrl: string;
  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    rating: number,
    year: number,
    genre: string,
    isNew: boolean,
    trailerUrl: string

  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.rating = rating;
    this.year = year;
    this.genre = genre;
    this.isNew = isNew;
    this.trailerUrl = trailerUrl;
  }
} 
 export const FILMS: Film[] = [
  {
    id: 1,
    title: 'Captain America',
    description:
      'Steve Rogers becomes Captain America, battling the Red Skulland Hydra in World War II, while struggling to adapt to a changed world after being frozen for decades.',
    image: 'captain_america.jfif',
    rating: 8.5,
    year: 2008,
    genre: 'Action',
    isNew: true,
    trailerUrl: 'https://www.youtube.com/watch?v=JerVrbLldXw',
  },
  {
    id: 2,
    title: 'Back Action',
    description:
      'An elite team races against time to prevent an international conspiracy, facing betrayal and danger as they fight to save the world.',
    image: 'back_action.jfif',
    rating: 8.5,
    year: 2008,
    genre: 'Action',
    isNew: false,
    trailerUrl: 'https://www.youtube.com/watch?v=JerVrbLldXw',
  },
  {
    id: 3,
    title: 'The Sand Castle',
    description:
      'Stuck on a deserted island, a family battles the elements and an uncertain future, finding resilience in the harsh realities of survival.',
    image: 'the_sand_castle.jfif',
    rating: 8.5,
    year: 2008,
    genre: 'Action',
    isNew: true,
    trailerUrl: 'https://www.youtube.com/watch?v=JerVrbLldXw',
  },
  {
    id: 4,
    title: 'Ad Vitam',
    description: 'A superhero movie about a man who becomes a superhero',
    image: 'ad_vitam.jfif',
    rating: 8.5,
    year: 2008,
    genre: 'Action',
    isNew: true,
    trailerUrl: 'https://www.youtube.com/watch?v=JerVrbLldXw',
  },
  {
    id: 5,
    title: 'Captain America',
    description:
      'Steve Rogers becomes Captain America, battling the Red Skulland Hydra in World War II, while struggling to adapt to a changed world after being frozen for decades.',
    image: 'captain_america.jfif',
    rating: 8.5,
    year: 2008,
    genre: 'Action',
    isNew: true,
    trailerUrl: 'https://www.youtube.com/watch?v=JerVrbLldXw',
  },
  {
    id: 6,
    title: 'Back Action',
    description:
      'An elite team races against time to prevent an international conspiracy, facing betrayal and danger as they fight to save the world.',
    image: 'back_action.jfif',
    rating: 8.5,
    year: 2008,
    genre: 'Action',
    isNew: false,
    trailerUrl: 'https://www.youtube.com/watch?v=JerVrbLldXw',
  },
];
 */