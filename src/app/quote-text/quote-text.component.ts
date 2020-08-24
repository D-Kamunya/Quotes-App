import { Component, Input, OnInit } from '@angular/core';
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

}
