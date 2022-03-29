import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TimerService } from './timer.service';
import { DOCUMENT, SET_INTERVAL } from './tokens';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [
    TimerService,
    {
      provide: DOCUMENT,
      useValue: document,
    },
    {
      provide: SET_INTERVAL,
      useValue: setInterval,
    },
  ],
})
export class AppModule {}