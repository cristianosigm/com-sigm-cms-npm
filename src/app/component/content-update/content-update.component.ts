import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Content } from 'src/app/model/content';
import { ContentService } from 'src/app/service/content.service';

@Component({
  selector: 'app-content-update',
  templateUrl: './content-update.component.html',
  styleUrls: ['./content-update.component.scss']
})
export class ContentUpdateComponent implements OnInit {

  id: number;
  content: Content;
  submited: boolean;

  constructor(private service: ContentService, private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
    this.content = new Content();
    this.submited = false;
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.content = new Content();
    this.service.findSingle(this.id)
      .subscribe(
        data => {
          console.log('Successfully loaded the prize.');
          this.content = data;
        }, error => console.log(':: ERROR :: Failed to load a prize based on its ID. Error: ' + error.message)
      );
  }

  onSubmit(): void {
    // TODO: handle exception after POST and deal wuth the message using submited = true
    // this.submited = true;
    this.save();
    this.close();
  }

  save(): void {
    this.service.save(this.content).subscribe(
      data => {
        console.log('Successfully updated an existing content. Result: ' + data);
        // this.close();
      },
      error => {
        console.log(':: ERROR :: Failed update content. Details: ' + error.message)
      }
    );
  }

  close(): void {
    this.router.navigate(['/content-list']);
  }

}
