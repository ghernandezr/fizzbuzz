import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FizzBuzzService {
  fizzBuzzAlgorithm(item: number): string {
    if (item % 15 === 0) {
      return 'FizzBuzz';
    }

    if (item % 3 === 0) {
      return 'Fizz';
    }

    if (item % 5 === 0) {
      return 'Buzz';
    }

    return String(item);
  }
}
