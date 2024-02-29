import { Component } from '@angular/core';
import { HttpclientService } from '../httpclient.service';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent {
  title = 'HTTP Client Demonstration';
  httpusers: any;

  searchText: any;

  constructor(private httpClientList: HttpclientService) {
    this.httpClientList.getUsersRemotely()
    .subscribe((data: any) => {
      this.httpusers = data;
    });
  }

}
