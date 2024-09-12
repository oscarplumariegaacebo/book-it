import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainSelectCompanyComponent } from "./core/main-select-company/main-select-company.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainSelectCompanyComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'book_it';
}
