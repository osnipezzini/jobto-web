import { Component, Input } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() title: string;

  constructor(private authService: AuthService) { }
  onLogout(): void {
    this.authService.doLogout();
  }
}
