import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilledButton } from './components/filled-button/filled-button.component';
import { LoginPage } from './pages/login-page/login-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FilledButton,LoginPage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GP-F';
}
