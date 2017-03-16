"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const Payment = require("payment");
let CCCvcFormatDirective = class CCCvcFormatDirective {
    constructor(el) {
        this.el = el;
        let element = this.el.nativeElement;
        // call lib functions
        Payment.formatCardCVC(element);
        Payment.restrictNumeric(element);
    }
};
CCCvcFormatDirective = __decorate([
    core_1.Directive({
        selector: '[ccCvc]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], CCCvcFormatDirective);
exports.CCCvcFormatDirective = CCCvcFormatDirective;
//# sourceMappingURL=cc-cvc-format.directive.js.map