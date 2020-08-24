export class Quote {
  showQuoteText:boolean
  constructor(public id:number,public quoteSubmitter:string,public quoteAuthor:string,public quoteText:string,public quoteDate:Date){
    this.quoteDate=new Date()
    this.showQuoteText=false
  }
}
