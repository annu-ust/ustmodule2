import { Component } from '@angular/core';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  customer : Customer= new Customer();
  mySubmit(regForm : any){
    console.log("Form submitted ", regForm);
    console.log(this.customer);
  }
}