import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightService } from './shared/highlight.service';
import { HighlightsComponent } from './highlights.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightsComponent
  ],
  exports: [
    HighlightsComponent
  ],
  providers: [HighlightService]
})
export class HighlightsModule { }
