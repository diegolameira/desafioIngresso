import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SessionService } from './shared/session.service';
import { SessionsComponent } from './sessions.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SessionsComponent
  ],
  exports: [
    SessionsComponent
  ],
  providers: [
    SessionService
  ]
})
export class SessionsModule { }
