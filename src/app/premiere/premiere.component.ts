import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PremiereService } from './shared/premiere.service';

@Component({
  selector: 'app-premiere',
  templateUrl: './premiere.component.html',
  styleUrls: ['./premiere.component.scss']
})
export class PremiereComponent implements OnInit {
  events: any[];

  constructor(public premiereService: PremiereService) {
  }

  ngOnInit() {
    this.updateItems();
  }

  updateItems(): void {
    this.premiereService.getAllByCity(2)
      .subscribe(
        events => this.events = events.splice(0, 10),
        error => this.handleError(error)
      );
  }

  handleError(error) {
    // TODO: better handle with unobstrusive user interface like toaster
    // just skiping it for now for the sake of brevity
    console.log(error);
  }

}
