import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogoComponent } from './shared/logo/logo.component';
import { HeaderComponent } from './shared/header/header.component';
import { HighlightsModule } from './highlights/highlights.module';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HighlightsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
