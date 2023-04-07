import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }
  
  factorial(n:number)//function definition
  {
    let fact:any=1;//initializing variable
    for(var i=1;i<=n;i++){
      fact*=i;
    }
    return fact;

  }
  add(x:number,y:number){
    return x+y;
  }
  power(b:number,e:number){
    let result:any=1;
    for(var i=1;i<=e;i++){
      result*=b;
    }
    return result;
  }
  
}
