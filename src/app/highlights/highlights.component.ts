import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { Highlight } from './shared/highlight.model';
import { HighlightService } from './shared/highlight.service';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {
  highlights: Highlight[];

  constructor(public highlightService: HighlightService) {
  }

  ngOnInit() {
    this.updateItems();
  }

  updateItems(): void {
    this.highlightService.getHighlights(2)
      .subscribe(
        highlights => this.highlights = highlights,
        error => this.handleError(error)
      );
  }

  handleError(error) {
    // TODO: better handle with unobstrusive user interface like toaster
    // just skiping it for now for the sake of brevity
    console.log(error);
  }

}
