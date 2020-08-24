export class Quote {
  showQuoteText:boolean
  constructor(public id:number,public quoteSubmitter:string,public quoteAuthor:string,public quoteText:string,public upVotes:number,public downVotes:number, public quoteDate:Date){
    this.showQuoteText=false
  }
}
