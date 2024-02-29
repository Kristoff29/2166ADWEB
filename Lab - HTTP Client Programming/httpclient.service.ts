import { Injectable } from '@angular/core';

//import httpCLient

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpclientService {
  ///invoke HttpClient as Dependency Injection
  constructor(private http:HttpClient) { }
  getUsersRemotely(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
