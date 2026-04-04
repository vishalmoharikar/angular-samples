import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { UserService } from '../service/userservice';

@Component({
  selector: 'app-usercomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usercomponent.html',
  styleUrl: './usercomponent.scss',
})
export class UserComponent implements OnInit {
  // We expose these directly to use with the async pipe
  userService = inject(UserService);

  users$!: Observable<any[]>;
  posts$!: Observable<any[]>;

  constructor() { }

  ngOnInit() {
    this.users$ = this.userService.getUsers();
    this.posts$ = this.userService.getUserPosts();
  }

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.userService.updateSearch(value);
  }

  onSelectUser(id: number) {
    this.userService.selectUser(id);
  }
}
