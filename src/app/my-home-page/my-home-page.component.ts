import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-home-page.component.html',
  styleUrl: './my-home-page.component.css'
})
export class MyHomePageComponent {

  name:string='ILYAS'
  isJoined:boolean=false;

  joinMethode(){
    this.isJoined = true
  }
}
