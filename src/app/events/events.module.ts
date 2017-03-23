import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EventService } from './shared/event.service';
import { EventsComponent } from './events.component';
import { GenreModule } from '../shared/genre/genre.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GenreModule
  ],
  declarations: [
    EventsComponent
  ],
  exports: [
    EventsComponent
  ],
  providers: [
    EventService
  ]
})
export class EventsModule { }
