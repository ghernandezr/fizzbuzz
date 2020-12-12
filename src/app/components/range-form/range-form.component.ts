import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IRange, Range } from 'src/app/model/range.model';

@Component({
  selector: 'app-range-form',
  templateUrl: './range-form.component.html',
  styleUrls: ['./range-form.component.scss'],
})
export class RangeFormComponent implements OnInit, OnDestroy {
  @Output() rangeChange: EventEmitter<IRange> = new EventEmitter();

  rangeForm = this.fb.group({
    start: [1, [Validators.min(1)]],
    end: [100, [Validators.min(1)]],
  });

  isBadRange?: boolean;

  subscription: Subscription;

  constructor(private fb: FormBuilder) {
    this.isBadRange = false;
  }

  ngOnInit(): void {
    this.rangeForm.valueChanges.subscribe((values: IRange) => {
      this.isBadRange = values.start >= values.end;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  sendEvent(): void {
    const range: IRange = new Range();
    range.start = this.rangeForm.get(['start'])!.value;
    range.end = this.rangeForm.get(['end'])!.value;
    this.rangeChange.emit(range);
  }
}
