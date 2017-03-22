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

  constructor(public eventService: EventService) {
  }

  ngOnInit() {
    this.updateItems();
  }

  updateItems(): void {
    this.eventService.getAllByCity(2)
      .subscribe(
        events => {
          this.events = events.splice(0, 10);
        },
        error => this.handleError(error)
      );
  }

  handleError(error) {
    // TODO: better handle with unobstrusive user interface like toaster
    // just skiping it for now for the sake of brevity
    console.log(error);
  }

}
