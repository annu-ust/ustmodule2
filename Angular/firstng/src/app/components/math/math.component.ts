import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit,OnChanges,OnDestroy{
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log("from.....ngOnInit");
  }
  ngOnChanges(changes: SimpleChanges): void {
    //throw new Error('Method not implemented.');
    console.log("from.....ngOnChanges");
  }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
    console.log("from.....ngOnDestroy");
  }
  num:number=0;
  num1:number=0;
  num2:number=0;
  result1:any=0;
  result:number=0;
  result2:number=0;
  result3:number=0;
  result4:number=0;
  result5:number=0;
  result6:number=0;
  factorial():any//function definition
  {
    let fact=1;//initializing variable
    for(var i=1;i<=this.num;i++){
      fact*=i;
    }
    //return fact;
    this.result=fact;
  }
  add():any{
    this.result2=+this.num1 + +this.num2;
  }
  sub():any{
    if(this.num1>this.num2)
            this.result3=this.num1-this.num2;
    else
    this.result3=this.num2-this.num1;
  }
  mul():any{
    this.result4=this.num1*this.num2;
  }
  div():any{
    this.result5=this.num1/this.num2;
  }
  mod():any{
    this.result6=this.num1%this.num2;
  }
  oddEven():any{
    if(this.num1%2==0)
        this.result1="even";
    else
      this.result1="odd";
  }
}

