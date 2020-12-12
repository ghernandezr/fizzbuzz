import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TerminalComponent } from './terminal.component';

const items = [
  '1',
  '2',
  'fizz',
  '4',
  'buzz',
  'fizz',
  '7',
  '8',
  'fizz',
  'buzz',
  '11',
  'fizz',
  '13',
  '14',
  'fizzbuzz',
];

describe('TerminalComponent', () => {
  let component: TerminalComponent;
  let fixture: ComponentFixture<TerminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TerminalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalComponent);
    component = fixture.componentInstance;
    component.items = items;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show all items', () => {
    const terminalElements = fixture.debugElement.queryAll(By.css('pre'));
    expect(terminalElements.length).toBe(items.length);
  });

  it('should show all items', () => {
    const terminalElements = fixture.debugElement.queryAll(By.css('pre'));
    terminalElements.forEach((terminalElement: DebugElement, index) => {
      expect(terminalElement.nativeElement.innerHTML).toContain(items[index]);
    });
  });
});
