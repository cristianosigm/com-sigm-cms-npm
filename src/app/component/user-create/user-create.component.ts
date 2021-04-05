import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  user: User;
  submited: boolean;

  constructor(private service: UserService, private router: Router) {
    this.user = new User();
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
    this.service.create(this.user).subscribe(
      data => {
        console.log('Successfully sent a new user. Result: ' + data);
        // this.close();
      },
      error => console.log(':: ERROR :: Failed to send a new user. Details: ' + error.message),
    );
  }

  close(): void {
    this.router.navigate(['/user-list']);
  }

}
