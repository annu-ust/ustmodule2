import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
private url:string="https://jsonplaceholder.typicode.com/todos";

private data:any;//any can accept any   data type 
//every http request in angular is asynchronous.it means it makes a XHR-(also called Ajax )call.
//it cause page navigation
//by default every http request of web is synchronous.
constructor(private http: HttpClient){

}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
//http methods-get,post,put,delete
    this.http.get(this.url).subscribe((resData)=>{
      this.data=resData;
      console.log(this.data);
    });
  }
}
