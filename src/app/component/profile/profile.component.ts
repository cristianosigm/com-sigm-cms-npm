import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/security/authentication.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;
  submited: boolean;

  constructor(private service: UserService, private router: Router, private authService: AuthenticationService) {
    this.user = new User();
    this.submited = false;
  }


  ngOnInit(): void {
    this.load();
  }

  load(): void {
    const id = this.authService.curUserValue.id;
    this.user = new User();
    this.service.findSingle(id)
      .subscribe(
        data => {
          console.log('Successfully loaded the user profile.');
          this.user = data;
        }, error => console.log(':: ERROR :: Failed to load an user profile based on the current authenticated ID. Error: ' + error.message)
      );
  }

  onSubmit(): void {
    // TODO: handle exception after POST and deal wuth the message using submited = true
    // this.submited = true;
    this.save();
    this.close();
  }

  save(): void {
    this.service.update(this.user).subscribe(
      data => {
        // TODO: AFTER SUCCESSFULLY CHANGE PASSWORD, FORCE A LOGOUT!
        console.log('Successfully updated the user profile. Result: ' + data);
        // this.close();
      },
      error => console.log(':: ERROR :: Failed to update an user profile. Details: ' + error.message),
    );
  }

  close(): void {
    this.router.navigate(['/admin']);
  }

  onChangePassword(): void {
    if (!this.user.changePassword) {
      this.user.currentPassword = '';
      this.user.password = '';
      this.user.passwordConfirm = '';
    }
  }

}
