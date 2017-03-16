import { 
  Directive, 
  ElementRef, 
  Input 
} from '@angular/core';

@Directive({ selector: '[ccExp]' })

export class CCExpiryFormatDirective {
  
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }

}