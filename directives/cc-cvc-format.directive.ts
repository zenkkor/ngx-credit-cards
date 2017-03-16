import { 
  Directive, 
  ElementRef, 
  Input 
} from '@angular/core';

import * as Payment from 'payment';

@Directive({ 
	selector: '[ccCvc]' 
})
export class CCCvcFormatDirective {
  
    constructor(private el: ElementRef) {
    	let element = this.el.nativeElement;

    	// call lib functions
    	Payment.formatCardCVC(element);
    	Payment.restrictNumeric(element);
    }

}