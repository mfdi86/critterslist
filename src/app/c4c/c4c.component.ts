import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c4c',
  templateUrl: './c4c.component.html',
  styleUrls: ['./c4c.component.css']
})
export class C4cComponent {
  constructor(private router: Router){}
  posts: Post[] = [
    new Post('Lonely Racoon Seeks Night-time Cavorting', 'I\'m down to dig in any kind of garbage, if you catch my drift.', 3, 1),
    new Post('Play Possum', 'Vision-impaired w/f here to find my seeker.', 100, 2)

  ];

  goToDetailPage(clickedPost: Post) {
     this.router.navigate(['posts', clickedPost.id]);
   };
}
