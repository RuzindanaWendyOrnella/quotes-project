import { Component, OnInit, Output, EventEmitter,AfterViewInit} from '@angular/core';
import * as $ from 'jquery';
import { Quote} from '../quote';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote("","");
  @Output() addQuote = new EventEmitter<Quote>();

  submitGoal(){
this.addQuote.emit(this.newQuote);

this.newQuote=new Quote("","");

// if(this.newQuote!==null){
  // $('button#me').click(function(){
  //   // $(alert('hi'));
  //   console.log(this.newQuote)

  // $('ul#list').append("<li><span>"+this.newQuote.name+"</span></li>");
  // });
// }

  }
  constructor() { }

  ngOnInit() {  }

}
