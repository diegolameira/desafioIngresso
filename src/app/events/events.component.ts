import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Event } from './shared/event.model';
import { EventService } from './shared/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: Event[];
  genres: any[];
  selectedGenre: string = '';

  constructor(public eventService: EventService) {
  }

  ngOnInit() {
    this.updateItems();
  }

  updateItems(): void {
    this.eventService.getAllByCity(2)
      .subscribe(
        events => {

          const flatten = arr => arr.reduce(
            (acc, val) => acc.concat(
              Array.isArray(val) ? flatten(val) : val
            ),
            []
          );

          this.genres = flatten(events.map(item => item.genres)).filter((elem, pos, arr) => {
            return arr.indexOf(elem) == pos;
          }).sort();

          this.events = events;
        },
        error => this.handleError(error)
      );
  }

  onChangeGenre(genre) {

  }

  handleError(error) {
    // TODO: better handle with unobstrusive user interface like toaster
    // just skiping it for now for the sake of brevity
    console.log(error);
  }

}
