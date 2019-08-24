<<<<<<< HEAD
import { Component, OnInit, Output, EventEmitter,AfterViewInit} from '@angular/core';
import * as $ from 'jquery';
import { Quote} from '../quote';

 

=======
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Quote} from '../quote';
>>>>>>> 9f05a7e1d6c7d8783bcc14e96395d4ee6a92e46c
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
<<<<<<< HEAD

this.newQuote=new Quote("","");

// if(this.newQuote!==null){
  // $('button#me').click(function(){
  //   // $(alert('hi'));
  //   console.log(this.newQuote)

  // $('ul#list').append("<li><span>"+this.newQuote.name+"</span></li>");
  // });
// }
=======
>>>>>>> 9f05a7e1d6c7d8783bcc14e96395d4ee6a92e46c
  }
  constructor() { }

  ngOnInit() {
<<<<<<< HEAD
    
  }
  }

=======
  }

}
>>>>>>> 9f05a7e1d6c7d8783bcc14e96395d4ee6a92e46c
