import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pwreset',
  templateUrl: './pwreset.component.html',
  styleUrls: ['./pwreset.component.scss']
})
export class PwresetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Password Reset submit');
  }

}
