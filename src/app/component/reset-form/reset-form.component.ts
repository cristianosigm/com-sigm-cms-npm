import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordReset } from 'src/app/model/passwordreset';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-reset-form',
  templateUrl: './reset-form.component.html',
  styleUrls: ['./reset-form.component.scss']
})
export class ResetFormComponent implements OnInit {

  passwordReset: PasswordReset;

  constructor(private service: AccountService, private router: Router,  private activedRoute: ActivatedRoute) {
    this.passwordReset = new PasswordReset();
    this.passwordReset.email = this.activedRoute.snapshot.params.email;
    this.passwordReset.resetKey = this.activedRoute.snapshot.params.key;
  }

  ngOnInit(): void { }

  onSubmit(): void {
    // TODO: handle exception after POST and deal wuth the message using submited = true
    // this.submited = true;
    this.save();
    this.close();
  }

  save(): void {
    this.service.resetProcess(this.passwordReset).subscribe(
      data => {
        console.log('Successfully requested a password reset. Result: ' + data);
      },
      error => console.log(':: ERROR :: Failed to request a password reset. Details: ' + error.message),
    );
  }

  close(): void {
    this.router.navigate(['/home']);
  }

}
