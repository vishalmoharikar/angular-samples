import { interval, of, Subscription, timer } from 'rxjs';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interval',
  imports: [FormsModule],
  templateUrl: './interval.html',
  styleUrl: './interval.scss',
})
export class Interval implements OnInit, OnDestroy {

  private intervalStream!: Subscription;
  private timerStream!: Subscription;
  intervalStreamValue = signal(0);
  timerStreamValue = signal(0);




  ngOnInit(): void {
    this.startStream();
  }

  private startStream() {
    this.intervalStream = interval(1000).subscribe(value => {
      this.intervalStreamValue.set(value);
    }, error => {
      console.error(error);
    }, () => {
      console.log('Stream completed');
    });

    this.timerStream = timer(5000, 1000).subscribe(() => {
      this.timerStreamValue.update(value => value + 1);
    });
  }

  onUnsubscribe() {
    this.intervalStream.unsubscribe();
  }
  onUnsubscribeTimer() {
    this.timerStream.unsubscribe();
  }



  ngOnDestroy(): void {
    this.intervalStream.unsubscribe();
    this.timerStream.unsubscribe();
  }

  refresh() {
    this.intervalStream.unsubscribe();
    this.timerStream.unsubscribe();
    this.intervalStreamValue.set(0);
    this.timerStreamValue.set(0);

    this.startStream();
  }



}
