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

  }

  delete(): void {

  }

  update(id: number): void {

  }

  reload(): void {
    this.contentList = new Observable();
    this.contentList = this.service.findAll();
  }

}
