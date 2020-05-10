import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html'
})
export class AllPostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('posts');
  }
}
