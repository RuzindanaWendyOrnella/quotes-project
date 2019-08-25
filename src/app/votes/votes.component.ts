import { Component, OnInit ,Output,EventEmitter,Input} from '@angular/core';
import { Quote } from '@angular/compiler';

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
 @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
