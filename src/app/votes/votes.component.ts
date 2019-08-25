import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
 likes=0
 dislikes=0
 upvotes(){
   this.likes=this.likes+1
 }
 downvotes(){
   this.dislikes=this.dislikes+1
 }
  constructor() { }

  ngOnInit() {
  }

}
