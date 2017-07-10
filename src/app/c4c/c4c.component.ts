import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-c4c',
  templateUrl: './c4c.component.html',
  styleUrls: ['./c4c.component.css'],
  providers: [PostService]
})
export class C4cComponent implements OnInit {
  posts: Post[];
  constructor(private router: Router, private postService: PostService){}

  ngOnInit(){
    this.posts = this.postService.getPosts();
    }

  goToDetailPage(clickedPost: Post) {
     this.router.navigate(['posts', clickedPost.id]);
   };
}
