import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginHidden = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleLoginForm(): void {
    this.loginHidden = !this.loginHidden;
  }

}
