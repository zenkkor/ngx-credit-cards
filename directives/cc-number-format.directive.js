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
var core_1 = require("@angular/core");
var Payment = require("payment");
var CCNumberFormatDirective = (function () {
    function CCNumberFormatDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
        var element = this.el.nativeElement;
        this.cardType = "";
        // call lib functions
        Payment.formatCardNumber(element);
        Payment.restrictNumeric(element);
    }
    CCNumberFormatDirective.prototype.onKeypress = function (e) {
        var element = this.el.nativeElement;
        var elementValue = element.value;
        this.cardType = Payment.fns.cardType(elementValue);
        if (this.cardType !== "") {
            this.renderer.setElementClass(element, this.cardType, false);
        }
        else {
            this.cardType = "";
        }
    };
    __decorate([
        core_1.HostListener('keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CCNumberFormatDirective.prototype, "onKeypress", null);
    CCNumberFormatDirective = __decorate([
        core_1.Directive({
            selector: '[ccNum]'
        }),
        __metadata("design:paramtypes", [core_1.Renderer, core_1.ElementRef])
    ], CCNumberFormatDirective);
    return CCNumberFormatDirective;
}());
exports.CCNumberFormatDirective = CCNumberFormatDirective;
//# sourceMappingURL=cc-number-format.directive.js.map