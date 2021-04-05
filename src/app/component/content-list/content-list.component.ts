import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Content } from 'src/app/model/content';
import { ContentService } from 'src/app/service/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  contentList!: Observable<Content[]>;

  constructor(private service: ContentService, private router: Router) { }

  ngOnInit(): void {
    this.reload();
  }

  create(): void {
    this.router.navigate(['/content-create']);
  }

  delete(id: number): void {
    this.service.delete(id)
      .subscribe(
        () => console.log('Successfully deleted the content.'),
        () => console.log(':: ERROR :: Failed to delete the content.')
      );
    this.reload();
  }

  update(id: number): void {
    this.router.navigate(['/content-update', id]);
  }

  reload(): void {
    this.contentList = new Observable();
    this.contentList = this.service.findAll();
  }

}
