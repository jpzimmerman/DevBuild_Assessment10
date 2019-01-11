import { Component, OnInit } from '@angular/core';
import { PostComponent } from "../post/post/post.component"
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-socialposts',
  templateUrl: './socialposts.component.html',
  styleUrls: ['./socialposts.component.scss']
})
export class SocialpostsComponent implements OnInit {

  postsList: Array<PostComponent> = [
  ]

  constructor() { 

  }

  ngOnInit() {
    for (var i = 0; i < 3; i++)
    {
      var tmp = new PostComponent();
      tmp.subjectLine = "This is post #" + (i + 1);
      tmp.bodyText = "This is body text";
      this.postsList.push(tmp);
    }
  }

}
