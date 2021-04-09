import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-reset-request',
  templateUrl: './reset-request.component.html',
  styleUrls: ['./reset-request.component.scss']
})
export class ResetRequestComponent implements OnInit {

  email!: string;

  constructor(private service: AccountService, private router: Router) { }

  ngOnInit(): void { }

  onSubmit(): void {
    this.save();
    this.close();
  }

  save(): void {
    this.service.resetRequest(this.email).subscribe(
      data => {
        console.log('Successfully sent a new password reset request. Result: ' + data);
      },
      error => {
        console.log(':: ERROR :: Failed to send a new password reset request. Details: ' + error.message)
      }
    );
  }

  close(): void {
    // TODO: navigate to a Message page, passing the message to be displayed
    this.router.navigate(['/home']);
  }

}
