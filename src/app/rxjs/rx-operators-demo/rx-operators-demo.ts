import { Component } from '@angular/core';
import { Subject, switchMap, mergeMap, concatMap, exhaustMap, of, delay } from 'rxjs';

@Component({
  selector: 'app-rx-operators-demo',
  imports: [],
  templateUrl: './rx-operators-demo.html',
  styleUrl: './rx-operators-demo.scss',
})
export class RxOperatorsDemo {
  trigger$ = new Subject<number>();
  counter = 1;

  switchLog: string[] = [];
  mergeLog: string[] = [];
  concatLog: string[] = [];
  exhaustLog: string[] = [];

  constructor() {

    this.trigger$
      .pipe(switchMap(v => this.fakeApi(v)))
      .subscribe(v => this.switchLog.push(v));

    this.trigger$
      .pipe(mergeMap(v => this.fakeApi(v)))
      .subscribe(v => this.mergeLog.push(v));

    this.trigger$
      .pipe(concatMap(v => this.fakeApi(v)))
      .subscribe(v => this.concatLog.push(v));

    this.trigger$
      .pipe(exhaustMap(v => this.fakeApi(v)))
      .subscribe(v => this.exhaustLog.push(v));
  }

  trigger() {
    this.trigger$.next(this.counter++);
  }

  fakeApi(val: number) {
    return of(`Response ${val}`).pipe(delay(1000));
  }
}
