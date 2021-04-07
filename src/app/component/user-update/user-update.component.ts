import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  id: number;
  user: User;
  submited: boolean;

  constructor(private service: UserService, private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
    this.user = new User();
    this.submited = false;
  }


  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.user = new User();
    this.service.findSingle(this.id)
      .subscribe(
        data => {
          console.log('Successfully loaded the user.');
          this.user = data;
        }, error => console.log(':: ERROR :: Failed to load an user based on its ID. Error: ' + error.message)
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
        console.log('Successfully sent a new user. Result: ' + data);
        // this.close();
      },
      error => console.log(':: ERROR :: Failed to send a new user. Details: ' + error.message)
    );
  }

  close(): void {
    this.router.navigate(['/user-list']);
  }

}
