import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Container } from './users/container/container';
import { RxStreamsDemo } from './rxjs/rx-streams-demo/rx-streams-demo';
import { Header } from './includes/header/header';

@Component({
  selector: 'app-root',
  imports: [Container, RxStreamsDemo, RxStreamsDemo, Header, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('samples');
}
