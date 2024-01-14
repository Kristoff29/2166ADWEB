import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_data_binding';
  clientName = 'Kristoffer Lacson';
  appliedCSS = 'green';
  notappliedCSS = false;
  myColor = 'red';

  clickCount=0;
  clickMe() {
    this.clickCount++;
  }

  resetClickCount(){
    this.clickCount = 0;
  }
}
