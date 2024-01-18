import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'router-demo';

  //String Interpolation
  position ='Coach'
  work_experience=10
  email = 'edith@mail.com'
  website = 'www.example.com'
  phone = '507-541-4567'

  //Image Interpolation/binding

  imageUrl: string = "assets/logo.png";
  imageW: number = 110;
  imageH: number = 100;
}
