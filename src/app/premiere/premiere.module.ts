import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PremiereService } from './shared/premiere.service';
import { PremiereComponent } from './premiere.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PremiereComponent
  ],
  exports: [
    PremiereComponent
  ],
  providers: [
    PremiereService
  ]
})
export class PremiereModule { }
