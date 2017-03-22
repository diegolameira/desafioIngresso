export class Event {
  id: string;
  title: string;
  originalTitle: string;
  priority: number;
  contentRating: string;
  duration: string;
  rating: number;
  synopsis: string;
  cast: string;
  director: string;
  inPreSale: boolean;
  type: string;
  urlKey: string;
  city: string;
  siteURL: string;
  images: Image[];
  genres: string[];
  tags: string[];
  trailers: Trailer[];

  constructor( fields?: any ) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}


interface Image {
  url: string;
  type: string;
}

interface Trailer {
  url: string;
  type: string;
}
