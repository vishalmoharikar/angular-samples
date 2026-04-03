import { Component } from '@angular/core';
import { Observable, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-rx-streams-demo',
  imports: [],
  templateUrl: './rx-streams-demo.html',
  styleUrl: './rx-streams-demo.scss',
})
export class RxStreamsDemo {
  counter = 1;

  observableLog: number[] = [];
  subjectLog: number[] = [];
  behaviorLog: number[] = [];
  replayLog: number[] = [];

  // Cold Observable
  observable$ = new Observable<number>(observer => {
    observer.next(this.counter++);
  });

  subject$ = new Subject<number>();
  behavior$ = new BehaviorSubject<number>(0);
  replay$ = new ReplaySubject<number>(2);

  constructor() {
    // early subscribers
    this.subject$.subscribe(v => this.subjectLog.push(v));
    this.behavior$.subscribe(v => this.behaviorLog.push(v));
    this.replay$.subscribe(v => this.replayLog.push(v));
  }

  emit() {
    // Observable (new execution every time)
    this.observable$.subscribe(v => this.observableLog.push(v));

    this.subject$.next(this.counter);
    this.behavior$.next(this.counter);
    this.replay$.next(this.counter);

    // late subscribers (after 2 emits)
    if (this.counter === 3) {
      this.subject$.subscribe(v => this.subjectLog.push(v + 100));
      this.behavior$.subscribe(v => this.behaviorLog.push(v + 100));
      this.replay$.subscribe(v => this.replayLog.push(v + 100));
    }

    this.counter++;
  }
}
