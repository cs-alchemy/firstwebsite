import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyHomePageComponent } from './my-home-page/my-home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyHomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
