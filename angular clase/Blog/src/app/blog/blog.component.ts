import { Component, OnInit } from '@angular/core';
import {Post} from '../models/post.model';
import {PostService } from '../post.service';


@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [PostService]
})
export class BlogComponent implements OnInit {

  arrPosts: Post[]
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getAll().then((post) =>{
      this.arrPosts = post
    });
  }

}
