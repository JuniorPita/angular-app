import { AfterViewInit, Component, VERSION } from '@angular/core';
import { TimerService } from './timer.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  name = 'Angular ' + VERSION.major;
  constructor(private timerService: TimerService) {}

  public ngAfterViewInit() {
    this.timerService.start();
  }
}
