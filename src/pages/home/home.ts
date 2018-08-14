import { Component } from '@angular/core';
// component
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // set counters
  likes : number = 100;
  dislikes : number = 25;
  // set classes
  likeClass: string = 'like-button';
  dislikeClass: string = 'dislike-button';
  // constructor
  constructor() {}
  // functions
  like() {
    // check current like class
    if (this.likeClass == 'like-button') {
      // set new like class
      this.likeClass = 'like-button liked';
      // add counter
      this.likes ++;
      // check current dislike class
      if (this.dislikeClass == 'dislike-button disliked') {
        // set new dislike class
        this.dislikeClass = 'dislike-button';
        // substract counter
        this.dislikes --;
      }
    } else {
      // set new like class
      this.likeClass = 'like-button';
      // substract counter
      this.likes --;
    }
  }
  dislike() {
    // check current dislike class
    if (this.dislikeClass == 'dislike-button') {
      // set new dislike class
      this.dislikeClass = 'dislike-button disliked';
      // add counter
      this.dislikes ++;
      // check current like class
      if (this.likeClass == 'like-button liked') {
        // set new like class
        this.likeClass = 'like-button';
        // substract counter
        this.likes --;
      }
    } else {
      // set new dislike class
      this.dislikeClass = 'dislike-button';
      // substract counter
      this.dislikes --;
    }
  }
}
