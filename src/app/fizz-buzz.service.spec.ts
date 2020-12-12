import { TestBed } from '@angular/core/testing';

import { FizzBuzzService } from './fizz-buzz.service';

describe('FizzBuzzService', () => {
  let service: FizzBuzzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FizzBuzzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return number', () => {
    expect(service.fizzBuzzAlgorithm(14)).toBe('14');
  });

  it('should return Fizz', () => {
    expect(service.fizzBuzzAlgorithm(3)).toBe('Fizz');
  });

  it('should return Buzz', () => {
    expect(service.fizzBuzzAlgorithm(10)).toBe('Buzz');
  });

  it('should return FizzBuzz', () => {
    expect(service.fizzBuzzAlgorithm(15)).toBe('FizzBuzz');
  });
});
