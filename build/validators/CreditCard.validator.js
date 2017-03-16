"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Payment = require("payment");
var CreditCardValidator = (function () {
    function CreditCardValidator() {
    }
    /**
     * Validates a cc number
     * @param {FormControl} control
     */
    CreditCardValidator.validateCardNumber = function (control) {
        if (control) {
            var isValid = Payment.fns.validateCardNumber(control.value);
            if (!isValid) {
                return {
                    "error": "CREDIT_CARD_INVALID"
                };
            }
        }
        return null;
    };
    /**
     * Validates the expiry date.
     * Breaks exp by "/" string and assumes that first array entry is month and second year
     * Also removes any spaces
     * @param {FormControl} control [description]
     */
    CreditCardValidator.validateCardExpiry = function (control) {
        if (control) {
            var controlValue = control.value.split("/");
            var isValid = false;
            if (controlValue.length > 1) {
                var month = controlValue[0].replace(/^\s+|\s+$/g, '');
                var year = controlValue[1].replace(/^\s+|\s+$/g, '');
                isValid = Payment.fns.validateCardExpiry(month, year);
            }
            if (!isValid) {
                return {
                    "error": "CREDIT_EXPIRY_INVALID"
                };
            }
        }
        return null;
    };
    /**
     * Validates cards CVC
     * Also removes any spaces
     * @param {FormControl} control [description]
     */
    CreditCardValidator.validateCardCvc = function (control) {
        if (control) {
            var isValid = Payment.fns.validateCardCVC(control.value);
            if (!isValid) {
                return {
                    "error": "CREDIT_CARD_INVALID"
                };
            }
        }
        return null;
    };
    return CreditCardValidator;
}());
exports.CreditCardValidator = CreditCardValidator;
//# sourceMappingURL=CreditCard.validator.js.map