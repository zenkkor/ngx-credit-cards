"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var cc_number_format_directive_1 = require("./directives/cc-number-format.directive");
var cc_expiry_format_directive_1 = require("./directives/cc-expiry-format.directive");
var cc_cvc_format_directive_1 = require("./directives/cc-cvc-format.directive");
var CC_DIRECTIVES = [
    cc_number_format_directive_1.CCNumberFormatDirective,
    cc_expiry_format_directive_1.CCExpiryFormatDirective,
    cc_cvc_format_directive_1.CCCvcFormatDirective
];
var NgXCreditCardsModule = (function () {
    function NgXCreditCardsModule() {
    }
    NgXCreditCardsModule = __decorate([
        core_1.NgModule({
            declarations: [CC_DIRECTIVES],
            exports: [CC_DIRECTIVES]
        })
    ], NgXCreditCardsModule);
    return NgXCreditCardsModule;
}());
exports.NgXCreditCardsModule = NgXCreditCardsModule;
//# sourceMappingURL=ngxcreditcard.module.js.map