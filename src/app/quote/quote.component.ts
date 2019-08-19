import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor() {}

  quotes: Quote[] = [
    new Quote('Mzee Ngala', 'Msafara wa mamba haukosi burukenge ', new Date(2019, 7, 17), 'Moharick'),
    new Quote('Babu Juma', 'Kuongeza uzani kama nakudai ni madharau.', new Date(2019, 7, 17), 'Moharick'),
    new Quote('Bi Msafari', 'Kazi ya moyo ni kusukuma damu, kupenda ni kiherehere .', new Date(2019, 7, 17), 'Moharick'),
    new Quote('Said Bakari', 'Mke wa mtu sumu, mume wa mtu maziwa.', new Date(2019, 7, 17), 'Moharick'),
    new Quote('Zuleha', 'Kipara bila pesa ni kovu   ', new Date(2019, 7, 17), 'Moharick'),
  ];
  vote = 0;
  upVote = 0;

  addNewQuote(quote) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.date = new Date(quote.date);
    this.quotes.push(quote);
  }

  clickVote() {
    this.vote = this.vote += 1;
  }
  clickdownVote() {
    this.vote = this.vote += 1;
  }

  toggleQuote(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
  deleteQuotes(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`);

      if (toDelete) {
          this.quotes.splice(index, 1);
    }
    }
  }
  ngOnInit() { }


}
