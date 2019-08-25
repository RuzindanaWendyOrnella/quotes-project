
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
  new Quote('Words are pale shadows of forgotten names. As names have power, words have power. Words can light fires in the minds of men. Words can wring tears from the hardest hearts.' ,'Patrick Rothfuss','nick',new Date(2019,3,14)),
  new Quote('Imperfection is beauty, madness is genius and it is better to be absolutely ridiculous than absolutely boring.','Marilyn Monroe','cynthia',new Date(2010,4,20)),
  new Quote('We are all in the gutter, but some of us are looking at the stars.','Oscar Wilde','ornella',new Date(2000,3,14))
  ]
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
  }
  
  completeQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete the quote added by ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
}


