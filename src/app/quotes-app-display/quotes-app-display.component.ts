import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Quote} from '../quote'

@Component({
  selector: 'app-quotes-app-display',
  templateUrl: './quotes-app-display.component.html',
  styleUrls: ['./quotes-app-display.component.css']
})
export class QuotesAppDisplayComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void {
     
  }

  showQuoteForm:boolean=false

  //quotes array with type Quote class
  quotes:Quote[]=[
    new Quote(0,'Dennis Kamunya','Tupac Shakur','You know its funny when it rains it pours They got money for wars, but cant feed the poor.',2,0,new Date('2020,08,09')),
    new Quote(1,'Spicy Dee','Notorious Biggie','Stay far from timid, only make moves when your heart’s in it, and live the phrase ‘sky’s the limit.',5,0,new Date('2019,10,21'))
  ]


  //variable to hold highest upvote value
  highVote:number;
  //Fn to calculate quote with highest upvote
  getHighestVote(){
    this.highVote=0

    this.quotes.forEach(quote=>{
      if(quote.upVotes > this.highVote){
        this.highVote = quote.upVotes
      }
    })
   return this.highVote
  }

  toggleQuoteText(index){
    this.quotes[index].showQuoteText=!this.quotes[index].showQuoteText
  }
  toggleQuoteForm(){
    this.showQuoteForm=! this.showQuoteForm
  }
  delQuote(event,index){
    if(event){
      this.quotes.splice(index,1)
    }
  }

  addQuote(newquote:Quote){
    
    let quoteId=this.quotes.length+1
    newquote.id=quoteId
    newquote.quoteDate=new Date()

    this.quotes.push(newquote)
    
  }

  
  
  
}
