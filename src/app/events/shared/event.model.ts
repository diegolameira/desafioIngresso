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

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.synopsis;
  }

  getPosterPortrait() {
    return this.images.find(image => image.type == "PosterPortrait").url;
  }

  getPosterHorizontal() {
    return this.images.find(image => image.type == "PosterHorizontal").url;
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
