import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  public counter: number = 0;

  incrementCounter(increaseValue: number) {
    this.counter += increaseValue;
  }

  decreseCounter(decreaseValue: number) {
    this.counter -= decreaseValue;
  }

  resetCounter( resetValue: number ) {
    this.counter = resetValue;
  }
}
