import { Component } from '@angular/core';
import { LoginService } from './services/login/login.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title= 'angular-jest';
  
  isAuthed = false
  errorMessage = '';
  username = ''

  constructor(private readonly loginService: LoginService) {}

  handleLogin(username: string, password: string): void {
    this.errorMessage = '';

    this.loginService.login(username, password).pipe(
      take(1),
    ).subscribe((response) => {
      if (response.status === 200) {
        this.isAuthed = true
        this.username = username
      } else {
        this.errorMessage = response.message
      }
    })
  }

  logout(): void {
    console.log('logout');
    this.isAuthed = false;
  }
}
