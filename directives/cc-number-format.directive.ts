import { 
	Directive, 
	ElementRef, 
	Input 
} from '@angular/core';

@Directive({ selector: '[ccNum]' })

export class CCNumberFormatDirective {

	constructor(el: ElementRef) {
		console.log("yo");

		el.nativeElement.style.backgroundColor = 'yellow';
	
	}

}