import { Event } from '../../events/shared/event.model';
import { Theater } from '../../shared/theaters/theater.model';

export class Session {
  room: string;
  theater: Theater;
  event: Event;
  id: string;
  price: number;
  type: string[];
  date: Date;
  realDate: Date;
  time: string;

  constructor( fields?: any ) {
    if (fields) {
      Object.assign(this, fields);
    }
    this.theater = new Theater(this.theater);
    this.event = new Event(this.event);
  }
}

interface Date {
  localDate: string; // 2017-03-19T18:03:02.088Z
  dayOfWeek: string;
  dayAndMonth: string;
  hour: string;
  year: string;
}


export class SessionListItem {
  date: string;
  dateFormatted: string;
  dayOfWeek: string;
  movies: Movie[];

  constructor( fields?: any ) {
    if (fields) {
      Object.assign(this, fields);
    }
    this.movies = this.movies.map(movie => new Movie(movie));
  }
}

export class Movie {
  id: string;
  title: string;
  originalTitle: string;
  inPreSale: boolean;
  images: Image[];
  rooms: Room[];

  constructor( fields?: any ) {
    if (fields) {
      Object.assign(this, fields);
    }
    this.rooms = this.rooms.map(room => new Room(room));
  }

  getTitle() {
    return this.title;
  }

  getPosterPortrait() {
    return this.images.find(image => image.type === 'PosterPortrait').url;
  }

  getPosterHorizontal() {
    return this.images.find(image => image.type === 'PosterHorizontal').url;
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

class Room {
  name: string;
  type: string[];
  sessions: Session[];

  constructor( fields?: any ) {
    if (fields) {
      Object.assign(this, fields);
    }
    this.sessions = this.sessions.map(session => new Session(session));
  }

}
