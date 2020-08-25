import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHgUpvotes]'
})
export class HgUpvotesDirective {

  constructor(private elem:ElementRef) { 
    elem.nativeElement.style.backgroundColor='rgba(240, 236, 36, 0.5)';

  }

  
}

