import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Content } from 'src/app/model/content';
import { ContentService } from 'src/app/service/content.service';

@Component({
  selector: 'app-content-create',
  templateUrl: './content-create.component.html',
  styleUrls: ['./content-create.component.scss']
})
export class ContentCreateComponent implements OnInit {

  content: Content;
  submited: boolean;

  constructor(private service: ContentService, private router: Router) {
    this.content = new Content();
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
    this.service.save(this.content).subscribe(
      data => {
        console.log('Successfully sent a new content. Result: ' + data);
        // this.close();
      },
      error => {
        console.log(':: ERROR :: Failed to send a new content. Details: ' + error.message)
      }
    );
  }

  close(): void {
    this.router.navigate(['/content-list']);
  }

}
