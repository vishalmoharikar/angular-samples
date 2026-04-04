import { Injectable } from '@angular/core';
import { BehaviorSubject, switchMap, map, shareReplay, of, catchError, debounceTime, distinctUntilChanged, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  // Inputs (Sources)
  private searchQuery$ = new BehaviorSubject<string>('');
  private selectedUserId$ = new BehaviorSubject<number | null>(null);

  // Data Streams
  // List of users filtered by search query
  getUsers(): Observable<any[]> {
    return this.searchQuery$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query =>
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
      ),
      map((users: any[]) =>
        users.filter(user => user.name.toLowerCase().includes(this.searchQuery$.value.toLowerCase()))
      ),
      shareReplay(1)
    );
  }

  // Posts for the selected user
  getUserPosts(): Observable<any[]> {
    return this.selectedUserId$.pipe(
      switchMap(id => {
        if (!id) return of([]);
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then(res => res.json());
      }),
      catchError(() => of([])), // Return empty array on error
      shareReplay(1)
    );
  }

  // Methods to push data into the sources
  updateSearch(query: string): void {
    this.searchQuery$.next(query);
  }

  selectUser(id: number): void {
    this.selectedUserId$.next(id);
  }
}
