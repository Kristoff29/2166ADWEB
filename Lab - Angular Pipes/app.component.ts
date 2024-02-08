import { Component, OnInit } from '@angular/core';
import { Observable, map, interval } from 'rxjs';
@Component({

selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

//Date
time$: Observable<Date>;
title = 'midterm';
presentDate = new Date();
constructor() {
this.time$ = interval(1000).pipe (map(()=> new Date()));
}
//Currency
price : number = 20000;

//Decimal
decimalNum1: number = 8.7589623;
decimalNum2: number = 5.43;

//Slice
Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];

//Percent
percentNum1: number = 0.259;
percentNum2: number = 1.3495;

//Json Pipes
object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}}

 ngOnInit() {

}
}