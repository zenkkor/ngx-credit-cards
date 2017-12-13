import { 
  Directive, 
  ElementRef
} from '@angular/core';

import * as Payment from 'payment';

@Directive({ 
	selector: '[ccExp]' 
})
export class CCExpiryFormatDirective {
  
    constructor(private el: ElementRef) {
    	let element = this.el.nativeElement;

    	// call lib functions
        Payment.fns.formatCardExpiry(element);
        Payment.fns.restrictNumeric(element);
    }

}