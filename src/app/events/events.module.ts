import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventService } from './shared/event.service';
import { EventsComponent } from './events.component';

@NgModule({
  imports: [
    CommonModule
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
