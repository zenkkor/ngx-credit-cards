import { NgModule } from '@angular/core';

import { CCNumberFormatDirective } from './directives/cc-number-format.directive';
import { CCExpiryFormatDirective } from './directives/cc-expiry-format.directive';
import { CCCvcFormatDirective } from './directives/cc-cvc-format.directive';

import * as Payment from 'payment';

const CC_DIRECTIVES = [
	CCNumberFormatDirective,
	CCExpiryFormatDirective, 
	CCCvcFormatDirective
];

@NgModule({
  declarations: [CC_DIRECTIVES],
  exports: [CC_DIRECTIVES]
})
export class NgXCreditCardsModule {
}