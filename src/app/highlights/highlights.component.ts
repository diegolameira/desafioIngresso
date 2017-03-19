import {Component, OnInit} from '@angular/core';

import { HighlightService } from './shared/highlight.service';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {

  constructor(public highlightService: HighlightService) { }

  ngOnInit() {
  }

}
