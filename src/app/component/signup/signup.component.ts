import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from 'src/app/model/signup';
import { AccountService } from 'src/app/service/account.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signup: Signup;

  submited: boolean;

  constructor(private service: AccountService, private router: Router) {
    this.signup = new Signup();
    this.submited = false;
  }

  ngOnInit(): void { }

  onSubmit(): void {
    this.submited = true;
    this.save();
    this.close();
  }

  save(): void {
    this.service.signup(this.signup).subscribe(
      data => console.log('Successfully sent a new submission. Result: ' + data),
      error => console.log(':: ERROR :: Failed to send a new submission. Details: ' + error.message),
    );
  }

  close(): void {
    this.router.navigate(['/home']);
  }

}
