import { FormControl } from '@angular/forms';
import * as Payment from 'payment';

export class CreditCardValidator {

    /**
     * Validates a cc number
     * @param control
     */
    static validateCardNumber(control: FormControl) {

        if (control) {

            let isValid = Payment.fns.validateCardNumber(control.value);

            if (!isValid)
            {
                return {
                    "error": "CREDIT_CARD_INVALID"
                }
            }
        }     

        return null;   
    }

    /**
     * Validates the expiry date.
     * Breaks exp by "/" string and assumes that first array entry is month and second year
     * Also removes any spaces 
     * @param control
     */
    static validateCardExpiry(control: FormControl) {

        if (control) {

            let controlValue = control.value.split("/");
            let isValid      = false;

            if (controlValue.length > 1)
            {
                let month = controlValue[0].replace(/^\s+|\s+$/g,'');
                let year = controlValue[1].replace(/^\s+|\s+$/g,'');

                isValid = Payment.fns.validateCardExpiry(month, year);
            }

            if (!isValid)
            {
                return {
                    "error": "CREDIT_EXPIRY_INVALID"
                }
            }
        }     

        return null; 
    }

    /**
     * Validates cards CVC
     * Also removes any spaces 
     * @param control
     */
    static validateCardCvc(control: FormControl) {

        if (control) {

            let isValid = Payment.fns.validateCardCVC(control.value);

            if (!isValid)
            {
                return {
                    "error": "CREDIT_CARD_INVALID"
                }
            }
        }     

        return null;  
    }

}
