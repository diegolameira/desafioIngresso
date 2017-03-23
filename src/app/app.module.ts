import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TheatersService } from './shared/theaters/theaters.service';
import { LogoComponent } from './shared/logo/logo.component';
import { HeaderComponent } from './shared/header/header.component';
import { PremiereModule } from './premiere/premiere.module';
import { EventsModule } from './events/events.module';
import { HighlightsModule } from './highlights/highlights.module';
import { SessionsModule } from './sessions/sessions.module';
import { GenreModule } from './shared/genre/genre.module';

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
    PremiereModule,
    EventsModule,
    SessionsModule,
    HighlightsModule,
    GenreModule
  ],
  providers: [
    TheatersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
