import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList!: Observable<User[]>;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.reload();
  }

  create(): void {

  }

  delete(): void {

  }

  update(id: number): void {

  }

  reload(): void {
    this.userList = new Observable();
    this.userList = this.userService.findAll();
  }

}
