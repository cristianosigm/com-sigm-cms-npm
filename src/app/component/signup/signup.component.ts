import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from 'src/app/model/signup';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signup: Signup;
  submited: boolean;

<<<<<<< HEAD
  constructor(private accountService: AccountService, private router: Router) {
=======
  constructor(private service: AccountService, private router: Router) {
>>>>>>> 7947fa65953856b446bb3a788c0e34dd66091be1
    this.signup = new Signup();
    this.submited = false;
  }

  ngOnInit(): void { }

  onSubmit(): void {
    // TODO: handle exception after POST and deal wuth the message using submited = true
    // this.submited = true;
    this.save();
    this.close();
  }

  save(): void {
<<<<<<< HEAD
    // Username will be the user's email
    this.signup.username = this.signup.email;

    this.accountService.signup(this.signup).subscribe(
      data => console.log('Successfully sent a new submission. Result: ' + data),
=======
    this.service.signup(this.signup).subscribe(
      data => {
        console.log('Successfully sent a new submission. Result: ' + data);
        // this.close();
      },
>>>>>>> 7947fa65953856b446bb3a788c0e34dd66091be1
      error => console.log(':: ERROR :: Failed to send a new submission. Details: ' + error.message),
    );
  }

  close(): void {
    this.router.navigate(['/home']);
  }

}
