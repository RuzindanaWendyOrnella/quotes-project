import { Component, OnInit, Output, EventEmitter,AfterViewInit} from '@angular/core';
import * as $ from 'jquery';
import { Quote} from '../quote';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote("","","",new Date());
  @Output() addQuote = new EventEmitter<Quote>();

  submitGoal(){
this.addQuote.emit(this.newQuote);

this.newQuote=new Quote("","","",new Date());
  }
  
  constructor() { }

  ngOnInit() {  }

}
