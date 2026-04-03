import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-observables',
  imports: [RouterOutlet],
  templateUrl: './observables.html',
  styleUrl: './observables.scss',
})
export class Observables {

  onFromEventClick($event: MouseEvent) {
    window.location.href = "/observable/from-event";
  }

  onIntervalClick() {
    window.location.href = "/observable/interval";
  }

  onCustomClick() {
    window.location.href = "/observable/custom";
  }
}
