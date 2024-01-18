import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  //Using ngIf to toggle text display
  showText: boolean = false;

  toggleText(){
    this.showText = !this.showText;
  }
  staff = [ 
    { firstName: 'Ronald', lastName: 'Lacson', email: 'ronalndlacson@test.com', role: 'Father' }, 
    { firstName: 'Fatima', lastName: 'Lacson', email: 'fatimalacson@test.com', role: 'Mother' }, 
    { firstName: 'Katherine', lastName: 'Lacson', email: 'kathjoy@test.com', role: 'Sister' }, 
    { firstName: 'Ken', lastName: 'Lacson', email: 'philipken@test.com', role: 'Brother' } 
    ];

}
