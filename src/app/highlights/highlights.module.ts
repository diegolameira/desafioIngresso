import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  ]
})
export class HighlightsModule { }
