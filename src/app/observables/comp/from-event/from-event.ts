import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  of, Subject, Subscription, concatMap, timer, map, take, toArray, from } from 'rxjs';

@Component({
  selector: 'app-from-event',
  imports: [FormsModule],
  templateUrl: './from-event.html',
  styleUrl: './from-event.scss',
})
export class FromEvent implements OnInit, OnDestroy {
  clickCount = 0;
  subject = new Subject<string>();
  messages: string[] = [];
  subscription: Subscription | undefined;
  fromSubscription: Subscription | undefined;
  ofSubscription: Subscription | undefined;
  toArraySubscription: Subscription | undefined;


  ofStreamValue = signal<string[]>([]);
  fromStreamValue = signal<string[]>([]);

  ofInputValue: string = '';
  fromInputValue: string = 'Sarth, Abhidnya, Anvi, Anusha';

  takeValue: number = 0;

  ngOnInit(): void {
    // Demo subscriber: receives every value emitted by subject$
    this.subscription = this.subject.subscribe(value => {
      const log = `Subscribers received: ${value}`;
      console.log(log);
      this.messages.push(log);
    });
  }

  ngOnDestroy(): void {
      this.unSubscribe();
  }

  unSubscribe() {
    this.subscription?.unsubscribe();
    this.fromSubscription?.unsubscribe();
    this.ofSubscription?.unsubscribe();
    this.toArraySubscription?.unsubscribe();  }

  btnClick() {
    this.clickCount += 1;
    const resultValue = `emit #${this.clickCount}`;
    this.subject.next(resultValue);


  }


  emitOfStream() {
    const inputValue = this.ofInputValue.trim();
    if (inputValue) {
      const values = inputValue.split(',').map(val => val.trim());
      this.ofStreamValue.set([]); // Clear previous values

      // Use of() to create a stream that emits values sequentially with delays
      this.ofSubscription = of(...values).pipe(
        concatMap((val, index) => timer(index * 2000).pipe(
          // Transform to the display format after delay
          map(() => `Emitted OF Stream value: ${val}`)
        ))
      ).subscribe(value => {
        this.ofStreamValue.update(current => [...current, value]);
      });
    }
  }

  emitFromStream() {

    // const values = ['Sarth', 'Abhidnya', 'Anvi', 'Anusha'];
    this.fromStreamValue.set([]); // Clear previous values

    this.fromSubscription =   from(this.fromInputValue.split(',').map(val => val.trim())).pipe(
      concatMap((val, index) => timer(index * 2000).pipe(
        // Transform to the display format after delay
        map(() => `Emitted FROM Stream value: ${val}`)
      ))
    ).subscribe(val => {
      this.fromStreamValue.update(current => [...current, val]);
    });

  }

  emitFromArrayStream() {
    const values = ['Sarth', 'Abhidnya', 'Anvi', 'Anusha'];
    this.fromStreamValue.set([]); // Clear previous values

    this.toArraySubscription = from(values).pipe(take(this.takeValue), toArray()).subscribe(val => {
      alert(`Emitted FROM Array Stream value: ${val.join(', ')}`);

    });

  }
}

