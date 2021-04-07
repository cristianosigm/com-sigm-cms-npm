import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList!: Observable<User[]>;

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.reload();
  }

  create(): void {
    this.router.navigate(['/user-create']);
  }

  delete(id: number): void {
    this.service.delete(id)
      .subscribe(
        () => console.log('Successfully deleted the user.'),
        () => console.log(':: ERROR :: Failed to delete the user.')
      );
    this.reload();
  }

  update(id: number): void {
    this.router.navigate(['/user-update', id]);
  }

  reload(): void {
    this.userList = new Observable<User[]>();;
    this.userList = this.service.findAll();
  }

}
