import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  subjectLine: string;
  bodyText: string;
  numUpvotes: number;
  numDownVotes: number;

  
  constructor() {
    this.subjectLine = "This is a post";
    this.bodyText =  "This is body test";
   }

  ngOnInit() {
  }

}
