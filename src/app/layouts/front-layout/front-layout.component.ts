import { Component } from '@angular/core';
import { HeaderComponent } from '@/app/components/layout/header/header.component';
import { FooterComponent } from '@/app/components/layout/footer/footer.component';

@Component({
  selector: 'app-front-layout',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './front-layout.component.html',
  styleUrl: './front-layout.component.scss',
})
export class FrontLayoutComponent {}
