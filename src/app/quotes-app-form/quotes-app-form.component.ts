import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { from } from 'rxjs';
import {Quote} from '../quote'

@Component({
  selector: 'app-quotes-app-form',
  templateUrl: './quotes-app-form.component.html',
  styleUrls: ['./quotes-app-form.component.css']
})
export class QuotesAppFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newQuote:Quote=new Quote(0,"","","",0,0,new Date())

}
