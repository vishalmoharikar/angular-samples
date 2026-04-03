import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  users = input<any[]>();               // replaces @Input
  selectUser = output<any>();           // replaces @Output

  onSelect(user: any) {
    this.selectUser.emit(user);
  }
}
