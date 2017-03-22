export class Highlight {
  event: Event;
  showtimes: ShowTimes;

  constructor( fields?: any ) {
    if (fields) {
      Object.assign(this, fields);
    }
  }

  getTitle() {
    console.log('foi')
    return this.event.title;
  }

  getDescription() {
    return this.event.synopsis;
  }

  getPosterPortrait() {
    return this.event.images.find(image => image.type == "PosterPortrait").url;
  }

  getPosterHorizontal() {
    return this.event.images.find(image => image.type == "PosterHorizontal").url;
  }
}

interface Event {
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
}

interface Image {
  url: string;
  type: string;
}

interface Trailer {
  url: string;
  type: string;
}

interface ShowTimes {
  id: string;
  name: string;
  properties: any;
  rooms: Room[];
}

interface Room {

  name: string;
  type: string[];

  sessions: Session[];
}

interface Session {
  id: string;
  price: string;
  type: string[];
  date: Date;
  realDate: Date;
  time: string;
}

interface Date {
  localDate: string; // 2017-03-19T18:03:02.088Z
  dayOfWeek: string;
  dayAndMonth: string;
  hour: string;
  year: string;
}
