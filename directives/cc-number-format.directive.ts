import { 
	Directive, 
	ElementRef, 
	Renderer,
	HostListener
} from '@angular/core';

import * as Payment from 'payment';

@Directive({ 
	selector: '[ccNum]' 
})
export class CCNumberFormatDirective {

	cardType: string;

	constructor(private renderer: Renderer, private el: ElementRef) {

		let element   = this.el.nativeElement;
		this.cardType = "";

    	// call lib functions
        Payment.fns.formatCardNumber(element);
        Payment.fns.restrictNumeric(element);
	}

	@HostListener('keypress', ['$event']) onKeypress(e) {
		
		let element 	  = this.el.nativeElement;
		let elementValue  = element.value;

		this.cardType = Payment.fns.cardType(elementValue);

		if ( this.cardType !== "" )
		{	
			this.renderer.setElementClass(element, this.cardType, false);
		}
		else
		{
			this.cardType = "";			
		}

	}

}