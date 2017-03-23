import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenrePipe } from './genre.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GenrePipe],
  exports: [GenrePipe]
})
export class GenreModule { }
