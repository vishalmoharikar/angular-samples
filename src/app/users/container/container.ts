import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { List } from '../list/list';

@Component({
  selector: 'app-container',
  imports: [List, FormsModule],
  templateUrl: './container.html',
  styleUrl: './container.scss',
})
export class Container {
  users = signal<any[]>([]);
  newUser = '';

  constructor() {
    // simulate API call
    this.users.set([
      { id: 1, name: 'Vishal' },
      { id: 2, name: 'Rahul' },
      { id: 3, name: 'Amit' }
    ]);
  }

  handleUserSelection(user: any) {
    console.log('Selected:', user);
  }

  addUser() {
    const a = { id: Date.now(), name: this.newUser };
    this.users.update(users => [...users, a]);
  }
}
