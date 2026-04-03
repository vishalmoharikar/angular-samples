import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-promise-comp',
  imports: [],
  templateUrl: './promise-comp.html',
  styleUrl: './promise-comp.scss',
})
export class PromiseComp {
  result = signal('');
  resultAwait = signal('');
  resultFetch = signal('');



  buyLaptop() {
    this.mimicBuyLaptop().then(successMessage => {
      console.log(successMessage + "Server call is Successful.");
      this.result.update(current => current + " Enjoy your new laptop!");
    }).catch(errorMessage => {
      console.error(errorMessage + "Server call is Failed.");
      this.result.set(errorMessage);
    });
  }

  async buyLaptopAsyncAwait() {
    try {
      const successMessage = await this.mimicBuyLaptop();
      console.log(successMessage + ' Server call is Successful.');
      this.resultAwait.set(successMessage + ' Enjoy your new laptop!');
    } catch (errorMessage) {
      console.error(errorMessage + ' Server call is Failed.');
      this.resultAwait.set(typeof errorMessage === 'string' ? errorMessage : 'Failed to purchase laptop.');
    }
  }

  async mimicBuyLaptop() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5; // Simulate success or failure
        if (isSuccess) {
          resolve('Laptop purchased successfully!');
        } else {
          reject('Failed to purchase laptop.');
        }
      }, 2000); // Simulate a delay of 2 seconds
    });
  }

  fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        this.resultFetch.set('Data fetched successfully!');
        return response.json();
      })
  }
}