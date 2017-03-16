import { 
  Directive, 
  ElementRef, 
  Input 
} from '@angular/core';

import * as Payment from 'payment';

@Directive({ 
	selector: '[ccExp]' 
})
export class CCExpiryFormatDirective {
  
    constructor(private el: ElementRef) {
    	let element = this.el.nativeElement;

    	// call lib functions
    	Payment.formatCardExpiry(element);
    	Payment.restrictNumeric(element);
    }

}