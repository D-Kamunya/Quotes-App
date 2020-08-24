import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-text',
  templateUrl: './quote-text.component.html',
  styleUrls: ['./quote-text.component.css']
})
export class QuoteTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input () quote:Quote
  @Output () quoteDelete=new EventEmitter<boolean>()
 
  voteQuote(event){
    if(event==='up'){
      this.quote.upVotes+=1
    }else if(event==='down'){
      this.quote.downVotes+=1
    }
  }  

    delQuote(){
      if(confirm('Are you sure you want to delete?')){
        this.quoteDelete.emit(true)
      }else{
        this.quoteDelete.emit(false)
      }
    }

}
