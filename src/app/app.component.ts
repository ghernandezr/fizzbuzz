import { Component, OnInit } from '@angular/core';
import { FizzBuzzService } from './fizz-buzz.service';
import { IRange } from './model/range.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Fizz-Buzz';

  start: number;
  end: number;
  items: string[];

  constructor(private fizzBuzzService: FizzBuzzService) {}

  ngOnInit(): void {
    this.execute({ start: 1, end: 100 });
  }

  onRangeChange(data: IRange): void {
    this.execute(data);
  }

  execute(data: IRange): void {
    this.items = [];
    for (let i = data.start; i < data.end; i++) {
      const item = this.fizzBuzzService.fizzBuzzAlgorithm(i);
      this.items.push(item);
    }
  }
}
