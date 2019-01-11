import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  shown: boolean;
  postSubject: string;
  postBody: string;

  constructor() { }

  ngOnInit() {
  }

  hideForm()
  {
    this.shown=false;
  }

  showForm(){
    this.shown=true;
  }

}
