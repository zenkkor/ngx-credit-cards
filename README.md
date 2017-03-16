# ngx-credit-cards
A Credit Card Directives and Form Validators package for Angular X (2+).  

This is a wrapper around [Jesse Pollaks payment library](https://github.com/jessepollak/payment).

This library is AOT compatible.  

---  
# How to install?  

`$ npm install ngx-credit-cards --save`    

# How to use?

## Use the formatting directives  
You can use the formatting directives on your input fields.

1. Import the `NgXCreditCardsModule` in the desired module. This module exports all the directives, so you can use this in the `AppModule` or any other SharedModule.

```
import { NgModule } from '@angular/core';

import { NgXCreditCardsModule } from 'ngx-credit-cards';

import { AppComponent } from './app.component';

@NgModule({
    imports: [NgXCreditCardsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```  

2. Add one of three available directives to your inputs   
2.1  Credit Card Format Directive `ccNum`:  
```
<input type="tel" autocomplete="cc-number" id="cc-number" ccNum>
```
This directive will also apply a class to the input of the card type. It applies whatever class `cardType` returns.  

2.2 Credit Card Expiration Date Directive `ccExp`. It formats the date to type: `MM/YY` or `MM/YYYY` :
```
<input type="tel" type="tel" autocomplete="cc-exp" id="cc-exp" ccExp>
```
2.3 Credit Card Cvc Directive `ccCvc`:
```
<input type="tel" type="tel" autocomplete="cc-cvc" id="cc-csc" ccCvc>
```  

## Custom validators  

You can import and use custom FormGroup validators for Angular Reactive Forms. Validators are available for card number, cvc and expiration date.   

Import the custom validators to your component:
```
// These imports are just so you know what we use in the example below. Include if needed.
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


import { CreditCardValidator } from 'ngx-credit-cards';
```    
 
Now use the validators with your form group:
```

this.formBuilder = new FormBuilder();

this.formGroup = this.formBuilder.group({
  cardNumber: ['', [CreditCardValidator.validateCardNumber],
  cardExpDate: ['', [CreditCardValidator.validateCardExpiry],
  cardCvv: ['', [CreditCardValidator.validateCardCvc],
  cardName: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
});
```

An example of use with validators would be:
```
<div [ngClass]="{'invalid':mainForm.submitted && formGroup.controls.cardNumber.errors}">
	<input type="tel" formControlName="cardNumber" autocomplete="cc-number" id="cc-number" ccNum>
</div>
```  

That's it! Enjoy, contribute and have fun.  



