import { CalculatorService } from "./calculator.service";

/*import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});*/
describe('Calculator service',()=>{
  it('computes  factorial of 5 and gives 120',()=>{
    let service = new CalculatorService();
    let result=service.factorial(5);
    expect(result).toBe(120);
  });//end of it
  it('takes base and exponent and returns the power',()=>{
    let service = new CalculatorService();
    let result=service.power(2,5);
    expect(result).toEqual(32);
  });//end of it
});//end of describe
