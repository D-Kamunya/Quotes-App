import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Quote} from '../quote'

@Component({
  selector: 'app-quotes-app-display',
  templateUrl: './quotes-app-display.component.html',
  styleUrls: ['./quotes-app-display.component.css']
})
export class QuotesAppDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  quotes:Quote[]=[
    new Quote(0,'Dennis Kamunya','Tupac Shakur','You know its funny when it rains it pours They got money for wars, but cant feed the poor.',0,0,new Date()),
    new Quote(1,'Spicy Dee','Notorious Biggie','Stay far from timid, only make moves when your heart’s in it, and live the phrase ‘sky’s the limit.',0,0,new Date())
  ]

  toggleQuoteText(index){
    this.quotes[index].showQuoteText=!this.quotes[index].showQuoteText
  }
  
  
}
