import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals-component',
  imports: [],
  templateUrl: './signals-component.html',
  styleUrl: './signals-component.scss',
})
export class SignalsComponent {

  currentUser = signal('Vishal');
  counter = signal(1);

  currentUserEffect = effect(() => {
    console.log(`User set to ${this.currentUser()} and the counter is ${this.counter()}`);
  });

  currentUserAndCountMessage = computed(() => {
    return `Current User: ${this.currentUser()} | Counter: ${this.counter()}`;
  });

  changeUser(name: string) {
    this.currentUser.set(name);
  }

  updateCounter() {
    this.counter.update(value => value + 1);
  }


}
