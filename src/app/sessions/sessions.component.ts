import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Session, SessionListItem, Movie } from './shared/session.model';
import { SessionService } from './shared/session.service';
import { Theater } from '../shared/theaters/theater.model';
import { TheatersService } from '../shared/theaters/theaters.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {
  sessions: SessionListItem[];
  theaters: Theater[];
  selectedSession: SessionListItem;
  selectedTheater: Theater;
  movies: Movie[];

  constructor(public sessionService: SessionService, public theatersService: TheatersService) {
  }

  ngOnInit() {
    this.updateItems();
  }

  updateItems(): void {
    this.theatersService.getAllByCity(2)
      .subscribe(
        theaters => {
          this.theaters = theaters;
          // just for breavity
          this.selectedTheater = theaters[0];
          this.onChangeTheater(this.selectedTheater);
        },
        error => this.handleError(error)
      );
  }

  onChangeTheater(theater): void {
    this.sessionService.getAllByCityAndTheater(2, theater.id)
      .subscribe(
        sessions => {
          this.sessions = sessions;
          this.selectedSession = sessions[0];
          this.onChangeSession(this.selectedSession);
        },
        error => this.handleError(error)
      );
  }

  onChangeSession(session): void {
    this.movies = session.movies;
  }

  handleError(error) {
    // TODO: better handle with unobstrusive user interface like toaster
    // just skiping it for now for the sake of brevity
    console.log(error);
  }

}
