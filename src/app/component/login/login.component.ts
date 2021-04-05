import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login';
import { AuthenticationService } from 'src/app/security/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: Login;

  submitted: boolean;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.login = new Login();
    this.submitted = false;
  }

  ngOnInit(): void { }

  onSubmit(): void {
    this.submitted = true;
    this.authService.login(this.login).subscribe(
      user => {
        this.onLoginSuccess();
      },
      error => {
        console.log(':: ERROR :: Authentication failed: ' + error.message);
      }
    );
  }

  onLoginSuccess(): void {
    console.log('Login successful!');
    this.router.navigate(['/admin']);
  }

  onLoginFailure(): void {
    console.log('  login failed...  ');
  }
}
