import { 
  Directive, 
  ElementRef, 
  Input 
} from '@angular/core';

@Directive({ selector: '[ccCvc]' })

export class CCCvcFormatDirective {
  
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }

}