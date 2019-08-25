
import { Component} from '@angular/core';
import { Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote='Welcome'
  quotes:Quote []=[
  new Quote('Words are pale shadows of forgotten names. As names have power, words have power. Words can light fires in the minds of men. Words can wring tears from the hardest hearts.' ,'Patrick Rothfuss','nick'),
  new Quote('Imperfection is beauty, madness is genius and it is better to be absolutely ridiculous than absolutely boring.','Marilyn Monroe','cynthia'),
  new Quote('We are all in the gutter, but some of us are looking at the stars.','Oscar Wilde','ornella')
  ]
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
  }
  
}
