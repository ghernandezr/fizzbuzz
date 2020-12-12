import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { RangeFormComponent } from './range-form.component';

describe('RangeFormComponent', () => {
  let component: RangeFormComponent;
  let fixture: ComponentFixture<RangeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [RangeFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form element', () => {
    const formElement = fixture.debugElement.query(By.css('form'));
    expect(formElement).toBeTruthy();
  });

  it('should have a two input elements', () => {
    const inputElements = fixture.debugElement.queryAll(By.css('input'));
    expect(inputElements.length).toBe(2);
  });

  it('should have a button element', () => {
    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement).toBeTruthy();
  });

  it('should disable button with invalid range', () => {
    component.rangeForm.get(['start']).setValue(20);
    component.rangeForm.get(['end']).setValue(2);

    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('.btn'));
    expect(buttonElement.nativeElement.disabled).toBeTruthy();
  });

  it('should disable button with values less or equals to zero', () => {
    component.rangeForm.get(['start']).setValue(-20);
    component.rangeForm.get(['end']).setValue(2);

    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(By.css('.btn'));
    expect(buttonElement.nativeElement.disabled).toBeTruthy();
  });
});
