import { Component } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
productId: number=127676;
description="Apple Mac Book-Retina eye";
qty:number=100;
price:number=200000.00;
available:string='green';
delivery:string='red';
orderedQty:number=0;
orderedQty1:number=0;
isMember=false;
isQtyAvailable=this.qty>0;
items: Item[]=[new Item(1,'iphone-14','smart phone',70000,2,),
new Item(2,'Samsung-Galaxy','smart phone',60000,5),
new Item(3,'one-plus 11','smart phone',40000,3),
new Item(4,'iphone-13','smart phone',60000,8),
  
];





takeOrder():void{
  console.log(this.orderedQty);
  console.log('order placed.......!')
}
products = [
  {"id":1,"name":"Licensed Frozen Hat","description":"Incidunt et magni","price":"170.00","quantity":56840},
  {"id":2,"name":"Rustic Concrete Chicken","description":"Sint libero mollitia","price":"302.00","quantity":9358},
  {"id":3,"name":"Fantastic Metal Computer","description":"In consequuntur cupiditat","price":"279.00","quantity":90316},
  {"id":4,"name":"Refined Concrete Chair","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}
];
 
/*let item1=new Item();
item1.itemCode=1;
item1.name="iphone-14";
item1.description="Smart Phone";
item1.price=70000;
item1.qty=10;
items.push(item1);*/


}
