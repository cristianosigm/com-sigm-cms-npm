import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private router: Router) {
    this.user = new User();
  }

  ngOnInit(): void { }

  onSubmit(): void {
    this.save();
    this.close();
  }

  save(): void {
    this.userService.signup(this.user).subscribe(
      data => console.log('Successfully sent a new submission. Result: ' + data),
      error => console.log(':: ERROR :: Failed to send a new submission. Details: ' + error),
    );
  }

  close(): void {
    this.router.navigate(['/person-list']);
  }

}
