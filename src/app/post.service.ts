import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { C4CPOSTS } from './mock-c4c-posts';
import { JOBSPOSTS } from './mock-jobs-posts';

@Injectable()
export class PostService {

  constructor() { }

  getPosts() {
    return C4CPOSTS;
  }

  getPostById(postId: number){
    for (var i = 0; i <= C4CPOSTS.length - 1; i++) {
      if (C4CPOSTS[i].id === postId) {
        return C4CPOSTS[i];
      }
    }
  }

}
