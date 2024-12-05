import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FrontLayoutComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'front_kuroco_angular';
}
