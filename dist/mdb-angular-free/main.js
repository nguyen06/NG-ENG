(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js":
/*!***************************************************************!*\
  !*** ./angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js ***!
  \***************************************************************/
/*! exports provided: ButtonsModule, ButtonRadioDirective, ButtonCheckboxDirective, RippleModule, RippleDirective, WavesModule, WavesDirective, DeepModule, DeepDirective, InputsModule, MdbInputDirective, ActiveModule, ActiveDirective, InputValidateDirective, NavbarModule, BsDropdownConfig, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, DropdownModule, BsDropdownState, BsDropdownToggleDirective, CarouselComponent, CarouselConfig, CarouselModule, ChartsModule, BaseChartDirective, CollapseDirective, CollapseModule, ModalBackdropComponent, ModalBackdropOptions, ModalDirective, ModalModule, ModalOptions, MDBModalService, ModalContainerComponent, MDBModalRef, TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule, PopoverConfig, PopoverContainerComponent, PopoverModule, PopoverDirective, MDBRootModule, MDBBootstrapModule, ɵb1, ɵa1, ɵe1, ɵc1, ɵg1, ɵh1, ɵd1, ɵf1, ɵi1, ɵj1, ɵl1, ɵk1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return ButtonsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioDirective", function() { return ButtonRadioDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonCheckboxDirective", function() { return ButtonCheckboxDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleModule", function() { return RippleModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleDirective", function() { return RippleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WavesModule", function() { return WavesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WavesDirective", function() { return WavesDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeepModule", function() { return DeepModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeepDirective", function() { return DeepDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsModule", function() { return InputsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdbInputDirective", function() { return MdbInputDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveModule", function() { return ActiveModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveDirective", function() { return ActiveDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputValidateDirective", function() { return InputValidateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownConfig", function() { return BsDropdownConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownContainerComponent", function() { return BsDropdownContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownDirective", function() { return BsDropdownDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownMenuDirective", function() { return BsDropdownMenuDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownModule", function() { return DropdownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownState", function() { return BsDropdownState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDropdownToggleDirective", function() { return BsDropdownToggleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselConfig", function() { return CarouselConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseChartDirective", function() { return BaseChartDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseDirective", function() { return CollapseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapseModule", function() { return CollapseModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropComponent", function() { return ModalBackdropComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdropOptions", function() { return ModalBackdropOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDirective", function() { return ModalDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOptions", function() { return ModalOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBModalService", function() { return MDBModalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContainerComponent", function() { return ModalContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBModalRef", function() { return MDBModalRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipConfig", function() { return TooltipConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipContainerComponent", function() { return TooltipContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverConfig", function() { return PopoverConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverContainerComponent", function() { return PopoverContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return PopoverModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDirective", function() { return PopoverDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBRootModule", function() { return MDBRootModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDBBootstrapModule", function() { return MDBBootstrapModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb1", function() { return CHECKBOX_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa1", function() { return RADIO_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe1", function() { return SlideComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc1", function() { return EqualValidatorDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg1", function() { return LinksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh1", function() { return LogoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd1", function() { return NavbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf1", function() { return NavbarService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi1", function() { return NavlinksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj1", function() { return ComponentLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl1", function() { return OnChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk1", function() { return PositioningService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DeepDirective = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    function DeepDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    DeepDirective.prototype.ngAfterViewInit = function () {
        this.renderer.addClass(this.el.nativeElement, 'onFocusSelect');
    };
    return DeepDirective;
}());
DeepDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdbDeepDirective]',
            },] },
];
/** @nocollapse */
DeepDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DeepModule = /** @class */ (function () {
    function DeepModule() {
    }
    /**
     * @return {?}
     */
    DeepModule.forRoot = function () {
        return { ngModule: DeepModule, providers: [] };
    };
    return DeepModule;
}());
DeepModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [DeepDirective],
                exports: [DeepDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// TODO: config: activeClass - Class to apply to the checked buttons
var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ButtonCheckboxDirective; }),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
var ButtonCheckboxDirective = /** @class */ (function () {
    function ButtonCheckboxDirective() {
        /**
         * Truthy value, will be set to ngModel
         */
        this.btnCheckboxTrue = true;
        /**
         * Falsy value, will be set to ngModel
         */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.ngOnInit = function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
        /**
         * @return {?}
         */
        get: function () {
            return typeof this.btnCheckboxTrue !== 'undefined'
                ? this.btnCheckboxTrue
                : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
        /**
         * @return {?}
         */
        get: function () {
            return typeof this.btnCheckboxFalse !== 'undefined'
                ? this.btnCheckboxFalse
                : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} state
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.toggle = function (state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.writeValue = function (value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.setDisabledState = function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return ButtonCheckboxDirective;
}());
ButtonCheckboxDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[mdbCheckbox]', providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR] },] },
];
/** @nocollapse */
ButtonCheckboxDirective.propDecorators = {
    "btnCheckboxTrue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "btnCheckboxFalse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "state": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] },],
    "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ButtonRadioDirective; }),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioDirective = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    function ButtonRadioDirective(el, renderer) {
        this.renderer = renderer;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.radioElementsArray = [];
        this.el = el;
    }
    Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
        /**
         * @return {?}
         */
        get: function () {
            return this.mdbRadio === this.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} event
     * @return {?}
     */
    ButtonRadioDirective.prototype.onClick = function (event) {
        var _this = this;
        try {
            this.el.nativeElement.parentElement.childNodes.forEach(function (element) {
                _this.radioElementsArray.push(element);
            });
            this.radioElementsArray.forEach(function (element) {
                _this.renderer.removeClass(element, 'active');
            });
            this.renderer.addClass(event.target, 'active');
        }
        catch (error) {
        }
        if (this.el.nativeElement.attributes.disabled) {
            return;
        }
        if (this.uncheckable && this.mdbRadio === this.value) {
            this.value = undefined;
        }
        else {
            this.value = this.mdbRadio;
        }
        this.onTouched();
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.ngOnInit = function () {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.onBlur = function () {
        this.onTouched();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioDirective.prototype.writeValue = function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return ButtonRadioDirective;
}());
ButtonRadioDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[mdbRadio]', providers: [RADIO_CONTROL_VALUE_ACCESSOR] },] },
];
/** @nocollapse */
ButtonRadioDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
]; };
ButtonRadioDirective.propDecorators = {
    "mdbRadio": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "uncheckable": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "isActive": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] },],
    "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    /**
     * @return {?}
     */
    ButtonsModule.forRoot = function () {
        return { ngModule: ButtonsModule, providers: [] };
    };
    return ButtonsModule;
}());
ButtonsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [ButtonCheckboxDirective, ButtonRadioDirective],
                exports: [ButtonCheckboxDirective, ButtonRadioDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RippleDirective = /** @class */ (function () {
    /**
     * @param {?} el
     */
    function RippleDirective(el) {
        this.el = el;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    RippleDirective.prototype.click = function (event) {
        // event.stopPropagation();
        if (!this.el.nativeElement.classList.contains('disabled')) {
            var /** @type {?} */ button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            var /** @type {?} */ xPos = event.clientX - button.getBoundingClientRect().left;
            var /** @type {?} */ yPos = event.clientY - button.getBoundingClientRect().top;
            var /** @type {?} */ tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            var /** @type {?} */ ripple = button.appendChild(tmp);
            var /** @type {?} */ top = yPos + 'px';
            var /** @type {?} */ left = xPos + 'px';
            tmp.style.top = top;
            tmp.style.left = left;
            var /** @type {?} */ scale = 'scale(' + ((button.clientWidth / 100) * 3) + ') translate(0,0)';
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            var /** @type {?} */ duration = 750;
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    };
    /**
     * @param {?} button
     * @param {?} ripple
     * @return {?}
     */
    RippleDirective.prototype.removeRipple = function (button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout(function () {
            ripple.style.opacity = '0';
            setTimeout(function () {
                button.removeChild(ripple);
            }, 750);
        }, 200);
    };
    return RippleDirective;
}());
RippleDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdbRippleRadius]'
            },] },
];
/** @nocollapse */
RippleDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
]; };
RippleDirective.propDecorators = {
    "click": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RippleModule = /** @class */ (function () {
    function RippleModule() {
    }
    /**
     * @return {?}
     */
    RippleModule.forRoot = function () {
        return { ngModule: RippleModule, providers: [] };
    };
    return RippleModule;
}());
RippleModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [RippleDirective],
                exports: [RippleDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ActiveDirective = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} platformId
     */
    function ActiveDirective(el, renderer, platformId) {
        this.renderer = renderer;
        this.isBrowser = false;
        this.isClicked = false;
        this.el = null;
        this.elLabel = null;
        this.elIcon = null;
        this.el = el;
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId);
    }
    /**
     * @return {?}
     */
    ActiveDirective.prototype.onClick = function () {
        this.initComponent();
        this.isClicked = true;
    };
    /**
     * @return {?}
     */
    ActiveDirective.prototype.Click = function () {
        this.isClicked = true;
    };
    /**
     * @return {?}
     */
    ActiveDirective.prototype.onBlur = function () {
        this.checkValue();
        this.isClicked = false;
    };
    /**
     * @return {?}
     */
    ActiveDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.initComponent();
        setTimeout(function () {
            _this.checkValue();
        }, 0);
    };
    /**
     * @return {?}
     */
    ActiveDirective.prototype.ngAfterViewChecked = function () {
        this.initComponent();
        this.checkValue();
    };
    /**
     * @return {?}
     */
    ActiveDirective.prototype.initComponent = function () {
        var /** @type {?} */ inputId;
        var /** @type {?} */ inputP;
        if (this.isBrowser) {
            try {
                inputId = this.el.nativeElement.id;
            }
            catch (err) { }
            try {
                inputP = this.el.nativeElement.parentNode;
            }
            catch (err) { }
            this.elLabel = inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
            if (this.elLabel != null) {
                this.renderer.addClass(this.elLabel, 'active');
            }
            this.elIcon = inputP.querySelector('i') || false;
            if (this.elIcon) {
                this.renderer.addClass(this.elIcon, 'active');
            }
        }
    };
    /**
     * @return {?}
     */
    ActiveDirective.prototype.checkValue = function () {
        var /** @type {?} */ value = '';
        if (this.elLabel != null) {
            value = this.el.nativeElement.value || '';
            if (value === '') {
                this.renderer.removeClass(this.elLabel, 'active');
                if (this.elIcon) {
                    this.renderer.removeClass(this.elIcon, 'active');
                }
                // tslint:disable-next-line:max-line-length
            }
            if (value === '' && this.isClicked || value === '' && this.el.nativeElement.placeholder || value === '' && this.el.nativeElement.attributes.placeholder) {
                this.renderer.addClass(this.elLabel, 'active');
            }
        }
    };
    return ActiveDirective;
}());
ActiveDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdbActive]'
            },] },
];
/** @nocollapse */
ActiveDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
]; };
ActiveDirective.propDecorators = {
    "mdbActive": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focus', ['$event'],] },],
    "Click": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    "onBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InputValidateDirective = /** @class */ (function () {
    /**
     * @param {?} _elRef
     * @param {?} _renderer
     */
    function InputValidateDirective(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.value = '';
        this.minLength = '0';
        this.maxLength = '524288';
    }
    /**
     * @return {?}
     */
    InputValidateDirective.prototype.ngOnInit = function () {
        // Inititalise a new <span> wrong/right elements and render it below the host component.
        this.wrongTextContainer = this._renderer.createElement(this._elRef.nativeElement.parentElement, 'span');
        this._renderer.setElementClass(this.wrongTextContainer, 'inputVal', true);
        this._renderer.setElementClass(this.wrongTextContainer, 'text-danger', true);
        var /** @type {?} */ textWrong = this._elRef.nativeElement.getAttribute('data-error');
        this.wrongTextContainer.innerHTML = (textWrong ? textWrong : 'wrong');
        this._renderer.setElementStyle(this.wrongTextContainer, 'visibility', 'hidden');
        this.rightTextContainer = this._renderer.createElement(this._elRef.nativeElement.parentElement, 'span');
        this._renderer.setElementClass(this.rightTextContainer, 'inputVal', true);
        this._renderer.setElementClass(this.rightTextContainer, 'text-success', true);
        var /** @type {?} */ textSuccess = this._elRef.nativeElement.getAttribute('data-success');
        this.rightTextContainer.innerHTML = (textSuccess ? textSuccess : 'success');
        this._renderer.setElementStyle(this.rightTextContainer, 'visibility', 'hidden');
    };
    /**
     * @return {?}
     */
    InputValidateDirective.prototype.onBlur = function () {
        var /** @type {?} */ inputType = this._elRef.nativeElement.type;
        if (inputType === 'email') {
            if (this.customRegex) {
                var /** @type {?} */ re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    /*tslint:disable:max-line-length*/
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                }
            }
            else if (!this.customRegex) {
                /*tslint:disable:max-line-length*/
                var /** @type {?} */ re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                }
            }
        }
        else if (inputType === 'password') {
            if (this.customRegex) {
                var /** @type {?} */ re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    // tslint:disable-next-line:max-line-length
                }
                else if (this._elRef.nativeElement.value.match(re) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                    // tslint:disable-next-line:max-line-length
                }
                else if (!this._elRef.nativeElement.value.match(re) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
            else if (!this.customRegex) {
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    // tslint:disable-next-line:max-line-length
                }
                else if (this._elRef.nativeElement.value.match(/^(?=(.*\d){1})(.*\S)(?=.*[a-zA-Z\S])[0-9a-zA-Z\S]/g) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                    // tslint:disable-next-line:max-line-length
                }
                else if (!this._elRef.nativeElement.value.match(/^(?=(.*\d){1})(.*\S)(?=.*[a-zA-Z\S])[0-9a-zA-Z\S]/g) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
        else if (inputType === 'text') {
            if (this.customRegex) {
                var /** @type {?} */ re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    // tslint:disable-next-line:max-line-length
                }
                else if (this._elRef.nativeElement.value.match(re) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                    // tslint:disable-next-line:max-line-length
                }
                else if (!this._elRef.nativeElement.value.match(re) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
            else if (!this.customRegex) {
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    // tslint:disable-next-line:max-line-length
                }
                else if (this._elRef.nativeElement.value.match(/^[a-zA-Z0-9]+$/g) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                    // tslint:disable-next-line:max-line-length
                }
                else if (!this._elRef.nativeElement.value.match(/^[a-zA-Z0-9]+$/g) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
        else if (inputType === 'submit') {
            for (var /** @type {?} */ i = 0; i < this._elRef.nativeElement.parentElement.length; i++) {
                if (this._elRef.nativeElement.parentElement[i].value == null || this._elRef.nativeElement.parentElement[i].value === '') {
                    this._renderer.setElementClass(this._elRef.nativeElement.parentElement[i], 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement.parentElement[i], 'counter-success', false);
                }
                else if (!this._elRef.nativeElement.parentElement[i].value == null) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
        else if (inputType === 'tel') {
            if (this.customRegex) {
                var /** @type {?} */ re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length >= 8 && this._elRef.nativeElement.value.length <= 20) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length > 20) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
            else if (!this.customRegex) {
                var /** @type {?} */ re = /^(1[ \-\+]{0,3}|\+1[ -\+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-\.]{0,3}[0-9]{2,4}))?([ \-\.][0-9])?([ \-\.]{0,3}[0-9]{2,4}){2,3}$/;
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length >= 8 && this._elRef.nativeElement.value.length <= 20) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length > 20) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
        else if (inputType === 'number') {
            if (this.customRegex) {
                var /** @type {?} */ re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length > 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length < 1) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
            else if (!this.customRegex) {
                var /** @type {?} */ re = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:(\.|,)\d+)?$/;
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length > 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length < 1) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
    };
    return InputValidateDirective;
}());
InputValidateDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdbInputValidate]',
            },] },
];
/** @nocollapse */
InputValidateDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
]; };
InputValidateDirective.propDecorators = {
    "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "minLength": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['minLength',] },],
    "maxLength": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['maxLength',] },],
    "customRegex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['customRegex',] },],
    "onBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ActiveModule = /** @class */ (function () {
    function ActiveModule() {
    }
    /**
     * @return {?}
     */
    ActiveModule.forRoot = function () {
        return { ngModule: ActiveModule, providers: [] };
    };
    return ActiveModule;
}());
ActiveModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [ActiveDirective, InputValidateDirective],
                exports: [ActiveDirective, InputValidateDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MdbInputDirective = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} platformId
     */
    function MdbInputDirective(el, renderer, platformId) {
        this.renderer = renderer;
        this.minLength = '0';
        this.maxLength = '524288';
        this.mdbValidate = true;
        this.focusCheckbox = true;
        this.focusRadio = true;
        this.isBrowser = false;
        this.isClicked = false;
        this.el = null;
        this.elLabel = null;
        this.elIcon = null;
        this.el = el;
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId);
    }
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.onfocus = function () {
        try {
            this.renderer.addClass(this.elLabel, 'active');
            this.isClicked = true;
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.onBlur = function () {
        try {
            if (this.el.nativeElement.value === '') {
                this.renderer.removeClass(this.elLabel, 'active');
            }
            this.isClicked = false;
        }
        catch (error) {
        }
        try {
            // Validation:
            if (this.mdbValidate) {
                var /** @type {?} */ inputType = this.el.nativeElement.type;
                if (inputType === 'email') {
                    if (this.customRegex) {
                        var /** @type {?} */ re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                            /*tslint:disable:max-line-length*/
                        }
                        else if (re.test(this.el.nativeElement.value) && this.el.nativeElement.value.length >= this.minLength && this.el.nativeElement.value.length <= this.maxLength) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (!re.test(this.el.nativeElement.value) || this.el.nativeElement.value.length < this.minLength || this.el.nativeElement.value.length > this.maxLength) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                        }
                    }
                    else if (!this.customRegex) {
                        /*tslint:disable:max-line-length*/
                        var /** @type {?} */ re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (re.test(this.el.nativeElement.value) && this.el.nativeElement.value.length >= this.minLength && this.el.nativeElement.value.length <= this.maxLength) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (!re.test(this.el.nativeElement.value) || this.el.nativeElement.value.length < this.minLength || this.el.nativeElement.value.length > this.maxLength) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                        }
                    }
                }
                else if (inputType === 'password') {
                    if (this.customRegex) {
                        var /** @type {?} */ re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (this.el.nativeElement.value.match(re) && this.el.nativeElement.value.length >= this.minLength && this.el.nativeElement.value.length <= this.maxLength) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (!this.el.nativeElement.value.match(re) || this.el.nativeElement.value.length < this.minLength || this.el.nativeElement.value.length > this.maxLength) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                    else if (!this.customRegex) {
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (this.el.nativeElement.value.match(/^(?=(.*\d){1})(.*\S)(?=.*[a-zA-Z\S])[0-9a-zA-Z\S]/g) && this.el.nativeElement.value.length >= this.minLength && this.el.nativeElement.value.length <= this.maxLength) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (!this.el.nativeElement.value.match(/^(?=(.*\d){1})(.*\S)(?=.*[a-zA-Z\S])[0-9a-zA-Z\S]/g) || this.el.nativeElement.value.length < this.minLength || this.el.nativeElement.value.length > this.maxLength) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                }
                else if (inputType === 'text') {
                    if (this.customRegex) {
                        var /** @type {?} */ re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (this.el.nativeElement.value.match(re) && this.el.nativeElement.value.length >= this.minLength && this.el.nativeElement.value.length <= this.maxLength) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (!this.el.nativeElement.value.match(re) || this.el.nativeElement.value.length < this.minLength || this.el.nativeElement.value.length > this.maxLength) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                    else if (!this.customRegex) {
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (this.el.nativeElement.value.match(/^[a-zA-Z0-9]+$/g) && this.el.nativeElement.value.length >= this.minLength && this.el.nativeElement.value.length <= this.maxLength) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (!this.el.nativeElement.value.match(/^[a-zA-Z0-9]+$/g) || this.el.nativeElement.value.length < this.minLength || this.el.nativeElement.value.length > this.maxLength) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                }
                else if (inputType === 'submit') {
                    for (var /** @type {?} */ i = 0; i < this.el.nativeElement.parentElement.length; i++) {
                        if (this.el.nativeElement.parentElement[i].value == null || this.el.nativeElement.parentElement[i].value === '') {
                            this.renderer.addClass(this.el.nativeElement.parentElement[i], 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement.parentElement[i], 'counter-success');
                        }
                        else if (!this.el.nativeElement.parentElement[i].value == null) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                }
                else if (inputType === 'tel') {
                    if (this.customRegex) {
                        var /** @type {?} */ re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (re.test(this.el.nativeElement.value) && this.el.nativeElement.value.length >= 8 && this.el.nativeElement.value.length <= 20) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (!re.test(this.el.nativeElement.value) || this.el.nativeElement.value.length > 20) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                    else if (!this.customRegex) {
                        var /** @type {?} */ re = /^(1[ \-\+]{0,3}|\+1[ -\+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-\.]{0,3}[0-9]{2,4}))?([ \-\.][0-9])?([ \-\.]{0,3}[0-9]{2,4}){2,3}$/;
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (re.test(this.el.nativeElement.value) && this.el.nativeElement.value.length >= 8 && this.el.nativeElement.value.length <= 20) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (!re.test(this.el.nativeElement.value) || this.el.nativeElement.value.length > 20) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                }
                else if (inputType === 'number') {
                    if (this.customRegex) {
                        var /** @type {?} */ re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (re.test(this.el.nativeElement.value) && this.el.nativeElement.value.length > 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (!re.test(this.el.nativeElement.value) || this.el.nativeElement.value.length < 1) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                    else if (!this.customRegex) {
                        var /** @type {?} */ re = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:(\.|,)\d+)?$/;
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (re.test(this.el.nativeElement.value) && this.el.nativeElement.value.length > 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (!re.test(this.el.nativeElement.value) || this.el.nativeElement.value.length < 1) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                }
            }
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.onchange = function () {
        try {
            this.checkValue();
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.ngOnInit = function () {
        if (this.mdbValidate) {
            // Inititalise a new <span> wrong/right elements and render it below the host component.
            // this.wrongTextContainer = this.renderer.createElement(this.el.nativeElement.parentElement, 'span');
            this.wrongTextContainer = this.renderer.createElement('span');
            this.renderer.addClass(this.wrongTextContainer, 'inputVal');
            this.renderer.addClass(this.wrongTextContainer, 'text-danger');
            this.renderer.appendChild(this.el.nativeElement.parentElement, this.wrongTextContainer);
            var /** @type {?} */ textWrong = this.el.nativeElement.getAttribute('data-error');
            this.wrongTextContainer.innerHTML = (textWrong ? textWrong : 'wrong');
            this.renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
            // this.rightTextContainer = this.renderer.createElement(this.el.nativeElement.parentElement, 'span');
            this.rightTextContainer = this.renderer.createElement('span');
            this.renderer.addClass(this.rightTextContainer, 'inputVal');
            this.renderer.addClass(this.rightTextContainer, 'text-success');
            this.renderer.appendChild(this.el.nativeElement.parentElement, this.rightTextContainer);
            var /** @type {?} */ textSuccess = this.el.nativeElement.getAttribute('data-success');
            this.rightTextContainer.innerHTML = (textSuccess ? textSuccess : 'success');
            this.renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.ngAfterViewInit = function () {
        var /** @type {?} */ type = this.el.nativeElement.type;
        if (this.focusCheckbox && type === 'checkbox') {
            this.renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
        if (this.focusRadio && type === 'radio') {
            this.renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.ngAfterViewChecked = function () {
        this.initComponent();
        this.checkValue();
        // tslint:disable-next-line:max-line-length
        if (this.el.nativeElement.tagName === 'MDB-COMPLETER' && this.el.nativeElement.getAttribute('ng-reflect-model') == null && !this.isClicked) {
            this.renderer.removeClass(this.elLabel, 'active');
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.initComponent = function () {
        var /** @type {?} */ inputId;
        var /** @type {?} */ inputP;
        if (this.isBrowser) {
            try {
                inputId = this.el.nativeElement.id;
            }
            catch (err) { }
            try {
                inputP = this.el.nativeElement.parentNode;
            }
            catch (err) { }
            this.elLabel = inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
            if (this.elLabel && this.el.nativeElement.value !== '') {
                this.renderer.addClass(this.elLabel, 'active');
            }
            this.elIcon = inputP.querySelector('i') || false;
            if (this.elIcon) {
                this.renderer.addClass(this.elIcon, 'active');
            }
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.checkValue = function () {
        var /** @type {?} */ value = '';
        if (this.elLabel != null) {
            value = this.el.nativeElement.value || '';
            if (value === '') {
                this.renderer.removeClass(this.elLabel, 'active');
                if (this.elIcon) {
                    this.renderer.removeClass(this.elIcon, 'active');
                }
                // tslint:disable-next-line:max-line-length
            }
            if (value === '' && this.isClicked ||
                value === '' && this.el.nativeElement.placeholder ||
                value === '' && this.el.nativeElement.attributes.placeholder) {
                this.renderer.addClass(this.elLabel, 'active');
            }
            if (this.el.nativeElement.getAttribute('ng-reflect-model') != null) {
                if (this.el.nativeElement.tagName === 'MDB-COMPLETER' && this.el.nativeElement.getAttribute('ng-reflect-model').length !== 0) {
                    this.renderer.addClass(this.elLabel, 'active');
                }
            }
        }
    };
    return MdbInputDirective;
}());
MdbInputDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdbInputDirective]'
            },] },
];
/** @nocollapse */
MdbInputDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
]; };
MdbInputDirective.propDecorators = {
    "mdbInputDirective": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mdbInputDirective',] },],
    "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['placeholder',] },],
    "minLength": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['minLength',] },],
    "maxLength": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['maxLength',] },],
    "customRegex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['customRegex',] },],
    "mdbValidate": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mdbValidate',] },],
    "focusCheckbox": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['focusCheckbox',] },],
    "focusRadio": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['focusRadio',] },],
    "onfocus": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focus',] },],
    "onBlur": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur',] },],
    "onchange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['change',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EqualValidatorDirective = /** @class */ (function () {
    /**
     * @param {?} validateEqual
     * @param {?} reverse
     */
    function EqualValidatorDirective(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidatorDirective.prototype, "isReverse", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this.reverse) {
                return false;
            }
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} c
     * @return {?}
     */
    EqualValidatorDirective.prototype.validate = function (c) {
        var /** @type {?} */ setToNullValue = null;
        // self value (e.g. retype password)
        var /** @type {?} */ v = c.value;
        // control value (e.g. password)
        // const e: any = c.root.get(this.validateEqual);
        var /** @type {?} */ e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value) {
            return { validateEqual: false };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) {
                e.setErrors(null);
            }
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        // return null;
        return setToNullValue;
    };
    return EqualValidatorDirective;
}());
EqualValidatorDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdb-validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
                providers: [
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return EqualValidatorDirective; }), multi: true }
                ]
            },] },
];
/** @nocollapse */
EqualValidatorDirective.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['validateEqual',] },] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"], args: ['reverse',] },] },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InputsModule = /** @class */ (function () {
    function InputsModule() {
    }
    /**
     * @return {?}
     */
    InputsModule.forRoot = function () {
        return { ngModule: InputsModule, providers: [] };
    };
    return InputsModule;
}());
InputsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [MdbInputDirective, EqualValidatorDirective],
                exports: [MdbInputDirective, EqualValidatorDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.navbarLinkClicks = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    /**
     * @return {?}
     */
    NavbarService.prototype.getNavbarLinkClicks = function () {
        return this.navbarLinkClicks.asObservable();
    };
    /**
     * @return {?}
     */
    NavbarService.prototype.setNavbarLinkClicks = function () {
        this.navbarLinkClicks.next();
    };
    return NavbarService;
}());
NavbarService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LinksComponent = /** @class */ (function () {
    /**
     * @param {?} _navbarService
     */
    function LinksComponent(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    LinksComponent.prototype.ngAfterContentInit = function () {
        var /** @type {?} */ that = this;
        setTimeout(function () {
            that.links.forEach(function (element) {
                element.nativeElement.onclick = function () {
                    that._navbarService.setNavbarLinkClicks();
                };
            });
        }, 0);
    };
    /**
     * @return {?}
     */
    LinksComponent.prototype.ngAfterViewInit = function () {
    };
    return LinksComponent;
}());
LinksComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'links',
                template: "\n        <ng-content></ng-content>\n    ",
            },] },
];
/** @nocollapse */
LinksComponent.ctorParameters = function () { return [
    { type: NavbarService, },
]; };
LinksComponent.propDecorators = {
    "links": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], descendants: true },] },],
    "linkClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    return LogoComponent;
}());
LogoComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'logo',
                template: "\n  <ng-content></ng-content>\n  "
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NavbarComponent = /** @class */ (function () {
    /**
     * @param {?} renderer
     * @param {?} _navbarService
     */
    function NavbarComponent(renderer, _navbarService) {
        var _this = this;
        this.renderer = renderer;
        this._navbarService = _navbarService;
        this.containerInside = true;
        this.shown = false;
        this.duration = 350;
        this.collapse = false;
        this.showClass = false;
        this.collapsing = false;
        // tslint:disable-next-line:max-line-length
        this.subscription = this._navbarService.getNavbarLinkClicks().subscribe(function (navbarLinkClicks) { _this.closeNavbarOnClick(navbarLinkClicks); });
    }
    /**
     * @param {?} navbarLinkClicks
     * @return {?}
     */
    NavbarComponent.prototype.closeNavbarOnClick = function (navbarLinkClicks) {
        this.navbarLinkClicks = navbarLinkClicks;
        if (this.showClass) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngOnInit = function () {
        var /** @type {?} */ isDoubleNav = this.SideClass.split(' ');
        if (isDoubleNav.indexOf('double-nav') !== -1) {
            this.doubleNav = true;
        }
        else {
            this.doubleNav = false;
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        /* bugfix - bez tego sypie ExpressionChangedAfterItHasBeenCheckedError -
            https://github.com/angular/angular/issues/6005#issuecomment-165951692 */
        setTimeout(function () {
            _this.height = _this.el.nativeElement.scrollHeight;
            _this.collapse = true;
            if (!_this.containerInside) {
                var /** @type {?} */ childrens = Array.from(_this.container.nativeElement.children);
                childrens.forEach(function (child) {
                    // this.navbar.nativeElement.append(child);
                    _this.renderer.appendChild(_this.navbar.nativeElement, child);
                    _this.container.nativeElement.remove();
                });
            }
            if (_this.el.nativeElement.children.length === 0) {
                _this.el.nativeElement.remove();
            }
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NavbarComponent.prototype.toggle = function (event) {
        event.preventDefault();
        if (!this.collapsing) {
            if (this.shown) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.show = function () {
        var _this = this;
        this.shown = true;
        this.collapse = false;
        this.collapsing = true;
        setTimeout(function () {
            _this.renderer.setStyle(_this.el.nativeElement, 'height', _this.height + 'px');
        }, 10);
        setTimeout(function () {
            _this.collapsing = false;
            _this.collapse = true;
            _this.showClass = true;
        }, this.duration);
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.hide = function () {
        var _this = this;
        this.shown = false;
        this.collapse = false;
        this.showClass = false;
        this.collapsing = true;
        setTimeout(function () {
            _this.renderer.setStyle(_this.el.nativeElement, 'height', '0px');
        }, 10);
        setTimeout(function () {
            _this.collapsing = false;
            _this.collapse = true;
        }, this.duration);
    };
    Object.defineProperty(NavbarComponent.prototype, "displayStyle", {
        /**
         * @return {?}
         */
        get: function () {
            // if(!this.containerInside) {
            //  return 'flex';
            // } else {
            return '';
            // }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    NavbarComponent.prototype.onResize = function (event) {
        var _this = this;
        var /** @type {?} */ breakpoit = 0;
        if (this.SideClass.includes('navbar-expand-xl')) {
            breakpoit = 1200;
        }
        else if (this.SideClass.includes('navbar-expand-lg')) {
            breakpoit = 992;
        }
        else if (this.SideClass.includes('navbar-expand-md')) {
            breakpoit = 768;
        }
        else if (this.SideClass.includes('navbar-expand-sm')) {
            breakpoit = 576;
        }
        else {
            breakpoit = event.target.innerWidth + 1;
        }
        if (event.target.innerWidth < breakpoit) {
            if (!this.shown) {
                this.collapse = false;
                this.renderer.setStyle(this.el.nativeElement, 'height', '0px');
                this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
                setTimeout(function () {
                    _this.height = _this.el.nativeElement.scrollHeight;
                    _this.collapse = true;
                    _this.renderer.setStyle(_this.el.nativeElement, 'opacity', '');
                }, 4);
            }
        }
        else {
            this.collapsing = false;
            this.shown = false;
            this.showClass = false;
            this.collapse = true;
            this.renderer.setStyle(this.el.nativeElement, 'height', '');
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.onScroll = function () {
        if (this.navbar.nativeElement.classList.contains('scrolling-navbar')) {
            if (window.pageYOffset > 120) {
                this.renderer.addClass(this.navbar.nativeElement, 'top-nav-collapse');
            }
            else {
                this.renderer.removeClass(this.navbar.nativeElement, 'top-nav-collapse');
            }
        }
    };
    return NavbarComponent;
}());
NavbarComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'mdb-navbar',
                template: "<nav class=\"{{SideClass}}\" #nav> <div [ngClass]=\"{'container': containerInside}\" [ngStyle]=\"{'display': displayStyle}\" #container> <ng-content select=\"logo\"></ng-content> <ng-content *ngIf=\"this.doubleNav == true\" select=\"navlinks\"></ng-content> <div *ngIf=\"this.doubleNav == false\"> <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggle($event)\" mdbWavesEffect *ngIf=\"this.el.nativeElement.children.length !== 0\"> <span class=\"navbar-toggler-icon\"> </span> </button> </div> <div #navbar [style.height]=\"height\" class=\"navbar-collapse collapse\" [ngClass]=\"{'collapse': collapse, 'show': showClass, 'collapsing': collapsing}\"> <ng-content select=\"links\"></ng-content> </div> </div> </nav> ",
            },] },
];
/** @nocollapse */
NavbarComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: NavbarService, },
]; };
NavbarComponent.propDecorators = {
    "SideClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "containerInside": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "el": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['navbar',] },],
    "mobile": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['mobile',] },],
    "navbar": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['nav',] },],
    "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['container',] },],
    "onResize": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize', ['$event'],] },],
    "onScroll": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:scroll', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NavlinksComponent = /** @class */ (function () {
    /**
     * @param {?} _navbarService
     */
    function NavlinksComponent(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    NavlinksComponent.prototype.ngAfterContentInit = function () {
        var /** @type {?} */ that = this;
        setTimeout(function () {
            that.links.forEach(function (element) {
                element.nativeElement.onclick = function () {
                    that._navbarService.setNavbarLinkClicks();
                };
            });
        }, 0);
    };
    /**
     * @return {?}
     */
    NavlinksComponent.prototype.ngAfterViewInit = function () {
    };
    return NavlinksComponent;
}());
NavlinksComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'navlinks',
                template: "\n        <ng-content></ng-content>\n    ",
            },] },
];
/** @nocollapse */
NavlinksComponent.ctorParameters = function () { return [
    { type: NavbarService, },
]; };
NavlinksComponent.propDecorators = {
    "links": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], descendants: true },] },],
    "linkClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [NavbarComponent, LinksComponent, LogoComponent, NavlinksComponent],
                exports: [NavbarComponent, LinksComponent, LogoComponent, NavlinksComponent],
                providers: [NavbarService]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = /** @class */ (function () {
    /**
     * @param {?} open
     * @param {?=} close
     */
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    /**
     * @return {?}
     */
    Trigger.prototype.isManual = function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
/**
 * @param {?} triggers
 * @param {?=} aliases
 * @return {?}
 */
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    var /** @type {?} */ trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var /** @type {?} */ parsedTriggers = trimmedTriggers.split(/\s+/)
        .map(function (trigger) { return trigger.split(':'); })
        .map(function (triggerPair) {
        var /** @type {?} */ alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    });
    var /** @type {?} */ manualTriggers = parsedTriggers
        .filter(function (triggerPair) { return triggerPair.isManual(); });
    if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
    }
    return parsedTriggers;
}
/**
 * @param {?} renderer
 * @param {?} target
 * @param {?} triggers
 * @param {?} showFn
 * @param {?} hideFn
 * @param {?} toggleFn
 * @return {?}
 */
function listenToTriggers(renderer, target, triggers, showFn, hideFn, toggleFn) {
    var /** @type {?} */ parsedTriggers = parseTriggers(triggers);
    var /** @type {?} */ listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    //  parsedTriggers.forEach((trigger: Trigger) => {
    parsedTriggers.forEach(function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, function () {
                toggleFn();
            }));
            // listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, function () {
            showFn();
        }), 
        // renderer.listen(target, trigger.open, showFn),
        renderer.listen(target, trigger.close, function () {
            hideFn();
        }));
        // renderer.listen(target, trigger.close, hideFn));
    });
    return function () { listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); }); };
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var ContentRef = /** @class */ (function () {
    /**
     * @param {?} nodes
     * @param {?=} viewRef
     * @param {?=} componentRef
     */
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
/**
 * @template T
 */
var ComponentLoader = /** @class */ (function () {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * \@internal
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _injector
     * @param {?} _componentFactoryResolver
     * @param {?} _ngZone
     * @param {?} _applicationRef
     * @param {?} _posService
     */
    function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBeforeHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._providers = [];
    }
    Object.defineProperty(ComponentLoader.prototype, "isShown", {
        /**
         * @return {?}
         */
        get: function () {
            return !!this._componentRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} compType
     * @return {?}
     */
    ComponentLoader.prototype.attach = function (compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    };
    /**
     * @param {?=} container
     * @return {?}
     */
    ComponentLoader.prototype.to = function (container) {
        this.container = container || this.container;
        return this;
    };
    /**
     * @param {?=} opts
     * @return {?}
     */
    ComponentLoader.prototype.position = function (opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = /** @type {?} */ (opts.target) || this._elementRef;
        return this;
    };
    /**
     * @param {?} provider
     * @return {?}
     */
    ComponentLoader.prototype.provide = function (provider) {
        this._providers.push(provider);
        return this;
    };
    /**
     * @param {?=} opts
     * @return {?}
     */
    ComponentLoader.prototype.show = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content);
            var /** @type {?} */ injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].resolveAndCreate(this._providers, this._injector);
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) {
                this.container.nativeElement
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (this.container === 'body' && typeof document !== 'undefined') {
                //  document.querySelector(this.container as string)
                document.querySelector(/** @type {?} */ (this.container))
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (!this.container && this._elementRef && this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement
                    .appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            if (this._contentRef.componentRef) {
                this._innerComponent = this._contentRef.componentRef.instance;
                this._contentRef.componentRef.changeDetectorRef.markForCheck();
                this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }
            this._componentRef.changeDetectorRef.markForCheck();
            this._componentRef.changeDetectorRef.detectChanges();
            this.onShown.emit(this._componentRef.instance);
        }
        return this._componentRef;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.hide = function () {
        if (!this._componentRef) {
            return this;
        }
        this.onBeforeHide.emit(this._componentRef.instance);
        var /** @type {?} */ componentEl = this._componentRef.location.nativeElement;
        componentEl.parentNode.removeChild(componentEl);
        if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
        }
        this._componentRef.destroy();
        if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        }
        // this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._componentRef.hostView));
        //
        // if (this._contentRef.viewRef && this._viewContainerRef.indexOf(this._contentRef.viewRef) !== -1) {
        //   this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        // }
        this._contentRef = null;
        this._componentRef = null;
        this.onHidden.emit();
        return this;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.toggle = function () {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.dispose = function () {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    };
    /**
     * @param {?} listenOpts
     * @return {?}
     */
    ComponentLoader.prototype.listen = function (listenOpts) {
        var _this = this;
        this.triggers = listenOpts.triggers || this.triggers;
        listenOpts.target = listenOpts.target || this._elementRef;
        listenOpts.show = listenOpts.show || (function () { return _this.show(); });
        listenOpts.hide = listenOpts.hide || (function () { return _this.hide(); });
        listenOpts.toggle = listenOpts.toggle || (function () { return _this.isShown
            ? listenOpts.hide()
            : listenOpts.show(); });
        this._unregisterListenersFn = listenToTriggers(this._renderer, listenOpts.target.nativeElement, this.triggers, listenOpts.show, listenOpts.hide, listenOpts.toggle);
        return this;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.getInnerComponent = function () {
        return this._innerComponent;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype._subscribePositioning = function () {
        var _this = this;
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone
            .onStable.subscribe(function () {
            if (!_this._componentRef) {
                return;
            }
            _this._posService.position({
                element: _this._componentRef.location,
                target: _this._elementRef,
                attachment: _this.attachment,
                appendToBody: _this.container === 'body'
            });
        });
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype._unsubscribePositioning = function () {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    };
    /**
     * @param {?} content
     * @return {?}
     */
    ComponentLoader.prototype._getContentRef = function (content) {
        if (!content) {
            return new ContentRef([]);
        }
        if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            if (this._viewContainerRef) {
                var /** @type {?} */ viewRef_1 = this._viewContainerRef.createEmbeddedView(content);
                return new ContentRef([viewRef_1.rootNodes], viewRef_1);
            }
            var /** @type {?} */ viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            var /** @type {?} */ contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            var /** @type {?} */ modalContentInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].resolveAndCreate(this._providers.concat([content]), this._injector);
            var /** @type {?} */ componentRef = contentCmptFactory.create(modalContentInjector);
            this._applicationRef.attachView(componentRef.hostView);
            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new ContentRef([[this._renderer.createText("" + content)]]);
    };
    return ComponentLoader;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Positioning = /** @class */ (function () {
    function Positioning() {
    }
    /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var /** @type {?} */ elPosition;
        var /** @type {?} */ parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            var /** @type {?} */ bcRect = element.getBoundingClientRect();
            elPosition = {
                width: bcRect.width,
                height: bcRect.height,
                top: bcRect.top,
                bottom: bcRect.bottom,
                left: bcRect.left,
                right: bcRect.right
            };
        }
        else {
            var /** @type {?} */ offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var /** @type {?} */ elBcr = element.getBoundingClientRect();
        var /** @type {?} */ viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var /** @type {?} */ elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} placement
     * @param {?=} appendToBody
     * @return {?}
     */
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var /** @type {?} */ hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var /** @type {?} */ shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        var /** @type {?} */ shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        var /** @type {?} */ targetElBCR = targetElement.getBoundingClientRect();
        var /** @type {?} */ placementPrimary = placement.split(' ')[0] || 'top';
        var /** @type {?} */ placementSecondary = placement.split(' ')[1] || 'center';
        var /** @type {?} */ targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.bottom += hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'bottom':
                targetElPosition.top = shiftHeight[placementPrimary];
                targetElPosition.bottom += shiftHeight[placementPrimary];
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'left':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
                targetElPosition.right += hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = shiftWidth[placementPrimary];
                targetElPosition.right += shiftWidth[placementPrimary];
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    /**
     * @param {?} element
     * @param {?} prop
     * @return {?}
     */
    Positioning.prototype.getStyle = function (element, prop) { return ((window.getComputedStyle(element)))[prop]; };
    /**
     * @param {?} element
     * @return {?}
     */
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    Positioning.prototype.offsetParent = function (element) {
        var /** @type {?} */ offsetParentEl = (element.offsetParent) || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = /** @type {?} */ (offsetParentEl.offsetParent);
        }
        return offsetParentEl || document.documentElement;
    };
    return Positioning;
}());
var positionService = new Positioning();
/**
 * @param {?} hostElement
 * @param {?} targetElement
 * @param {?} placement
 * @param {?=} appendToBody
 * @return {?}
 */
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var /** @type {?} */ pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
var PositioningService = /** @class */ (function () {
    function PositioningService() {
    }
    /**
     * @param {?} options
     * @return {?}
     */
    PositioningService.prototype.position = function (options) {
        var element = options.element, target = options.target, attachment = options.attachment, appendToBody = options.appendToBody;
        positionElements(this._getHtmlElement(target), this._getHtmlElement(element), attachment, appendToBody);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    PositioningService.prototype._getHtmlElement = function (element) {
        // it means that we got a selector
        if (typeof element === 'string') {
            return /** @type {?} */ (document.querySelector(element));
        }
        if (element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]) {
            return element.nativeElement;
        }
        return /** @type {?} */ (element);
    };
    return PositioningService;
}());
PositioningService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ComponentLoaderFactory = /** @class */ (function () {
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _ngZone
     * @param {?} _injector
     * @param {?} _posService
     * @param {?} _applicationRef
     */
    function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @template T
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @return {?}
     */
    ComponentLoaderFactory.prototype.createLoader = function (_elementRef, _viewContainerRef, _renderer) {
        return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    };
    return ComponentLoaderFactory;
}());
ComponentLoaderFactory.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
ComponentLoaderFactory.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], },
    { type: PositioningService, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownState = /** @class */ (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isDisabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dropdownMenu = new Promise(function (resolve) {
            _this.resolveDropdownMenu = resolve;
        });
    }
    return BsDropdownState;
}());
BsDropdownState.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
BsDropdownState.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownContainerComponent = /** @class */ (function () {
    /**
     * @param {?} _state
     */
    function BsDropdownContainerComponent(_state) {
        var _this = this;
        this._state = _state;
        this.isOpen = false;
        this.display = 'block';
        this.position = 'absolute';
        this._subscription = _state.isOpenChange.subscribe(function (value) {
            _this.isOpen = value;
        });
    }
    Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
        /**
         * @return {?}
         */
        get: function () {
            return this._state.direction;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDropdownContainerComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    return BsDropdownContainerComponent;
}());
BsDropdownContainerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'mdb-dropdown-container',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: "\n  <div [class.dropup]=\"direction === 'up'\"\n  [class.dropdown]=\"direction === 'down'\"\n  [class.show]=\"isOpen\"\n  [class.open]=\"isOpen\">\n    <ng-content></ng-content>\n  </div>\n  "
            },] },
];
/** @nocollapse */
BsDropdownContainerComponent.ctorParameters = function () { return [
    { type: BsDropdownState, },
]; };
BsDropdownContainerComponent.propDecorators = {
    "display": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.display',] },],
    "position": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.position',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownMenuDirective = /** @class */ (function () {
    /**
     * @param {?} _state
     * @param {?} _viewContainer
     * @param {?} _templateRef
     */
    function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
    return BsDropdownMenuDirective;
}());
BsDropdownMenuDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdbDropdownMenu],[dropdownMenu]',
                exportAs: 'bs-dropdown-menu'
            },] },
];
/** @nocollapse */
BsDropdownMenuDirective.ctorParameters = function () { return [
    { type: BsDropdownState, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownToggleDirective = /** @class */ (function () {
    /**
     * @param {?} _state
     * @param {?} _element
     */
    function BsDropdownToggleDirective(_state, _element) {
        var _this = this;
        this._state = _state;
        this._element = _element;
        this._subscriptions = [];
        this.ariaHaspopup = true;
        // @HostBinding('attr.disabled') isDisabled: boolean = null;
        this.isDisabled = null;
        // sync is open value with state
        this._subscriptions.push(this._state
            .isOpenChange.subscribe(function (value) { return _this.isOpen = value; }));
        // populate disabled state
        this._subscriptions.push(this._state
            .isDisabledChange
            .subscribe(function (value) { return _this.isDisabled = value || null; }));
    }
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onDocumentClick = function (event) {
        if (this._state.autoClose && event.button !== 2 &&
            !this._element.nativeElement.contains(event.target)) {
            this._state.toggleClick.emit(false);
        }
    };
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onEsc = function () {
        if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
        }
    };
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    return BsDropdownToggleDirective;
}());
BsDropdownToggleDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdbDropdownToggle],[dropdownToggle]',
                exportAs: 'bs-dropdown-toggle'
            },] },
];
/** @nocollapse */
BsDropdownToggleDirective.ctorParameters = function () { return [
    { type: BsDropdownState, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
]; };
BsDropdownToggleDirective.propDecorators = {
    "ariaHaspopup": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-haspopup',] },],
    "isDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.disabled',] },],
    "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-expanded',] },],
    "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] },],
    "onDocumentClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:click', ['$event'],] },],
    "onEsc": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keyup.esc',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Default dropdown configuration
 */
var BsDropdownConfig = /** @class */ (function () {
    function BsDropdownConfig() {
        /**
         * default dropdown auto closing behavior
         */
        this.autoClose = true;
    }
    return BsDropdownConfig;
}());
BsDropdownConfig.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
var win = typeof window !== 'undefined' && window || /** @type {?} */ ({});
var document$1 = win.document;
var location = win.location;
var gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
var performance = win['performance'] ? win['performance'] : null;
var Event = win['Event'];
var MouseEvent = win['MouseEvent'];
var KeyboardEvent = win['KeyboardEvent'];
var EventTarget = win['EventTarget'];
var History = win['History'];
var Location = win['Location'];
var EventListener = win['EventListener'];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function isBs3() {
    return win.__theme === 'bs4';
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownDirective = /** @class */ (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} _cis
     * @param {?} _config
     * @param {?} _state
     */
    function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state;
        // todo: move to component loader
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: BsDropdownState, useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.onHidden = this._dropdown.onHidden;
        this.isOpenChange = this._state.isOpenChange;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
    }
    Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
        /**
         * @return {?}
         */
        get: function () {
            return this._state.autoClose;
        },
        /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (typeof value === 'boolean') {
                this._state.autoClose = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        /**
         * @return {?}
         */
        get: function () { return this._isDisabled; },
        /**
         * Disables dropdown toggle and hides dropdown menu if opened
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._isDisabled = value;
            this._state.isDisabledChange.emit(value);
            if (value) {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */
        get: function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
        /**
         * @return {?}
         */
        get: function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._showInline = !this.container;
        // attach DOM listeners
        this._dropdown.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state
            .toggleClick.subscribe(function (value) { return _this.toggle(value); }));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state
            .isDisabledChange
            .subscribe(function (element) {
            if (element === true) {
                _this.hide();
            }
        }));
        // attach dropdown menu inside of dropdown
        if (this._showInline) {
            this._state.dropdownMenu
                .then(function (dropdownMenu) {
                _this._inlinedMenu = dropdownMenu.viewContainer.createEmbeddedView(dropdownMenu.templateRef);
            });
        }
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    BsDropdownDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled) {
            return;
        }
        // material and dropup dropdown animation
        //const parent = this._elementRef.nativeElement.classList;
        var /** @type {?} */ container = this._elementRef.nativeElement.lastElementChild;
        setTimeout(function () { container.classList.add('fadeInDropdown'); }, 200);
        if (this._showInline) {
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu
            .then(function (dropdownMenu) {
            // check direction in which dropdown should be opened
            var /** @type {?} */ _dropup = _this.dropup === true ||
                (typeof _this.dropup !== 'undefined' && _this.dropup !== false);
            _this._state.direction = _dropup ? 'up' : 'down';
            var /** @type {?} */ _placement = _this.placement ||
                (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            _this._dropdown
                .attach(BsDropdownContainerComponent)
                .to(_this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            _this._state.isOpenChange.emit(true);
        });
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    BsDropdownDirective.prototype.hide = function () {
        var _this = this;
        if (!this.isOpen) {
            return;
        }
        var /** @type {?} */ parent = this._elementRef.nativeElement.classList;
        var /** @type {?} */ container = this._elementRef.nativeElement.lastElementChild;
        if ((parent.value === 'dropdown open show') || (parent.value === 'btn-group dropup open show')) {
            container.classList.remove('fadeInDropdown');
            setTimeout(function () {
                if (_this._showInline) {
                    _this._isInlineOpen = false;
                    _this.onHidden.emit(true);
                }
                else {
                    _this._dropdown.hide();
                }
                _this._state.isOpenChange.emit(false);
            }, 560);
        }
        else {
            if (this._showInline) {
                this._isInlineOpen = false;
                this.onHidden.emit(true);
            }
            else {
                this._dropdown.hide();
            }
            this._state.isOpenChange.emit(false);
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @param {?=} value
     * @return {?}
     */
    BsDropdownDirective.prototype.toggle = function (value) {
        if (this.isOpen || value === false) {
            return this.hide();
        }
        return this.show();
    };
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.ngOnDestroy = function () {
        // clean up subscriptions and destroy dropdown
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._dropdown.dispose();
    };
    return BsDropdownDirective;
}());
BsDropdownDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdbDropdown],[dropdown]',
                exportAs: 'bs-dropdown',
                providers: [BsDropdownState]
            },] },
];
/** @nocollapse */
BsDropdownDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    { type: ComponentLoaderFactory, },
    { type: BsDropdownConfig, },
    { type: BsDropdownState, },
]; };
BsDropdownDirective.propDecorators = {
    "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "triggers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "dropup": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.dropup',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "autoClose": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "isDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.open',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.show',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "isOpenChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "onShown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "onHidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    DropdownModule.forRoot = function (config) {
        return {
            ngModule: DropdownModule, providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDropdownState,
                { provide: BsDropdownConfig, useValue: config ? config : { autoClose: true } }
            ]
        };
    };
    ;
    return DropdownModule;
}());
DropdownModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownContainerComponent,
                    BsDropdownDirective
                ],
                exports: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownDirective
                ],
                entryComponents: [BsDropdownContainerComponent]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
        this.asArray = [];
    }
    /**
     * @param {?} position
     * @return {?}
     */
    LinkedList.prototype.getNode = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var /** @type {?} */ current = this.head;
        for (var /** @type {?} */ index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.createInternalArrayRepresentation = function () {
        var /** @type {?} */ outArray = [];
        var /** @type {?} */ current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    };
    /**
     * @param {?} position
     * @return {?}
     */
    LinkedList.prototype.get = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        var /** @type {?} */ current = this.head;
        for (var /** @type {?} */ index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    };
    /**
     * @param {?} value
     * @param {?=} position
     * @return {?}
     */
    LinkedList.prototype.add = function (value, position) {
        if (position === void 0) { position = this.length; }
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        var /** @type {?} */ node = {
            value: /** @type {?} */ (value),
            next: /** @type {?} */ (undefined),
            previous: /** @type {?} */ (undefined)
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                // node in middle
                var /** @type {?} */ currentPreviousNode = this.getNode(position - 1);
                var /** @type {?} */ currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    };
    /**
     * @param {?=} position
     * @return {?}
     */
    LinkedList.prototype.remove = function (position) {
        if (position === void 0) { position = 0; }
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            // middle node
            var /** @type {?} */ removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    };
    /**
     * @param {?} position
     * @param {?} value
     * @return {?}
     */
    LinkedList.prototype.set = function (position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var /** @type {?} */ node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.toArray = function () {
        return this.asArray;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.findAll = function (fn) {
        var /** @type {?} */ current = this.head;
        var /** @type {?} */ result = [];
        for (var /** @type {?} */ index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index: index, value: current.value });
            }
            current = current.next;
        }
        return result;
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LinkedList.prototype.push = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.forEach(function (arg) {
            _this.add(arg);
        });
        return this.length;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.pop = function () {
        if (this.length === 0) {
            return undefined;
        }
        var /** @type {?} */ last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LinkedList.prototype.unshift = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.reverse();
        args.forEach(function (arg) {
            _this.add(arg, 0);
        });
        return this.length;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.shift = function () {
        if (this.length === 0) {
            return undefined;
        }
        var /** @type {?} */ lastItem = this.head.value;
        this.remove();
        return lastItem;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.forEach = function (fn) {
        var /** @type {?} */ current = this.head;
        for (var /** @type {?} */ index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    LinkedList.prototype.indexOf = function (value) {
        var /** @type {?} */ current = this.head;
        var /** @type {?} */ position = 0;
        for (var /** @type {?} */ index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.some = function (fn) {
        var /** @type {?} */ current = this.head;
        var /** @type {?} */ result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.every = function (fn) {
        var /** @type {?} */ current = this.head;
        var /** @type {?} */ result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.toString = function () {
        return '[Linked List]';
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.find = function (fn) {
        var /** @type {?} */ current = this.head;
        // let result: T;
        var /** @type {?} */ result;
        for (var /** @type {?} */ index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.findIndex = function (fn) {
        var /** @type {?} */ current = this.head;
        // let result: number;
        var /** @type {?} */ result;
        for (var /** @type {?} */ index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    };
    return LinkedList;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CarouselConfig = /** @class */ (function () {
    function CarouselConfig() {
        /**
         * Default interval of auto changing of slides
         */
        this.interval = 5000;
        /**
         * Is loop of auto changing of slides can be paused
         */
        this.noPause = false;
        /**
         * Is slides can wrap from the last to the first slide
         */
        this.noWrap = false;
        this.keyboard = false;
    }
    return CarouselConfig;
}());
CarouselConfig.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var Direction = { UNKNOWN: 0, NEXT: 1, PREV: 2, };
Direction[Direction.UNKNOWN] = "UNKNOWN";
Direction[Direction.NEXT] = "NEXT";
Direction[Direction.PREV] = "PREV";
/**
 * Base element to create carousel
 */
var CarouselComponent = /** @class */ (function () {
    /**
     * @param {?} config
     * @param {?} el
     */
    function CarouselComponent(config, el) {
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
        this._slides = new LinkedList();
        this.destroyed = false;
        // protected el: ElementRef = null;
        this.el = null;
        this.animationEnd = true;
        this.isControls = true;
        this.class = '';
        this.type = '';
        this.animation = '';
        /**
         * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
         */
        this.activeSlideChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        Object.assign(this, config);
        this.el = el;
    }
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        /**
         * @return {?}
         */
        get: function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        /**
         * @return {?}
         */
        get: function () {
            return this._currentActiveSlide;
        },
        /**
         * Index of currently displayed slide(started for 0)
         * @param {?} index
         * @return {?}
         */
        set: function (index) {
            if (this._slides.length && index !== this._currentActiveSlide) {
                this._select(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CarouselComponent.prototype.checkNavigation = function () {
        if (this.type === 'carousel-multi-item') {
            return false;
        }
        return true;
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.checkDots = function () {
        if (this.type === 'carousel-thumbnails') {
            return false;
        }
        return true;
    };
    /**
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.getImg = function (slide) {
        return slide.el.nativeElement.querySelector('img').src;
    };
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        /**
         * Delay of item cycling in milliseconds. If false, carousel won't cycle automatically.
         * @return {?}
         */
        get: function () {
            return this._interval;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        /**
         * @return {?}
         */
        get: function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnDestroy = function () {
        this.destroyed = true;
    };
    /**
     * Adds new slide. If this slide is first in collection - set it as active and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.addSlide = function (slide) {
        this._slides.add(slide);
        if (this._slides.length === 1) {
            this._currentActiveSlide = void 0;
            this.activeSlide = 0;
            this.play();
        }
    };
    /**
     * Removes specified slide. If this slide is active - will roll to another slide
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.removeSlide = function (slide) {
        var _this = this;
        var /** @type {?} */ remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            //  let nextSlideIndex: number = void 0;
            var /** @type {?} */ nextSlideIndex_1 = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is FALSE or to previous, if noWrap is TRUE
                // in case, if this slide in middle of collection, index of next slide is same to removed
                nextSlideIndex_1 = !this.isLast(remIndex) ? remIndex :
                    this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout(function () {
                _this._select(nextSlideIndex_1);
            }, 0);
        }
        else {
            this._slides.remove(remIndex);
            var /** @type {?} */ currentSlideIndex_1 = this.getCurrentSlideIndex();
            setTimeout(function () {
                // after removing, need to actualize index of current active slide
                _this._currentActiveSlide = currentSlideIndex_1;
                _this.activeSlideChange.emit(_this._currentActiveSlide);
            }, 0);
        }
    };
    /**
     * @param {?=} action
     * @return {?}
     */
    CarouselComponent.prototype.swipe = function (action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        if (action === this.SWIPE_ACTION.RIGHT) {
            this.previousSlide();
        }
        if (action === this.SWIPE_ACTION.LEFT) {
            this.nextSlide();
        }
    };
    /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.nextSlide = function (force) {
        if (force === void 0) { force = false; }
        if (this.animation === 'slide') {
            this.pause();
            var /** @type {?} */ direction = Direction.NEXT;
            this.slideAnimation(this.findNextSlideIndex(direction, force), direction);
        }
        else if (this.animation === 'fade') {
            this.pause();
            this.fadeAnimation(this.findNextSlideIndex(Direction.NEXT, force));
        }
        else {
            this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
        }
    };
    /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.previousSlide = function (force) {
        if (force === void 0) { force = false; }
        if (this.animation === 'slide') {
            this.pause();
            var /** @type {?} */ direction = Direction.PREV;
            this.slideAnimation(this.findNextSlideIndex(direction, force), direction);
        }
        else if (this.animation === 'fade') {
            this.pause();
            this.fadeAnimation(this.findNextSlideIndex(Direction.PREV, force));
        }
        else {
            this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
        }
    };
    /**
     * @param {?} goToIndex
     * @return {?}
     */
    CarouselComponent.prototype.fadeAnimation = function (goToIndex) {
        var _this = this;
        //const currentSlide = this._slides.get(this._currentActiveSlide);
        var /** @type {?} */ goToSlide = this._slides.get(goToIndex);
        if (this.animationEnd) {
            this.animationEnd = false;
            goToSlide.directionNext = true;
            setTimeout(function () {
                goToSlide.directionNext = false;
                _this.animationEnd = true;
                _this.activeSlide = goToIndex;
                _this.play();
            }, 100);
        }
    };
    /**
     * @param {?} goToIndex
     * @param {?} direction
     * @return {?}
     */
    CarouselComponent.prototype.slideAnimation = function (goToIndex, direction) {
        var _this = this;
        var /** @type {?} */ currentSlide = this._slides.get(this._currentActiveSlide);
        var /** @type {?} */ goToSlide = this._slides.get(goToIndex);
        if (this.animationEnd) {
            if (direction === Direction.NEXT) {
                this.animationEnd = false;
                goToSlide.directionNext = true;
                setTimeout(function () {
                    goToSlide.directionLeft = true;
                    currentSlide.directionLeft = true;
                }, 100);
            }
            if (direction === Direction.PREV) {
                this.animationEnd = false;
                goToSlide.directionPrev = true;
                setTimeout(function () {
                    goToSlide.directionRight = true;
                    currentSlide.directionRight = true;
                }, 100);
            }
            setTimeout(function () {
                goToSlide.directionLeft = false;
                goToSlide.directionNext = false;
                currentSlide.directionLeft = false;
                currentSlide.directionNext = false;
                goToSlide.directionRight = false;
                goToSlide.directionPrev = false;
                currentSlide.directionRight = false;
                currentSlide.directionPrev = false;
                _this.animationEnd = true;
                _this.activeSlide = goToIndex;
                var /** @type {?} */ directionName;
                if (direction === Direction.NEXT) {
                    directionName = 'Next';
                }
                else if (direction === Direction.PREV) {
                    directionName = 'Prev';
                }
                _this.activeSlideChange.emit({ 'direction': directionName, 'relatedTarget': _this.activeSlide });
                _this.play();
            }, 700);
        }
    };
    /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.selectSlide = function (index) {
        this.pause();
        if (this.animation === 'slide') {
            if (this.activeSlide < index) {
                this.slideAnimation(index, Direction.NEXT);
            }
            else if (this.activeSlide > index) {
                this.slideAnimation(index, Direction.PREV);
            }
        }
        else if (this.animation === 'fade') {
            if (index !== this.activeSlide) {
                this.fadeAnimation(index);
            }
        }
        this.play();
    };
    /**
     * Starts a auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.play = function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    };
    /**
     * Stops a auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.pause = function () {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    CarouselComponent.prototype.getCurrentSlideIndex = function () {
        return this._slides.findIndex(function (slide) { return slide.active; });
    };
    /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isLast = function (index) {
        return index + 1 >= this._slides.length;
    };
    /**
     * Defines next slide index, depending of direction
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    CarouselComponent.prototype.findNextSlideIndex = function (direction, force) {
        var /** @type {?} */ nextSlideIndex = 0;
        if (!force && (this.isLast(this.activeSlide) && direction !== Direction.PREV && this.noWrap)) {
            return void 0;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled and need to going forward - select current slide, as a next
                nextSlideIndex = (!this.isLast(this._currentActiveSlide)) ? this._currentActiveSlide + 1 :
                    (!force && this.noWrap) ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled and need to going backward - select current slide, as a next
                nextSlideIndex = (this._currentActiveSlide > 0) ? this._currentActiveSlide - 1 :
                    (!force && this.noWrap) ? this._currentActiveSlide : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    };
    /**
     * Sets a slide, which specified through index, as active
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype._select = function (index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        var /** @type {?} */ currentSlide = this._slides.get(this._currentActiveSlide);
        if (currentSlide) {
            currentSlide.active = false;
        }
        var /** @type {?} */ nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            // this.activeSlideChange.emit(index);
        }
    };
    /**
     * Starts loop of auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.restartTimer = function () {
        var _this = this;
        this.resetTimer();
        var /** @type {?} */ interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = setInterval(function () {
                var /** @type {?} */ nInterval = +_this.interval;
                if (_this.isPlaying && !isNaN(_this.interval) && nInterval > 0 && _this.slides.length) {
                    _this.nextSlide();
                }
                else {
                    _this.pause();
                }
            }, interval);
        }
    };
    /**
     * Stops loop of auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.resetTimer = function () {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    };
    /**
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    CarouselComponent.prototype.hasClass = function (el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        }
        else {
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        }
    };
    /**
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    CarouselComponent.prototype.classAdd = function (el, className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else if (!this.hasClass(el, className)) {
            el.className += ' ' + className;
        }
    };
    /**
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    CarouselComponent.prototype.removeClass = function (el, className) {
        if (el.classList) {
            el.classList.remove(className);
        }
        else if (this.hasClass(el, className)) {
            var /** @type {?} */ reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CarouselComponent.prototype.keyboardControl = function (event) {
        if (this.keyboard) {
            if (event.keyCode === 39) {
                this.nextSlide();
            }
            if (event.keyCode === 37) {
                this.previousSlide();
            }
        }
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.focus = function () {
        this.el.nativeElement.focus();
    };
    return CarouselComponent;
}());
CarouselComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'mdb-carousel',
                template: "<div tabindex=\"0\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\" (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel {{ class }} {{ type }}\"> <div class=\"controls-top\" *ngIf=\"slides.length > 1 && !checkNavigation() && isControls\"> <a class=\"btn-floating\" [class.disabled]=\"activeSlide===0&&noWrap\" (click)=\"previousSlide()\"><i class=\"fa fa-chevron-left\"></i></a> <a class=\"btn-floating\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\"><i class=\"fa fa-chevron-right\"></i></a> </div> <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && checkDots() && isControls\"> <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li> </ol> <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && !checkDots() && isControls\"> <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"> <img class=\"img-fluid\" src=\"{{ getImg(slidez) }}\"> </li> </ol> <div class=\"carousel-inner\"><ng-content></ng-content></div> <a class=\"carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1 && checkNavigation() && isControls\"> <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span> <span  class=\"sr-only\">Previous</span> </a> <a class=\"carousel-control-next\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1 && checkNavigation() && isControls\"> <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Next</span> </a> </div>",
            },] },
];
/** @nocollapse */
CarouselComponent.ctorParameters = function () { return [
    { type: CarouselConfig, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
]; };
CarouselComponent.propDecorators = {
    "noWrap": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "noPause": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "isControls": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['isControls',] },],
    "keyboard": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "class": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['class',] },],
    "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['type',] },],
    "animation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['animation',] },],
    "activeSlideChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "activeSlide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "interval": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "play": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave',] },],
    "pause": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseenter',] },],
    "keyboardControl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keyup', ['$event'],] },],
    "focus": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SlideComponent = /** @class */ (function () {
    /**
     * @param {?} carousel
     * @param {?} el
     */
    function SlideComponent(carousel, el) {
        this.animated = false;
        this.directionNext = false;
        this.directionLeft = false;
        this.directionPrev = false;
        this.directionRight = false;
        this.el = null;
        this.carousel = carousel;
        this.el = el;
    }
    /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnInit = function () {
        this.carousel.addSlide(this);
    };
    /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnDestroy = function () {
        this.carousel.removeSlide(this);
    };
    return SlideComponent;
}());
SlideComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'mdb-slide',
                template: "\n  <ng-content></ng-content>\n  "
            },] },
];
/** @nocollapse */
SlideComponent.ctorParameters = function () { return [
    { type: CarouselComponent, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
]; };
SlideComponent.propDecorators = {
    "active": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "animated": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.animated',] },],
    "directionNext": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.carousel-item-next',] },],
    "directionLeft": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.carousel-item-left',] },],
    "directionPrev": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.carousel-item-prev',] },],
    "directionRight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.carousel-item-right',] },],
    "carousel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.carousel-item',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    /**
     * @return {?}
     */
    CarouselModule.forRoot = function () {
        return { ngModule: CarouselModule, providers: [] };
    };
    return CarouselModule;
}());
CarouselModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [SlideComponent, CarouselComponent],
                exports: [SlideComponent, CarouselComponent],
                providers: [CarouselConfig]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BaseChartDirective = /** @class */ (function () {
    /**
     * @param {?} element
     * @param {?} platformId
     */
    function BaseChartDirective(element, platformId) {
        this.labels = [];
        this.options = {
            legend: { display: false }
        };
        this.legend = false;
        this.chartClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.chartHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initFlag = false;
        this.isBrowser = false;
        this.element = element;
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId);
    }
    /**
     * @return {?}
     */
    BaseChartDirective.prototype.ngOnInit = function () {
        if (this.isBrowser) {
            this.ctx = this.element.nativeElement.getContext('2d');
            this.cvs = this.element.nativeElement;
            this.initFlag = true;
            if (this.data || this.datasets) {
                this.refresh();
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BaseChartDirective.prototype.ngOnChanges = function (changes) {
        if (this.initFlag) {
            // Check if the changes are in the data or datasets
            if (changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) {
                if (changes['data']) {
                    this.updateChartData(changes['data'].currentValue);
                }
                else {
                    this.updateChartData(changes['datasets'].currentValue);
                }
                this.chart.update();
            }
            else {
                // otherwise rebuild the chart
                this.refresh();
            }
        }
    };
    /**
     * @return {?}
     */
    BaseChartDirective.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    };
    /**
     * @param {?} ctx
     * @return {?}
     */
    BaseChartDirective.prototype.getChartBuilder = function (ctx /*, data:Array<any>, options:any*/) {
        var _this = this;
        var /** @type {?} */ datasets = this.getDatasets();
        var /** @type {?} */ options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = function (event, active) {
                if (active && active.length) {
                    _this.chartHover.emit({ event: event, active: active });
                }
            };
        }
        if (!options.onClick) {
            options.onClick = function (event, active) {
                _this.chartClick.emit({ event: event, active: active });
            };
        }
        var /** @type {?} */ opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets
            },
            options: options
        };
        return new Chart(ctx, opts);
    };
    /**
     * @param {?} newDataValues
     * @return {?}
     */
    BaseChartDirective.prototype.updateChartData = function (newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach(function (dataset, i) {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            });
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    };
    /**
     * @return {?}
     */
    BaseChartDirective.prototype.getDatasets = function () {
        var _this = this;
        var /** @type {?} */ datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || !this.datasets.length && (this.data && this.data.length)) {
            if (Array.isArray(this.data[0])) {
                datasets = ((this.data)).map(function (data, index) {
                    return { data: data, label: _this.labels[index] || "Label " + index };
                });
            }
            else {
                datasets = [{ data: this.data, label: "Label 0" }];
            }
        }
        if (this.datasets && this.datasets.length ||
            (datasets && datasets.length)) {
            datasets = (this.datasets || datasets)
                .map(function (elm, index) {
                var /** @type {?} */ newElm = Object.assign({}, elm);
                if (_this.colors && _this.colors.length) {
                    Object.assign(newElm, _this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error("ng-charts configuration error,\n      data or datasets field are required to render char " + this.chartType);
        }
        return datasets;
    };
    /**
     * @return {?}
     */
    BaseChartDirective.prototype.refresh = function () {
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx /*, data, this.options*/);
    };
    return BaseChartDirective;
}());
BaseChartDirective.defaultColors = [
    [255, 99, 132],
    [54, 162, 235],
    [255, 206, 86],
    [231, 233, 237],
    [75, 192, 192],
    [151, 187, 205],
    [220, 220, 220],
    [247, 70, 74],
    [70, 191, 189],
    [253, 180, 92],
    [148, 159, 177],
    [77, 83, 96]
];
BaseChartDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: 'canvas[mdbChart]', exportAs: 'mdb-base-chart' },] },
];
/** @nocollapse */
BaseChartDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
]; };
BaseChartDirective.propDecorators = {
    "data": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "datasets": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "labels": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "chartType": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "colors": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "legend": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "chartClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "chartHover": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
/**
 * @param {?} colour
 * @param {?} alpha
 * @return {?}
 */
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
/**
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8)
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1)
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function () { return '#fff'; }),
        pointBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointBorderColor: colors.map(function () { return '#fff'; }),
        pointHoverBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointHoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function (color) { return rgba(color, 1); }),
        hoverBackgroundColor: colors.map(function (color) { return rgba(color, 0.8); }),
        hoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
/**
 * @return {?}
 */
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 * @param {?} index
 * @return {?}
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 * @param {?} count
 * @return {?}
 */
function generateColors(count) {
    var /** @type {?} */ colorsArr = new Array(count);
    for (var /** @type {?} */ i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 * @param {?} chartType
 * @param {?} index
 * @param {?} count
 * @return {?}
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    return ChartsModule;
}());
ChartsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [
                    BaseChartDirective
                ],
                exports: [
                    BaseChartDirective
                ],
                imports: []
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CollapseDirective = /** @class */ (function () {
    /**
     * @param {?} _el
     * @param {?} _renderer
     */
    function CollapseDirective(_el, _renderer) {
        this.showBsCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.shownBsCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hideBsCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hiddenBsCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event fires as soon as content collapses
         */
        this.collapsed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event fires as soon as content becomes visible
         */
        this.expanded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isExpanded = true;
        this.isCollapsed = false;
        this.isCollapse = true;
        this.isCollapsing = false;
        this.collapsing = false;
        this.animationTime = 500;
        this._el = _el;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    CollapseDirective.prototype.ngOnInit = function () {
        this._el.nativeElement.classList.add('show');
        this._el.nativeElement.style.transition = this.animationTime + 'ms ease';
        if (!this.collapse) {
            this._el.nativeElement.classList.remove('show');
            this.hide();
        }
        else {
            this.show();
        }
        this.isExpanded = this.collapse;
    };
    /**
     * @return {?}
     */
    CollapseDirective.prototype.ngAfterViewInit = function () {
        this.maxHeight = this._el.nativeElement.scrollHeight;
    };
    /**
     * @return {?}
     */
    CollapseDirective.prototype.resize = function () {
        var /** @type {?} */ container = this._el.nativeElement;
        this.maxHeight = this._el.nativeElement.scrollHeight;
        this._renderer.setStyle(container, 'height', this.maxHeight + 'px');
    };
    /**
     * allows to manually toggle content visibility
     * @param {?=} event
     * @return {?}
     */
    CollapseDirective.prototype.toggle = function (event) {
        if (!this.collapsing) {
            if (this.isExpanded) {
                this.hide();
            }
            else {
                this.show();
            }
        }
        try {
            if (event.type === 'click') {
                this.maxHeight = event.target.parentElement.nextElementSibling.scrollHeight;
            }
            else if (event.type === 'mouseenter' || event.type === 'mouseleave') {
                this.maxHeight = event.target.nextElementSibling.scrollHeight;
            }
        }
        catch (error) { }
    };
    /**
     * allows to manually hide content
     * @return {?}
     */
    CollapseDirective.prototype.hide = function () {
        var _this = this;
        this.collapsing = true;
        this.hideBsCollapse.emit();
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        var /** @type {?} */ container = this._el.nativeElement;
        container.classList.remove('collapse');
        container.classList.remove('show');
        container.classList.add('collapsing');
        this._renderer.setStyle(container, 'height', '0px');
        setTimeout(function () {
            container.classList.remove('collapsing');
            container.classList.add('collapse');
            _this.hiddenBsCollapse.emit();
            _this.collapsing = false;
        }, this.animationTime);
        this.collapsed.emit(this);
    };
    /**
     * allows to manually show collapsed content
     * @return {?}
     */
    CollapseDirective.prototype.show = function () {
        var _this = this;
        if (!this.isExpanded) {
            this.collapsing = true;
            this.showBsCollapse.emit();
            this.isCollapse = false;
            this.isCollapsing = true;
            this.isExpanded = true;
            this.isCollapsed = false;
            var /** @type {?} */ container_1 = this._el.nativeElement;
            container_1.classList.remove('collapse');
            container_1.classList.add('collapsing');
            setTimeout(function () {
                _this._renderer.setStyle(container_1, 'height', _this.maxHeight + 'px');
            }, 10);
            setTimeout(function () {
                container_1.classList.remove('collapsing');
                container_1.classList.add('collapse');
                container_1.classList.add('show');
                _this.shownBsCollapse.emit();
                _this.collapsing = false;
            }, this.animationTime - (this.animationTime * 0.5));
            this.expanded.emit(this);
        }
    };
    return CollapseDirective;
}());
CollapseDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdbCollapse]',
                exportAs: 'bs-collapse',
            },] },
];
/** @nocollapse */
CollapseDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
]; };
CollapseDirective.propDecorators = {
    "showBsCollapse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['showBsCollapse',] },],
    "shownBsCollapse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['shownBsCollapse',] },],
    "hideBsCollapse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['hideBsCollapse',] },],
    "hiddenBsCollapse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"], args: ['hiddenBsCollapse',] },],
    "collapsed": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "expanded": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "collapse": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "animationTime": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CollapseModule = /** @class */ (function () {
    function CollapseModule() {
    }
    /**
     * @return {?}
     */
    CollapseModule.forRoot = function () {
        return { ngModule: CollapseModule, providers: [] };
    };
    return CollapseModule;
}());
CollapseModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [CollapseDirective],
                exports: [CollapseDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    return ModalOptions;
}());
ModalOptions.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
var MDBModalRef = /** @class */ (function () {
    function MDBModalRef() {
    }
    /**
     * Hides the modal
     * @return {?}
     */
    MDBModalRef.prototype.hide = function () { };
    return MDBModalRef;
}());
MDBModalRef.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true
};
var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
var TransitionDurations = {
    MODAL: 300,
    BACKDROP: 150
};
var DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * @param {?} element
     * @return {?}
     */
    Utils.reflow = function (element) {
        (function (bs) { return bs; })(element.offsetHeight);
    };
    /**
     * @param {?} elem
     * @return {?}
     */
    Utils.getStyles = function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var /** @type {?} */ view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = win;
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalBackdropOptions = /** @class */ (function () {
    /**
     * @param {?} options
     */
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());
/**
 * This component will be added as background layout for modals if enabled
 */
var ModalBackdropComponent = /** @class */ (function () {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    function ModalBackdropComponent(element, renderer) {
        this.classNameBackDrop = true;
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isAnimated;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._isAnimated = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isShown;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._isShown = value;
            this.renderer.setElementClass(this.element.nativeElement, "" + ClassName.IN, value);
            if (!isBs3()) {
                this.renderer.setElementClass(this.element.nativeElement, "" + ClassName.SHOW, value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ModalBackdropComponent.prototype.ngOnInit = function () {
        if (this.isAnimated) {
            this.renderer.setElementClass(this.element.nativeElement, "" + ClassName.FADE, this.isAnimated);
            Utils.reflow(this.element.nativeElement);
        }
        this.isShown = true;
    };
    return ModalBackdropComponent;
}());
ModalBackdropComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'mdb-modal-backdrop',
                template: "",
            },] },
];
/** @nocollapse */
ModalBackdropComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
]; };
ModalBackdropComponent.propDecorators = {
    "classNameBackDrop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.modal-backdrop',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TRANSITION_DURATION = 300;
var BACKDROP_TRANSITION_DURATION = 150;
/**
 * Mark any code with directive to show it's content in modal
 */
var ModalDirective = /** @class */ (function () {
    /**
     * @param {?} _element
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} clf
     */
    function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        /**
         * This event fires immediately when the `show` instance method is called.
         */
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete)
         */
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired immediately when the hide instance method has been called.
         */
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete).
         */
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isAnimated = true;
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this._element = _element;
        this._renderer = _renderer;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    Object.defineProperty(ModalDirective.prototype, "config", {
        /**
         * @return {?}
         */
        get: function () {
            return this._config;
        },
        /**
         * allows to set modal configuration via element property
         * @param {?} conf
         * @return {?}
         */
        set: function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDirective.prototype, "isShown", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    ModalDirective.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this._element.nativeElement) {
            return;
        }
        this.dismissReason = DISMISS_REASONS.BACKRDOP;
        this.hide(event);
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.onEsc = function () {
        if (this.config.keyboard) {
            this.dismissReason = DISMISS_REASONS.ESC;
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.ngOnDestroy = function () {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._config = this._config || this.getConfig();
        setTimeout(function () {
            if (_this._config.show) {
                _this.show();
            }
        }, 0);
    };
    /**
     * Allows to manually toggle modal visibility
     * @return {?}
     */
    ModalDirective.prototype.toggle = function () {
        return this._isShown ? this.hide() : this.show();
    };
    /**
     * Allows to manually open modal
     * @return {?}
     */
    ModalDirective.prototype.show = function () {
        var _this = this;
        this.dismissReason = null;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (document$1 && document$1.body) {
            if (document$1.body.classList.contains(ClassName.OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.addClass(document$1.body, ClassName.OPEN);
            }
        }
        this.showBackdrop(function () {
            _this.showElement();
        });
    };
    /**
     * Allows to manually close modal
     * @param {?=} event
     * @return {?}
     */
    ModalDirective.prototype.hide = function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.removeClass(this._element.nativeElement, ClassName.IN);
        if (!isBs3()) {
            this._renderer.removeClass(this._element.nativeElement, ClassName.SHOW);
        }
        if (this.isAnimated) {
            this.timerHideModal = setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    };
    /**
     * Private methods \@internal
     * @param {?=} config
     * @return {?}
     */
    ModalDirective.prototype.getConfig = function (config) {
        return Object.assign({}, modalConfigDefaults, config);
    };
    /**
     *  Show dialog
     *  \@internal
     * @return {?}
     */
    ModalDirective.prototype.showElement = function () {
        var _this = this;
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            (this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE)) {
            // don't move modals dom position
            if (document$1 && document$1.body) {
                document$1.body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this.isAnimated) {
            Utils.reflow(this._element.nativeElement);
        }
        this._renderer.addClass(this._element.nativeElement, ClassName.IN);
        if (!isBs3()) {
            this._renderer.addClass(this._element.nativeElement, ClassName.SHOW);
        }
        var /** @type {?} */ transitionComplete = function () {
            if (_this._config.focus) {
                _this._element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
        };
        if (this.isAnimated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    };
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.hideModal = function () {
        var _this = this;
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop(function () {
            if (!_this.isNested) {
                if (document$1 && document$1.body) {
                    _this._renderer.removeClass(document$1.body, ClassName.OPEN);
                }
                _this.resetScrollbar();
            }
            _this.resetAdjustments();
            _this.focusOtherModal();
            _this.onHidden.emit(_this);
        });
    };
    /**
     * \@internal
     * @param {?=} callback
     * @return {?}
     */
    ModalDirective.prototype.showBackdrop = function (callback) {
        var _this = this;
        if (this._isShown && this.config.backdrop && (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(ModalBackdropComponent)
                .to('body')
                .show({ isAnimated: this.isAnimated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this.isAnimated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            var /** @type {?} */ callbackRemove = function () {
                _this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    };
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.removeBackdrop = function () {
        this._backdrop.hide();
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.focusOtherModal = function () {
        var /** @type {?} */ otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[mdbModal]');
        if (!otherOpenedModals.length) {
            return;
        }
        //  this._renderer.invokeElementMethod(otherOpenedModals[otherOpenedModals.length - 1], 'focus');
        otherOpenedModals[otherOpenedModals.length - 1].nativeElement.focus();
    };
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.resetAdjustments = function () {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    };
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = document$1.body.clientWidth < win.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.setScrollbar = function () {
        if (!document$1) {
            return;
        }
        this.originalBodyPadding = parseInt(win.getComputedStyle(document$1.body).getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            document$1.body.style.paddingRight = this.originalBodyPadding + this.scrollbarWidth + "px";
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.resetScrollbar = function () {
        document$1.body.style.paddingRight = this.originalBodyPadding;
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.getScrollbarWidth = function () {
        var /** @type {?} */ scrollDiv = this._renderer.createElement('div', void 0);
        this._renderer.appendChild(document$1.body, scrollDiv);
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
        var /** @type {?} */ scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document$1.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    return ModalDirective;
}());
ModalDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdbModal]',
                exportAs: 'mdb-modal'
            },] },
];
/** @nocollapse */
ModalDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: ComponentLoaderFactory, },
]; };
ModalDirective.propDecorators = {
    "config": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "onShow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "onShown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "onHide": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "onHidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    "onEsc": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown.esc',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var msConfig = {
    serviceInstance: new Object()
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalContainerComponent = /** @class */ (function () {
    /**
     * @param {?} options
     * @param {?} _element
     * @param {?} _renderer
     */
    function ModalContainerComponent(options, _element, _renderer) {
        this._renderer = _renderer;
        this.tabindex = -1;
        this.role = 'dialog';
        this.modla = true;
        this.isShown = false;
        this.isModalHiding = false;
        this.mdbModalService = msConfig.serviceInstance;
        this._element = _element;
        this.config = Object.assign({}, options);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ModalContainerComponent.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this._element.nativeElement) {
            return;
        }
        this.mdbModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
        this.hide();
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.onEsc = function () {
        if (this.config.keyboard && this.level === this.mdbModalService.getModalsCount()) {
            this.mdbModalService.setDismissReason(DISMISS_REASONS.ESC);
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isAnimated) {
            this._renderer.setElementClass(this._element.nativeElement, ClassName.FADE, true);
        }
        this._renderer.setElementStyle(this._element.nativeElement, 'display', 'block');
        setTimeout(function () {
            _this.isShown = true;
            _this._renderer.setElementClass(_this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW, true);
        }, this.isAnimated ? TransitionDurations.BACKDROP : 0);
        if (document && document.body) {
            if (this.mdbModalService.getModalsCount() === 1) {
                this.mdbModalService.checkScrollbar();
                this.mdbModalService.setScrollbar();
            }
            this._renderer.setElementClass(document.body, ClassName.OPEN, true);
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.ngOnDestroy = function () {
        if (this.isShown) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.hide = function () {
        var _this = this;
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.setElementClass(this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW, false);
        setTimeout(function () {
            _this.isShown = false;
            if (document && document.body && _this.mdbModalService.getModalsCount() === 1) {
                _this._renderer.setElementClass(document.body, ClassName.OPEN, false);
            }
            _this.mdbModalService.hide(_this.level);
            _this.isModalHiding = false;
        }, this.isAnimated ? TransitionDurations.MODAL : 0);
    };
    return ModalContainerComponent;
}());
ModalContainerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'mdb-modal-container',
                template: "\n  <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n  <div class=\"modal-content\"><ng-content></ng-content></div>\n</div>"
            },] },
];
/** @nocollapse */
ModalContainerComponent.ctorParameters = function () { return [
    { type: ModalOptions, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
]; };
ModalContainerComponent.propDecorators = {
    "tabindex": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['tabindex',] },],
    "role": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['role',] },],
    "modla": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.modal',] },],
    "onClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
    "onEsc": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:keydown.esc',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MDBModalService = /** @class */ (function () {
    /**
     * @param {?} clf
     * @param {?} el
     * @param {?} v
     * @param {?} r
     */
    function MDBModalService(clf, el, v, r) {
        this.clf = clf;
        this.el = el;
        this.v = v;
        this.r = r;
        this.config = modalConfigDefaults;
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = '';
        this.loaders = [];
        //   this._backdropLoader = this.clf.createLoader<ModalBackdropComponent>(null, null, null);
        this._backdropLoader = this.clf.createLoader(this.el, this.v, this.r);
        msConfig.serviceInstance = this;
    }
    /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    MDBModalService.prototype.show = function (content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, modalConfigDefaults, config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    };
    /**
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype.hide = function (level) {
        var _this = this;
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout(function () {
            _this._hideModal(level);
            _this.removeLoaders(level);
        }, this.config.animated ? TransitionDurations.BACKDROP : 0);
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype._showBackdrop = function () {
        var /** @type {?} */ isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        var /** @type {?} */ isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(ModalBackdropComponent)
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype._hideBackdrop = function () {
        var _this = this;
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        var /** @type {?} */ duration = this.config.animated ? TransitionDurations.BACKDROP : 0;
        setTimeout(function () { return _this.removeBackdrop(); }, duration);
    };
    /**
     * @param {?} content
     * @return {?}
     */
    MDBModalService.prototype._showModal = function (content) {
        var /** @type {?} */ modalLoader = this.loaders[this.loaders.length - 1];
        var /** @type {?} */ mdbModalRef = new MDBModalRef();
        var /** @type {?} */ modalContainerRef = modalLoader
            .provide({ provide: ModalOptions, useValue: this.config })
            .provide({ provide: MDBModalRef, useValue: mdbModalRef })
            .attach(ModalContainerComponent)
            .to('body')
            .show({ content: content, isAnimated: this.config.animated });
        modalContainerRef.instance.level = this.getModalsCount();
        mdbModalRef.hide = function () {
            modalContainerRef.instance.hide();
        };
        mdbModalRef.content = modalLoader.getInnerComponent() || null;
        return mdbModalRef;
    };
    /**
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype._hideModal = function (level) {
        var /** @type {?} */ modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.getModalsCount = function () {
        return this.modalsCount;
    };
    /**
     * @param {?} reason
     * @return {?}
     */
    MDBModalService.prototype.setDismissReason = function (reason) {
        this.lastDismissReason = reason;
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.removeBackdrop = function () {
        this._backdropLoader.hide();
        this.backdropRef = null;
    };
    /**
     * \@internal
     * @return {?}
     */
    MDBModalService.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.setScrollbar = function () {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = this.originalBodyPadding + this.scrollbarWidth + "px";
        }
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.resetScrollbar = function () {
        document.body.style.paddingRight = this.originalBodyPadding + 'px';
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.getScrollbarWidth = function () {
        var /** @type {?} */ scrollDiv = document.createElement('div');
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
        document.body.appendChild(scrollDiv);
        var /** @type {?} */ scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype._createLoaders = function () {
        // const loader = this.clf.createLoader<ModalContainerComponent>(null, null, null);
        var /** @type {?} */ loader = this.clf.createLoader(this.el, this.v, this.r);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    };
    /**
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype.removeLoaders = function (level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach(function (loader, i) {
            loader.instance.level = i + 1;
        });
    };
    /**
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    MDBModalService.prototype.copyEvent = function (from, to) {
        var _this = this;
        from.subscribe(function () {
            to.emit(_this.lastDismissReason);
        });
    };
    return MDBModalService;
}());
MDBModalService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
MDBModalService.ctorParameters = function () { return [
    { type: ComponentLoaderFactory, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    /**
     * @return {?}
     */
    ModalModule.forRoot = function () {
        return { ngModule: ModalModule, providers: [MDBModalService, ComponentLoaderFactory, PositioningService] };
    };
    return ModalModule;
}());
ModalModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
                exports: [ModalBackdropComponent, ModalDirective],
                entryComponents: [ModalBackdropComponent, ModalContainerComponent],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Default values provider for tooltip
 */
var TooltipConfig = /** @class */ (function () {
    function TooltipConfig() {
        /**
         * tooltip placement, supported positions: 'top', 'bottom', 'left', 'right'
         */
        this.placement = 'top';
        /**
         * array of event names which triggers tooltip opening
         */
        this.triggers = 'hover focus';
    }
    return TooltipConfig;
}());
TooltipConfig.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TooltipContainerComponent = /** @class */ (function () {
    /**
     * @param {?} config
     */
    function TooltipContainerComponent(config) {
        this.show = !this.isBs3;
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
        /**
         * @return {?}
         */
        get: function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipContainerComponent.prototype.ngAfterViewInit = function () {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap['tooltip-' + this.placement] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.popupClass) {
            this.classMap[this.popupClass] = true;
        }
    };
    return TooltipContainerComponent;
}());
TooltipContainerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'mdb-tooltip-container',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                // tslint:disable-next-line
                host: {
                    '[class]': '"tooltip-fadeIn tooltip in tooltip-" + placement'
                },
                template: "\n  <div class=\"tooltip-arrow\"></div>\n  <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n  "
            },] },
];
/** @nocollapse */
TooltipContainerComponent.ctorParameters = function () { return [
    { type: TooltipConfig, },
]; };
TooltipContainerComponent.propDecorators = {
    "show": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.show',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function OnChange() {
    var /** @type {?} */ sufix = 'Change';
    return function OnChangeHandler(target, propertyKey) {
        var /** @type {?} */ _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            /**
             * @return {?}
             */
            get: function () { return this[_key]; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                var /** @type {?} */ prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
/* tslint:enable */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TooltipDirective = /** @class */ (function () {
    /**
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} cis
     * @param {?} config
     */
    function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config) {
        /**
         * Fired when tooltip content changes
         */
        this.tooltipChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delay = 0;
        this.fadeDuration = 150;
        this._tooltip = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the tooltip is currently being shown
         * @return {?}
         */
        get: function () { return this._tooltip.isShown; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._tooltip.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.tooltipChange.subscribe(function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        });
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.mdbTooltip) {
            return;
        }
        var /** @type {?} */ showTooltip = function () { return _this._tooltip
            .attach(TooltipContainerComponent)
            .to(_this.container)
            .position({ attachment: _this.placement })
            .show({
            content: _this.mdbTooltip,
            placement: _this.placement
        }); };
        if (this.delay) {
            this._delayTimeoutId = setTimeout(function () { showTooltip(); }, this.delay);
        }
        else {
            showTooltip();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.hide = function () {
        var _this = this;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout(function () {
            _this._tooltip.hide();
        }, this.fadeDuration);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.dispose = function () {
        this._tooltip.dispose();
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnDestroy = function () {
        this._tooltip.dispose();
    };
    return TooltipDirective;
}());
TooltipDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdbTooltip]',
                exportAs: 'mdb-tooltip'
            },] },
];
/** @nocollapse */
TooltipDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: ComponentLoaderFactory, },
    { type: TooltipConfig, },
]; };
TooltipDirective.propDecorators = {
    "mdbTooltip": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "tooltipChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "triggers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "isDisabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "onShown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "onHidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "delay": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "fadeDuration": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__decorate"])([
    OnChange(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__metadata"])("design:type", Object)
], TooltipDirective.prototype, "mdbTooltip", void 0);
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    /**
     * @return {?}
     */
    TooltipModule.forRoot = function () {
        return {
            ngModule: TooltipModule,
            providers: [TooltipConfig, ComponentLoaderFactory, PositioningService]
        };
    };
    ;
    return TooltipModule;
}());
TooltipModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [TooltipDirective, TooltipContainerComponent],
                exports: [TooltipDirective],
                entryComponents: [TooltipContainerComponent]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
var PopoverConfig = /** @class */ (function () {
    function PopoverConfig() {
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
    }
    return PopoverConfig;
}());
PopoverConfig.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PopoverContainerComponent = /** @class */ (function () {
    /**
     * @param {?} config
     */
    function PopoverContainerComponent(config) {
        this.show = '!isBs3';
        this.role = 'tooltip';
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        /**
         * @return {?}
         */
        get: function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PopoverContainerComponent.prototype.ngOnInit = function () {
        this.class = 'popover-fadeIn popover in popover-' + this.placement + ' ' + this.placement + ' bs-popover-' + this.placement;
    };
    return PopoverContainerComponent;
}());
PopoverContainerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'mdb-popover-container',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: "\n <h3 class=\"popover-header\" *ngIf=\"title\">{{title}}</h3>\n <div class=\"popover-body\">\n <ng-content></ng-content>\n </div>"
            },] },
];
/** @nocollapse */
PopoverContainerComponent.ctorParameters = function () { return [
    { type: PopoverConfig, },
]; };
PopoverContainerComponent.propDecorators = {
    "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "show": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.show',] },],
    "role": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.role',] },],
    "class": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var PopoverDirective = /** @class */ (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} _config
     * @param {?} cis
     */
    function PopoverDirective(_elementRef, _renderer, _viewContainerRef, _config, cis) {
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: PopoverConfig, useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
    }
    Object.defineProperty(PopoverDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */
        get: function () { return this._popover.isShown; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.show = function () {
        if (this._popover.isShown) {
            return;
        }
        this._popover
            .attach(PopoverContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.mdbPopover,
            placement: this.placement,
            title: this.popoverTitle
        });
        this.isOpen = true;
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.hide = function () {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._popover.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.dispose = function () {
        this._popover.dispose();
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.ngOnDestroy = function () {
        this._popover.dispose();
    };
    return PopoverDirective;
}());
PopoverDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{ selector: '[mdbPopover]', exportAs: 'bs-mdbPopover' },] },
];
/** @nocollapse */
PopoverDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], },
    { type: PopoverConfig, },
    { type: ComponentLoaderFactory, },
]; };
PopoverDirective.propDecorators = {
    "mdbPopover": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "popoverTitle": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "placement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "triggers": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "container": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "isOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    "onShown": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    "onHidden": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PopoverModule = /** @class */ (function () {
    function PopoverModule() {
    }
    /**
     * @return {?}
     */
    PopoverModule.forRoot = function () {
        return {
            ngModule: PopoverModule,
            providers: [PopoverConfig, ComponentLoaderFactory, PositioningService]
        };
    };
    return PopoverModule;
}());
PopoverModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [PopoverDirective, PopoverContainerComponent],
                exports: [PopoverDirective],
                entryComponents: [PopoverContainerComponent]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WavesDirective = /** @class */ (function () {
    /**
     * @param {?} el
     */
    function WavesDirective(el) {
        this.el = el;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    WavesDirective.prototype.click = function (event) {
        // event.stopPropagation();
        if (!this.el.nativeElement.classList.contains('disabled')) {
            var /** @type {?} */ button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            var /** @type {?} */ xPos = event.clientX - button.getBoundingClientRect().left;
            var /** @type {?} */ yPos = event.clientY - button.getBoundingClientRect().top;
            var /** @type {?} */ tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            var /** @type {?} */ ripple = button.appendChild(tmp);
            var /** @type {?} */ top = yPos + 'px';
            var /** @type {?} */ left = xPos + 'px';
            tmp.style.top = top;
            tmp.style.left = left;
            var /** @type {?} */ scale = 'scale(' + ((button.clientWidth / 100) * 3) + ') translate(0,0)';
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            var /** @type {?} */ duration = 750;
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    };
    /**
     * @param {?} button
     * @param {?} ripple
     * @return {?}
     */
    WavesDirective.prototype.removeRipple = function (button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout(function () {
            ripple.style.opacity = '0';
            setTimeout(function () {
                button.removeChild(ripple);
            }, 750);
        }, 200);
    };
    return WavesDirective;
}());
WavesDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[mdbWavesEffect]'
            },] },
];
/** @nocollapse */
WavesDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
]; };
WavesDirective.propDecorators = {
    "click": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WavesModule = /** @class */ (function () {
    function WavesModule() {
    }
    /**
     * @return {?}
     */
    WavesModule.forRoot = function () {
        return { ngModule: WavesModule, providers: [] };
    };
    return WavesModule;
}());
WavesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [WavesDirective],
                exports: [WavesDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MODULES = [
    DeepModule,
    ButtonsModule,
    RippleModule,
    WavesModule,
    InputsModule,
    ActiveModule,
    NavbarModule,
    DropdownModule,
    CarouselModule,
    ChartsModule,
    CollapseModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
];
var MDBRootModule = /** @class */ (function () {
    function MDBRootModule() {
    }
    return MDBRootModule;
}());
MDBRootModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    ButtonsModule,
                    DeepModule,
                    RippleModule.forRoot(),
                    WavesModule.forRoot(),
                    InputsModule.forRoot(),
                    ActiveModule.forRoot(),
                    NavbarModule,
                    DropdownModule.forRoot(),
                    CarouselModule.forRoot(),
                    ChartsModule,
                    CollapseModule.forRoot(),
                    ModalModule.forRoot(),
                    TooltipModule.forRoot(),
                    PopoverModule.forRoot(),
                ],
                exports: MODULES,
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
            },] },
];
var MDBBootstrapModule = /** @class */ (function () {
    function MDBBootstrapModule() {
    }
    /**
     * @return {?}
     */
    MDBBootstrapModule.forRoot = function () {
        return { ngModule: MDBRootModule };
    };
    return MDBBootstrapModule;
}());
MDBBootstrapModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{ exports: MODULES },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=angular-bootstrap-md.es5.js.map


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _writing_writing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../writing/writing.component */ "./src/app/writing/writing.component.ts");
/* harmony import */ var _reading_reading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reading/reading.component */ "./src/app/reading/reading.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _e_grammar_e_grammar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../e-grammar/e-grammar.component */ "./src/app/e-grammar/e-grammar.component.ts");
/* harmony import */ var _reading_i_reading_i_reading_detail_i_reading_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reading/i-reading/i-reading-detail/i-reading-detail.component */ "./src/app/reading/i-reading/i-reading-detail/i-reading-detail.component.ts");
/* harmony import */ var _reading_i_reading_i_reading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reading/i-reading/i-reading.component */ "./src/app/reading/i-reading/i-reading.component.ts");
/* harmony import */ var _reading_i_reading_i_reading_menu_i_reading_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reading/i-reading/i-reading-menu/i-reading-menu.component */ "./src/app/reading/i-reading/i-reading-menu/i-reading-menu.component.ts");
/* harmony import */ var _tense_details_tense_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tense-details/tense-details.component */ "./src/app/tense-details/tense-details.component.ts");
/* harmony import */ var _authentication_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../authentication/auth.guard */ "./src/app/authentication/auth.guard.ts");
/* harmony import */ var _tense_details_tense_details_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tense-details/tense-details.module */ "./src/app/tense-details/tense-details.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _listening_elementary_elementary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../listening/elementary/elementary.component */ "./src/app/listening/elementary/elementary.component.ts");














var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'writing', component: _writing_writing_component__WEBPACK_IMPORTED_MODULE_1__["WritingComponent"], canActivate: [_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'e-grammar', component: _e_grammar_e_grammar_component__WEBPACK_IMPORTED_MODULE_4__["EGrammarComponent"], canActivate: [_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'reading', component: _reading_reading_component__WEBPACK_IMPORTED_MODULE_2__["ReadingComponent"], canActivate: [_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"] },
    { path: 'listen-elementary', component: _listening_elementary_elementary_component__WEBPACK_IMPORTED_MODULE_13__["ElementaryComponent"] },
    { path: 'i-reading-detail/:lesson/:id', component: _reading_i_reading_i_reading_detail_i_reading_detail_component__WEBPACK_IMPORTED_MODULE_5__["IReadingDetailComponent"], canActivate: [_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'i-reading', component: _reading_i_reading_i_reading_component__WEBPACK_IMPORTED_MODULE_6__["IReadingComponent"] },
    { path: "i-reading-menu/:id", component: _reading_i_reading_i_reading_menu_i_reading_menu_component__WEBPACK_IMPORTED_MODULE_7__["IReadingMenuComponent"] },
    {
        path: 'tenseDetails/:name',
        component: _tense_details_tense_details_component__WEBPACK_IMPORTED_MODULE_8__["TenseDetailsComponent"],
        children: _tense_details_tense_details_module__WEBPACK_IMPORTED_MODULE_10__["routes"]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_tense_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/tense.service */ "./src/app/services/tense.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_reading_reading_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/reading/reading-service.service */ "./src/app/services/reading/reading-service.service.ts");
/* harmony import */ var _angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../angular-bootstrap-md */ "./angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _authentication_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authentication/auth.guard */ "./src/app/authentication/auth.guard.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _writing_writing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./writing/writing.component */ "./src/app/writing/writing.component.ts");
/* harmony import */ var _reading_reading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reading/reading.component */ "./src/app/reading/reading.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _e_grammar_e_grammar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./e-grammar/e-grammar.component */ "./src/app/e-grammar/e-grammar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _tense_details_tense_details_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tense-details/tense-details.module */ "./src/app/tense-details/tense-details.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _e_grammar_tense_detail_tense_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./e-grammar/tense-detail/tense-detail.component */ "./src/app/e-grammar/tense-detail/tense-detail.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _listening_listening_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./listening/listening.component */ "./src/app/listening/listening.component.ts");
/* harmony import */ var _listening_elementary_elementary_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./listening/elementary/elementary.component */ "./src/app/listening/elementary/elementary.component.ts");
/* harmony import */ var _listening_elementary_lesson_detail_lesson_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./listening/elementary/lesson-detail/lesson-detail.component */ "./src/app/listening/elementary/lesson-detail/lesson-detail.component.ts");
/* harmony import */ var _reading_i_reading_i_reading_detail_i_reading_detail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./reading/i-reading/i-reading-detail/i-reading-detail.component */ "./src/app/reading/i-reading/i-reading-detail/i-reading-detail.component.ts");
/* harmony import */ var _reading_i_reading_i_reading_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./reading/i-reading/i-reading.component */ "./src/app/reading/i-reading/i-reading.component.ts");
/* harmony import */ var _reading_i_reading_i_reading_menu_i_reading_menu_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./reading/i-reading/i-reading-menu/i-reading-menu.component */ "./src/app/reading/i-reading/i-reading-menu/i-reading-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _writing_writing_component__WEBPACK_IMPORTED_MODULE_12__["WritingComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _reading_reading_component__WEBPACK_IMPORTED_MODULE_13__["ReadingComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _e_grammar_e_grammar_component__WEBPACK_IMPORTED_MODULE_15__["EGrammarComponent"],
                _e_grammar_tense_detail_tense_detail_component__WEBPACK_IMPORTED_MODULE_19__["TenseDetailComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_21__["RegisterComponent"],
                _listening_listening_component__WEBPACK_IMPORTED_MODULE_22__["ListeningComponent"],
                _listening_elementary_elementary_component__WEBPACK_IMPORTED_MODULE_23__["ElementaryComponent"],
                _listening_elementary_lesson_detail_lesson_detail_component__WEBPACK_IMPORTED_MODULE_24__["LessonDetailComponent"],
                _reading_i_reading_i_reading_detail_i_reading_detail_component__WEBPACK_IMPORTED_MODULE_25__["IReadingDetailComponent"],
                _reading_i_reading_i_reading_component__WEBPACK_IMPORTED_MODULE_26__["IReadingComponent"],
                _reading_i_reading_i_reading_menu_i_reading_menu_component__WEBPACK_IMPORTED_MODULE_27__["IReadingMenuComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBBootstrapModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _tense_details_tense_details_module__WEBPACK_IMPORTED_MODULE_17__["tenses"]
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__["APP_BASE_HREF"], useValue: '/' },
                _authentication_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
                _services_tense_service__WEBPACK_IMPORTED_MODULE_4__["TenseService"],
                _services_reading_reading_service_service__WEBPACK_IMPORTED_MODULE_6__["ReadingService"],
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["authenticationService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication/auth.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/authentication/auth.guard.ts ***!
  \**********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            //logined in so return true
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/e-grammar/e-grammar.component.html":
/*!****************************************************!*\
  !*** ./src/app/e-grammar/e-grammar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n        <div class=\"btn-group pt-4 ml-15\">\n            <button class=\"btn btn-primary btn-lg dropdown-toggle\" \n                    type=\"button\" \n                    data-toggle=\"dropdown\"\n                    aria-haspopup=\"true\"\n                    aria-expanded=\"false\"\n                    mdbWavesEffect\n                    >\n                {{selectTense}}\n            </button>\n            <div class=\"dropdown-menu dropdown dropdown-info\" >\n                <a class=\"dropdown-item\" (click)=\"selectTenses('Present')\">Present</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\" (click)=\"selectTenses('Past')\">Past</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\" (click)=\"selectTenses('Future')\">Future</a>\n            </div>\n        </div>\n        <div class=\"btn-group pt-4\">\n            <button class=\"btn btn-primary btn-lg dropdown-toggle\" \n                    type=\"button\" \n                    data-toggle=\"dropdown\" \n                    aria-haspopup=\"true\" \n                    aria-expanded=\"false\">\n               {{selectForm}}\n            </button>\n            <div class=\"dropdown-menu dropdown dropdown-info\">\n                <a class=\"dropdown-item\" (click)=\"selectForms('Simple')\">Simple</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\" (click)=\"selectForms('Progressive')\"> Progressive</a>\n                <div class=\"dropdown-divider\"></div>\n                <a class=\"dropdown-item\" (click)=\"selectForms('Perfect')\">Perfect</a>\n            </div>\n            \n        </div>\n        <div *ngIf=\"goto === true\">\n            <app-tense-detail [tenName]=\"tenseName\"></app-tense-detail>\n        </div>\n        \n</div>\n        <!-- <div *ngIf=\"flag3 === true\" >\n            <h2 class=\"h1-responsive font-weight-bold my-4\">{{tenseData.name}}</h2>\n        </div>\n        <div *ngIf=\"flag4=='start'\">\n            <div *ngFor=\"let question of quest\">\n                <button class=\"btn blue-gradient btn-rounded btn-sm\">\n                    Question {{page.index + 1}} of {{page.count}}\n                </button>\n                <div class=\"pat-3\">\n                    <p class=\"lead font-weight-bold w-responsive mx-auto left\">{{page.index + 1}}. <span [innerHTML]=\"question.name\"></span></p>\n                </div>\n                <div class=\"pt-3\">\n                    <div  *ngFor=\"let option of question.options\">\n                        <div class=\"input-group\" >\n                                <div class=\"input-group-prepend text-center\">\n                                    <div class=\"input-group-text\" \n                                         id=\"btnGroupAddon\"\n                                         [ngStyle]=\"{'background-color':id === option.id  ? '#ffbb33' : 'white'}\">\n                                         {{option.id}}\n                                    </div>\n                                </div>\n                                <div   \n                                       [ngStyle]=\"{'background-color':id === option.id ? '#33b5e5' : 'white'}\"\n                                       class=\"form-control text-left\" \n                                       id={{option.id}} \n                                       (click)=\"onSelect(option);\"\n                                       aria-label=\"Input group example\" \n                                       aria-describedby=\"btnGroupAddon\"\n                                       \n                                >\n                                    {{option.name}}\n                                    <div *ngIf=\"confirm === true && id === option.id\">\n                                        <button type=\"button\" class=\"btn primary-color-dark waves-light\" (click)=\"checkAns(question, option)\"mdbWavesEffect>Confirm</button>\n                                    </div>\n                                    <div *ngIf=\"isAns === true && id === option.id\">\n                                        {{correct}}\n                                    </div>\n                                    <div *ngIf=\"flag5 === true && id === option.id\">\n                                        <p>Incorrect: read this article</p>\n                                        <div></div>\n                                       {{commend}}\n                                    </div>\n                                </div>\n                                <br>\n                                \n                        </div>\n                        <br> \n                    </div>\n                </div>\n                <br> \n                <br>\n                <footer class=\"footer-copyright fixed-bottom blue py-3 text-center text-white\">\n                    <i class=\"fa fa-fast-backward pr-5 fa-lg\" (click)=\"goto(tenseData,0)\"></i>\n                    <i class=\"fa fa-backward pr-5 fa-lg\" (click)=\"goto(tenseData,page.index -1)\"></i>\n                    <i class=\"fa fa-forward pr-5 fa-lg\" (click)=\"goto(tenseData,page.index + 1)\"></i>\n                    <i class=\"fa fa-fast-forward fa-lg\" (click)=\"goto(tenseData,page.count-1)\"></i>\n                  </footer>\n        </div>        -->\n\n\n    \n    "

/***/ }),

/***/ "./src/app/e-grammar/e-grammar.component.scss":
/*!****************************************************!*\
  !*** ./src/app/e-grammar/e-grammar.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pt-4 {\n  padding-top: 2rem !important; }\n\n.container {\n  text-align: center; }\n\n.ml-15 {\n  padding-right: 15px; }\n\n.pt-50 {\n  padding-top: 20rem; }\n\n.btn-rounded {\n  border-radius: 15px; }\n\n.text-justify {\n  border: 2px; }\n\n.blue-gradient {\n  color: #514A9D; }\n\n.pat-3 {\n  padding-top: 10px; }\n\n.left {\n  text-align: left; }\n\n.btn-size {\n  padding: 15px 32px;\n  margin-bottom: 10px; }\n\n.column {\n  float: left;\n  width: 50%; }\n\n.pl-5 {\n  float: left;\n  width: 70%; }\n\n.btn.btn-lg {\n  padding: 1rem 2.0rem;\n  font-size: 0.50rem; }\n\n@media (min-width: 320px) {\n  .navbar {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    padding: 0.5rem 0.5rem; }\n  .input-group {\n    width: 100%;\n    margin: auto; }\n  .btn.btn-lg[_ngcontent-c2] {\n    padding: 1rem 1.0rem;\n    font-size: 0.5rem; }\n  .pt-4 {\n    padding-top: 6rem !important; } }\n\n@media (min-width: 768px) {\n  .input-group {\n    position: relative;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    /* align-items: center; */\n    width: 70%;\n    margin: auto; }\n  .pt-4 {\n    padding-top: 7rem !important; } }\n\n@media (min-width: 992px) {\n  .input-group {\n    position: relative;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    /* align-items: center; */\n    width: 70%;\n    margin: auto; }\n  .pt-4[_ngcontent-c2] {\n    padding-top: 4rem !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ29jdGhpbmhuZ3V5ZW4vRGVza3RvcC9ORy1FTkdMSVNIL3NyYy9hcHAvZS1ncmFtbWFyL2UtZ3JhbW1hci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUE0QixFQUMvQjs7QUFDRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLG1CQUFpQixFQUNwQjs7QUFDRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLFlBQVcsRUFDZDs7QUFDRDtFQUNJLGVBQWMsRUFDakI7O0FBQ0Q7RUFDSSxrQkFBaUIsRUFFcEI7O0FBQ0Q7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksWUFBVztFQUNYLFdBQVUsRUFDYjs7QUFDRDtFQUNJLFlBQVc7RUFDWCxXQUFVLEVBQ2I7O0FBR0Q7RUFDSSxxQkFBb0I7RUFDcEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0k7SUFDSSxvQkFBZTtRQUFmLGdCQUFlO0lBQ2YsdUJBQW1CO1FBQW5CLG9CQUFtQjtJQUNuQix1QkFBOEI7UUFBOUIsK0JBQThCO0lBQzlCLHVCQUFzQixFQUN6QjtFQUNEO0lBQ0ksWUFBVztJQUNYLGFBQVksRUFDZjtFQUVEO0lBQ1EscUJBQW9CO0lBQ3BCLGtCQUFpQixFQUN4QjtFQUVEO0lBQ0ksNkJBQTRCLEVBQy9CLEVBQUE7O0FBTUw7RUFDSTtJQUNJLG1CQUFrQjtJQUNsQixxQkFBYTtJQUFiLGNBQWE7SUFDYixvQkFBZTtRQUFmLGdCQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLFdBQVU7SUFDVixhQUFZLEVBQ2Y7RUFDRDtJQUNJLDZCQUE0QixFQUMvQixFQUFBOztBQUlMO0VBQ0k7SUFDSSxtQkFBa0I7SUFDbEIscUJBQWE7SUFBYixjQUFhO0lBQ2Isb0JBQWU7UUFBZixnQkFBZTtJQUNmLDBCQUEwQjtJQUMxQixXQUFVO0lBQ1YsYUFBWSxFQUNmO0VBQ0Q7SUFDSSw2QkFBNEIsRUFDL0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2UtZ3JhbW1hci9lLWdyYW1tYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHQtNHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbSAhaW1wb3J0YW50O1xufVxuLmNvbnRhaW5lcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWwtMTV7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cbi5wdC01MHtcbiAgICBwYWRkaW5nLXRvcDoyMHJlbTtcbn1cbi5idG4tcm91bmRlZHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuLnRleHQtanVzdGlmeSB7XG4gICAgYm9yZGVyOiAycHg7XG59XG4uYmx1ZS1ncmFkaWVudHtcbiAgICBjb2xvcjogIzUxNEE5RDtcbn1cbi5wYXQtM3tcbiAgICBwYWRkaW5nLXRvcDogMTBweDs7XG4gICAgXG59XG4ubGVmdHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmJ0bi1zaXple1xuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmNvbHVtbntcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNTAlO1xufVxuLnBsLTV7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDcwJTtcbn1cblxuXG4uYnRuLmJ0bi1sZyB7XG4gICAgcGFkZGluZzogMXJlbSAyLjByZW07XG4gICAgZm9udC1zaXplOiAwLjUwcmVtO1xufVxuLy8gU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKVxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7IFxuICAgIC5uYXZiYXIge1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcbiAgICB9XG4gICAgLmlucHV0LWdyb3VwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG5cbiAgICAuYnRuLmJ0bi1sZ1tfbmdjb250ZW50LWMyXSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDEuMHJlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xuICAgIH1cbiAgICBcbiAgICAucHQtNHtcbiAgICAgICAgcGFkZGluZy10b3A6IDZyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cblxuIH1cblxuLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cClcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBcbiAgICAuaW5wdXQtZ3JvdXAge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICAucHQtNCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA3cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuIH1cblxuLy8gTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cClcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyBcbiAgICAuaW5wdXQtZ3JvdXAge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICAucHQtNFtfbmdjb250ZW50LWMyXSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuIH1cblxuLy8gRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7ICB9Il19 */"

/***/ }),

/***/ "./src/app/e-grammar/e-grammar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/e-grammar/e-grammar.component.ts ***!
  \**************************************************/
/*! exports provided: EGrammarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EGrammarComponent", function() { return EGrammarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tense_detail_tense_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tense-detail/tense-detail.component */ "./src/app/e-grammar/tense-detail/tense-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EGrammarComponent = /** @class */ (function () {
    function EGrammarComponent() {
        this.selectTense = "SELECT TENSE";
        this.selectForm = "SELECT FORM";
    }
    EGrammarComponent.prototype.ngOnInit = function () {
    };
    EGrammarComponent.prototype.selectTenses = function (item) {
        this.selectTense = item;
        this.getTenseName();
    };
    EGrammarComponent.prototype.selectForms = function (item) {
        this.selectForm = item;
        this.getTenseName();
    };
    EGrammarComponent.prototype.getTenseName = function () {
        if (this.selectTense !== 'SELECT TENSE' && this.selectForm !== 'SELECT FORM') {
            this.tenseName = this.selectTense + " " + this.selectForm;
            this.goto = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_tense_detail_tense_detail_component__WEBPACK_IMPORTED_MODULE_1__["TenseDetailComponent"]),
        __metadata("design:type", _tense_detail_tense_detail_component__WEBPACK_IMPORTED_MODULE_1__["TenseDetailComponent"])
    ], EGrammarComponent.prototype, "child", void 0);
    EGrammarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-e-grammar',
            template: __webpack_require__(/*! ./e-grammar.component.html */ "./src/app/e-grammar/e-grammar.component.html"),
            styles: [__webpack_require__(/*! ./e-grammar.component.scss */ "./src/app/e-grammar/e-grammar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EGrammarComponent);
    return EGrammarComponent;
}());



/***/ }),

/***/ "./src/app/e-grammar/tense-detail/tense-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/e-grammar/tense-detail/tense-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"h1-responsive font-weight-bold my-4\">{{tenName}}</h2>\n<div>\n  <div *ngFor=\"let question of questions;\">\n    <button class=\"btn blue-gradient btn-rounded btn-sm\">\n      Question {{page.index + 1}} of {{page.num}}\n    </button>\n    <div>\n        <p class=\"lead font-weight-bold w-responsive mx-auto left\">\n          {{page.index + 1 }}. <span>{{question.content}}</span> \n        </p>\n    </div>\n    \n    <div  *ngFor=\"let option of question.options\">\n      <div class=\"input-group\" >\n        <div class=\"input-group-prepend text-center\">\n            <div class=\"input-group-text\">\n                  {{option.id}}\n            </div>\n        </div>\n        <div class=\"form-control text-left\"\n            [ngStyle]=\"{'background-color': ansOptId === option.id ? correctColor : uncorrectColor}\"\n        >\n            {{option.content}}\n            <div *ngIf=\"isVisited === false\">\n                <button type=\"button\" class=\"btn primary-color-dark btn-rounded\" (click)=\"getAnswer(question.id,option.id)\"mdbWavesEffect>Confirm</button>\n            </div>\n        </div> \n      </div>\n    </div>\n    <br>\n    <br>\n    <div *ngIf=\"correct === false\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n            <h2>WRONG </h2><p>Conider to read and do the exercises from <a href=\"{{hind}}\">here</a></p>\n        </div>\n    </div>\n    <div *ngIf=\"correct === true\">\n        <div class=\"alert alert-success\" role=\"alert\">\n            <h2>Correct </h2><p>Congratulation your answer correct, more practice is <a href=\"{{hind}}\">here</a></p>\n        </div>\n    </div>\n    <br>\n    <br>\n\n    <footer class=\"footer-copyright fixed-bottom \">\n        <div class=\"progress\" style=\"height: 20px;\">\n            <div class=\"progress-bar green accent-2\" role=\"progressbar\" \n            [ngStyle]=\"{'width': percent, 'height': '20px', 'color': 'black'}\"\n             aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{percent}}</div>\n        </div>\n        <div class = \"blue py-3 text-center text-white\">\n        <i class=\"fa fa-fast-backward pr-5 fa-lg\" (click)=\"goto(0)\"></i>\n        <i class=\"fa fa-backward pr-5 fa-lg\" (click)=\"goto(page.index -1)\"></i>\n        <i class=\"fa fa-forward pr-5 fa-lg\" (click)=\"goto(page.index + 1)\"></i>\n        <i class=\"fa fa-fast-forward fa-lg\" (click)=\"goto(page.num-1)\"></i>\n        </div>\n      </footer>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/e-grammar/tense-detail/tense-detail.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/e-grammar/tense-detail/tense-detail.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pt-4 {\n  padding-top: 9rem !important; }\n\n.container {\n  text-align: center; }\n\n.ml-15 {\n  padding-right: 15px; }\n\n.pt-50 {\n  padding-top: 20rem; }\n\n.btn-rounded {\n  border-radius: 15px; }\n\n.text-justify {\n  border: 2px; }\n\n.blue-gradient {\n  color: #514A9D; }\n\n.pat-3 {\n  padding-top: 10px; }\n\n.left {\n  text-align: left; }\n\n.btn-size {\n  padding: 15px 32px;\n  margin-bottom: 10px; }\n\n.column {\n  float: left;\n  width: 50%; }\n\n.pl-5 {\n  float: left;\n  width: 70%; }\n\n.btn.btn-lg {\n  padding: 1rem 2.0rem;\n  font-size: 0.94rem; }\n\n@media (min-width: 320px) {\n  .navbar {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    padding: 0.5rem 0.5rem; }\n  .input-group .form-control {\n    margin: 0;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    padding-left: 1.2rem; }\n  .btn.btn-lg {\n    padding: 1rem 1.0rem;\n    font-size: 0.50rem; }\n  .lead {\n    font-size: 1rem;\n    font-weight: 300; }\n  .h1-responsive {\n    font-size: 100%; }\n  .btn {\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n    padding: 0.56rem 1.14rem;\n    font-size: 0.65rem;\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n    /* margin: 0.375rem; */\n    border-radius: 0.5rem;\n    cursor: pointer;\n    text-transform: uppercase;\n    white-space: normal;\n    word-wrap: break-word; } }\n\n@media (min-width: 768px) {\n  .input-group {\n    position: relative;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    /* align-items: center; */\n    width: 70%;\n    margin: auto; }\n  .pt-4[_ngcontent-c2] {\n    padding-top: 9rem !important; } }\n\n@media (min-width: 992px) {\n  .input-group {\n    position: relative;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    /* align-items: center; */\n    width: 70%;\n    margin: auto; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ29jdGhpbmhuZ3V5ZW4vRGVza3RvcC9ORy1FTkdMSVNIL3NyYy9hcHAvZS1ncmFtbWFyL3RlbnNlLWRldGFpbC90ZW5zZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBNEIsRUFDL0I7O0FBQ0Q7RUFDSSxtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxtQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxZQUFXLEVBQ2Q7O0FBQ0Q7RUFDSSxlQUFjLEVBQ2pCOztBQUNEO0VBQ0ksa0JBQWlCLEVBRXBCOztBQUNEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUNEO0VBQ0ksbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLFlBQVc7RUFDWCxXQUFVLEVBQ2I7O0FBQ0Q7RUFDSSxZQUFXO0VBQ1gsV0FBVSxFQUNiOztBQUVEO0VBQ0kscUJBQW9CO0VBQ3BCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJO0lBQ0ksb0JBQWU7UUFBZixnQkFBZTtJQUNmLHVCQUFtQjtRQUFuQixvQkFBbUI7SUFDbkIsdUJBQThCO1FBQTlCLCtCQUE4QjtJQUM5Qix1QkFBc0IsRUFDekI7RUFDRDtJQUNJLFVBQVM7SUFDVCxpQkFBZ0I7SUFDaEIsb0JBQW1CO0lBQ25CLHFCQUFvQixFQUN2QjtFQUNEO0lBQ0kscUJBQW9CO0lBQ3BCLG1CQUFrQixFQUNyQjtFQUNEO0lBQ0ksZ0JBQWU7SUFDZixpQkFBZ0IsRUFDbkI7RUFDRDtJQUNJLGdCQUFlLEVBQ2xCO0VBQ0Q7SUFDSSw4RUFBNkU7SUFDN0UseUJBQXdCO0lBQ3hCLG1CQUFrQjtJQUNsQixzSUFBcUk7SUFDckksdUJBQXVCO0lBQ3ZCLHNCQUFxQjtJQUNyQixnQkFBZTtJQUNmLDBCQUF5QjtJQUN6QixvQkFBbUI7SUFDbkIsc0JBQXFCLEVBQ3hCLEVBQUE7O0FBS0w7RUFDSTtJQUNJLG1CQUFrQjtJQUNsQixxQkFBYTtJQUFiLGNBQWE7SUFDYixvQkFBZTtRQUFmLGdCQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLFdBQVU7SUFDVixhQUFZLEVBQ2Y7RUFDRDtJQUNJLDZCQUE0QixFQUMvQixFQUFBOztBQUlMO0VBQ0k7SUFDSSxtQkFBa0I7SUFDbEIscUJBQWE7SUFBYixjQUFhO0lBQ2Isb0JBQWU7UUFBZixnQkFBZTtJQUNmLDBCQUEwQjtJQUMxQixXQUFVO0lBQ1YsYUFBWSxFQUNmLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lLWdyYW1tYXIvdGVuc2UtZGV0YWlsL3RlbnNlLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wdC00e1xuICAgIHBhZGRpbmctdG9wOiA5cmVtICFpbXBvcnRhbnQ7XG59XG4uY29udGFpbmVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tbC0xNXtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuLnB0LTUwe1xuICAgIHBhZGRpbmctdG9wOjIwcmVtO1xufVxuLmJ0bi1yb3VuZGVke1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4udGV4dC1qdXN0aWZ5IHtcbiAgICBib3JkZXI6IDJweDtcbn1cbi5ibHVlLWdyYWRpZW50e1xuICAgIGNvbG9yOiAjNTE0QTlEO1xufVxuLnBhdC0ze1xuICAgIHBhZGRpbmctdG9wOiAxMHB4OztcbiAgICBcbn1cbi5sZWZ0e1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uYnRuLXNpemV7XG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY29sdW1ue1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA1MCU7XG59XG4ucGwtNXtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogNzAlO1xufVxuXG4uYnRuLmJ0bi1sZyB7XG4gICAgcGFkZGluZzogMXJlbSAyLjByZW07XG4gICAgZm9udC1zaXplOiAwLjk0cmVtO1xufVxuLy8gU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKVxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSB7IFxuICAgIC5uYXZiYXIge1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcbiAgICB9XG4gICAgLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMS4ycmVtO1xuICAgIH1cbiAgICAuYnRuLmJ0bi1sZyB7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMS4wcmVtO1xuICAgICAgICBmb250LXNpemU6IDAuNTByZW07XG4gICAgfVxuICAgIC5sZWFkIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgIH1cbiAgICAuaDEtcmVzcG9uc2l2ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICB9XG4gICAgLmJ0biB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICBwYWRkaW5nOiAwLjU2cmVtIDEuMTRyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbiAgICAgICAgLyogbWFyZ2luOiAwLjM3NXJlbTsgKi9cbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB9XG5cbiB9XG5cbi8vIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgXG4gICAgLmlucHV0LWdyb3VwIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgLnB0LTRbX25nY29udGVudC1jMl0ge1xuICAgICAgICBwYWRkaW5nLXRvcDogOXJlbSAhaW1wb3J0YW50O1xuICAgIH1cbiB9XG5cbi8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHsgXG4gICAgLmlucHV0LWdyb3VwIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gfVxuXG4vLyBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cClcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHsgIH0iXX0= */"

/***/ }),

/***/ "./src/app/e-grammar/tense-detail/tense-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/e-grammar/tense-detail/tense-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: TenseDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenseDetailComponent", function() { return TenseDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tense_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/tense.service */ "./src/app/services/tense.service.ts");
/* harmony import */ var _shared_dataStructure_quiz_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/dataStructure/quiz.model */ "./src/app/shared/dataStructure/quiz.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TenseDetailComponent = /** @class */ (function () {
    function TenseDetailComponent(tenseService) {
        this.tenseService = tenseService;
        this.page = {
            index: 0,
            size: 1,
            num: 1
        };
        this.quiz = new _shared_dataStructure_quiz_model__WEBPACK_IMPORTED_MODULE_2__["Quiz"](null);
        this.isVisited = false;
        this.ansOptId = 0;
        this.correctQues = 0;
        this.percentRight = 0;
        this.percent = '0%';
        this.tense_config = [
            { name: "Present Simple", content: "assets/data/PresentSimple.json" },
            { name: "Past Simple", content: "assets/data/PastSimple.json" }
        ];
    }
    TenseDetailComponent.prototype.ngOnChanges = function () {
        for (var _i = 0, _a = this.tense_config; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry.name === this.tenName) {
                this.tenseUrl = entry.content;
                this.loadQuiz(this.tenseUrl);
            }
        }
    };
    TenseDetailComponent.prototype.loadQuiz = function (tenseUrl) {
        var _this = this;
        this.tenseService.get(tenseUrl).subscribe(function (res) {
            _this.quiz = new _shared_dataStructure_quiz_model__WEBPACK_IMPORTED_MODULE_2__["Quiz"](res);
            _this.page.num = _this.quiz.questions.length;
            _this.page.index = 0;
            _this.page.size = 1;
            _this.isVisited = false;
            _this.ansOptId = 0;
            _this.correctColor = '';
            _this.uncorrectColor = '';
            _this.hind = '';
            _this.correct = null;
            _this.correctQues = 0;
            _this.percentRight = 0;
            _this.percent = '0%';
        });
    };
    Object.defineProperty(TenseDetailComponent.prototype, "questions", {
        get: function () {
            return (this.quiz.questions) ? this.quiz.questions.slice(this.page.index, this.page.index + this.page.size) : [];
        },
        enumerable: true,
        configurable: true
    });
    TenseDetailComponent.prototype.getAnswer = function (qu, op) {
        if (!this.quiz.questions[qu - 1].isVisited) {
            this.quiz.questions[qu - 1].isVisited = true;
            this.isVisited = this.quiz.questions[qu - 1].isVisited;
            for (var _i = 0, _a = this.quiz.questions[qu - 1].options; _i < _a.length; _i++) {
                var option = _a[_i];
                if (option.isAnswer === true && option.id === op && this.quiz.questions[qu - 1].answered.corrected === false) {
                    this.quiz.questions[qu - 1].answered.corrected = true;
                    this.quiz.questions[qu - 1].answered.option_id = op;
                    this.ansOptId = this.quiz.questions[qu - 1].answered.option_id;
                    this.correctColor = '#4285F4';
                    this.correct = this.quiz.questions[qu - 1].answered.corrected;
                    this.hind = this.quiz.questions[qu - 1].answered.hindUrl;
                    this.correctQues++;
                    this.percentRight = Math.floor((this.correctQues / this.page.num) * 100);
                    this.percent = this.percentRight + "%";
                    return false;
                }
                else {
                    this.correct = this.quiz.questions[qu - 1].answered.corrected;
                    this.hind = this.quiz.questions[qu - 1].answered.hindUrl;
                }
            }
        }
    };
    TenseDetailComponent.prototype.goto = function (index) {
        if (index >= 0 && index < this.page.num) {
            this.correct = this.quiz.questions[index].answered.corrected;
            this.ansOptId = this.quiz.questions[index].answered.option_id;
            console.log(this.correct);
            //console.log(this.quiz.questions[index].isVisited);
            if (this.quiz.questions[index].isVisited === false) {
                this.correct = null;
            }
            else {
                this.correct = this.quiz.questions[index].answered.corrected;
            }
            this.page.index = index;
            if (index <= this.page.num && this.quiz.questions[index].isVisited) {
                this.isVisited = true;
            }
            else {
                this.isVisited = false;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TenseDetailComponent.prototype, "tenName", void 0);
    TenseDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tense-detail',
            template: __webpack_require__(/*! ./tense-detail.component.html */ "./src/app/e-grammar/tense-detail/tense-detail.component.html"),
            styles: [__webpack_require__(/*! ./tense-detail.component.scss */ "./src/app/e-grammar/tense-detail/tense-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_tense_service__WEBPACK_IMPORTED_MODULE_1__["TenseService"]])
    ], TenseDetailComponent);
    return TenseDetailComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Main Navigation-->\n<header>\n\n  <nav class=\"navbar fixed-top navbar-expand-lg navbar-dark indigo text-center\">\n      <a class=\"navbar-brand\" routerLink=\"/home\"><strong><h2>English tutorials</h2></strong></a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav mr-auto\" >\n            <li class=\"nav-item dropdown\" dropdown>\n              <a dropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\n              Listening<span class=\"caret\"></span></a>\n              <div *dropdownMenu class=\"dropdown-menu dropdown dropdown-primary\" role=\"menu\">\n                <a class=\"dropdown-item waves-light\" mdbWavesEffect routerLink=\"/listen-elementary\">Elementary Level</a>\n                  <div class=\"divider dropdown-divider\"></div>\n                  <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Intermediate Level</a>\n                  <div class=\"divider dropdown-divider\"></div>\n                  <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Advanced Level</a>\n              </div>\n            </li>\n            <li class=\"nav-item dropdown\" dropdown>\n              <a dropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\n              Speaking<span class=\"caret\"></span></a>\n              <div *dropdownMenu class=\"dropdown-menu dropdown dropdown-primary\" role=\"menu\">\n                  <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Elementary Level</a>\n                  <div class=\"divider dropdown-divider\"></div>\n                  <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Intermediate Level</a>\n                  <div class=\"divider dropdown-divider\"></div>\n                  <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Advanced Level</a>\n              </div>\n            </li>\n            <li class=\"nav-item dropdown\" dropdown>\n              <a dropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\n              Reading<span class=\"caret\"></span></a>\n              <div *dropdownMenu class=\"dropdown-menu dropdown dropdown-primary\" role=\"menu\">\n                  <a class=\"dropdown-item waves-light\" mdbWavesEffect routerLink=\"/reading\">Elementary Level</a>\n                  <div class=\"divider dropdown-divider\"></div>\n                  <a class=\"dropdown-item waves-light\" mdbWavesEffect routerLink=\"/i-reading\">Intermediate Level</a>\n                  <div class=\"divider dropdown-divider\"></div>\n                  <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Advanced Level</a>\n              </div>\n            </li>\n            <li class=\"nav-item dropdown\" dropdown>\n              <a dropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\n              Writing<span class=\"caret\"></span></a>\n              <div *dropdownMenu class=\"dropdown-menu dropdown dropdown-primary\" role=\"menu\">\n                  <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Elementary Level</a>\n                  <div class=\"divider dropdown-divider\"></div>\n                  <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Intermediate Level</a>\n                  <div class=\"divider dropdown-divider\"></div>\n                  <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Advanced Level</a>\n              </div>\n            </li>\n            <li class=\"nav-item dropdown\" dropdown>\n                <a dropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link dropdown-toggle waves-light\">\n                Grammar<span class=\"caret\"></span></a>\n                <div *dropdownMenu class=\"dropdown-menu dropdown dropdown-primary\" role=\"menu\">\n                    <a class=\"dropdown-item waves-light\" mdbWavesEffect routerLink=\"/e-grammar\">Elementary Level</a>\n                    <div class=\"divider dropdown-divider\"></div>\n                    <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Intermediate Level</a>\n                    <div class=\"divider dropdown-divider\"></div>\n                    <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">Advanced Level</a>\n                </div>\n              </li>\n          </ul>\n          <form class=\"form-inline waves-light\" mdbWavesEffect>\n              <div class=\"md-form mt-45\">\n                  <input class=\"form-control mr-sm-20\" type=\"text\" placeholder=\"Search\">\n              </div>\n          </form>\n          <button type=\"button\" class=\"btn btn-round btn-outline-default\" mdbWavesEffect>\n            <ul class=\"navbar-nav nav-flex-icons\">\n                <li class=\"nav-item\">\n                    <a *ngIf=\"logout\" class=\"nav-link\" routerLink=\"/login\">LOG IN &emsp;<i class=\"fa fa-sign-in\"></i></a>\n                    <a *ngIf=\"login\" class=\"nav-link\" routerLink=\"/login\">LOGOUT &emsp;<i class=\"fa fa-sign-out\"></i></a>\n\n                </li>\n            </ul>\n          </button>\n      </div>\n  </nav>\n\n</header>\n<!--Main Navigation-->\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-round {\n  border-radius: 20px; }\n\n@media (min-width: 320px) {\n  .navbar {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    padding: 0.5rem 0.5rem; }\n  .navbar-brand {\n    display: inline-block;\n    /* padding-top: 0.3125rem; */\n    /* padding-bottom: 0.3125rem; */\n    /* margin-right: 1rem; */\n    font-size: 0.5rem;\n    line-height: inherit;\n    white-space: nowrap; } }\n\n@media (min-width: 768px) {\n  .input-group {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    /* align-items: center; */\n    width: 70%;\n    margin: auto; }\n  .pt-4[_ngcontent-c2] {\n    padding-top: 9rem !important; } }\n\n@media (min-width: 992px) {\n  .input-group {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    /* align-items: center; */\n    width: 70%;\n    margin: auto; }\n  .pt-4[_ngcontent-c2] {\n    padding-top: 9rem !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ29jdGhpbmhuZ3V5ZW4vRGVza3RvcC9ORy1FTkdMSVNIL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJO0lBRUkscUJBQWE7SUFBYixjQUFhO0lBQ2Isb0JBQWU7UUFBZixnQkFBZTtJQUNmLHVCQUFtQjtRQUFuQixvQkFBbUI7SUFDbkIsdUJBQThCO1FBQTlCLCtCQUE4QjtJQUM5Qix1QkFBc0IsRUFDekI7RUFDRDtJQUNJLHNCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLHlCQUF5QjtJQUN6QixrQkFBaUI7SUFDakIscUJBQW9CO0lBQ3BCLG9CQUFtQixFQUN0QixFQUFBOztBQU1MO0VBQ0k7SUFFSSxxQkFBYTtJQUFiLGNBQWE7SUFDYixvQkFBZTtRQUFmLGdCQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLFdBQVU7SUFDVixhQUFZLEVBQ2Y7RUFDRDtJQUNJLDZCQUE0QixFQUMvQixFQUFBOztBQUlMO0VBQ0k7SUFFSSxxQkFBYTtJQUFiLGNBQWE7SUFDYixvQkFBZTtRQUFmLGdCQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLFdBQVU7SUFDVixhQUFZLEVBQ2Y7RUFDRDtJQUNJLDZCQUE0QixFQUMvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tcm91bmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgICAubmF2YmFyIHtcbiAgICAgICAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xuICAgIH0gXG4gICAgLm5hdmJhci1icmFuZCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgLyogcGFkZGluZy10b3A6IDAuMzEyNXJlbTsgKi9cbiAgICAgICAgLyogcGFkZGluZy1ib3R0b206IDAuMzEyNXJlbTsgKi9cbiAgICAgICAgLyogbWFyZ2luLXJpZ2h0OiAxcmVtOyAqL1xuICAgICAgICBmb250LXNpemU6IDAuNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuXG5cbiB9XG5cbi8vIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsgXG4gICAgLmlucHV0LWdyb3VwIHtcbiAgICAgICAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICAucHQtNFtfbmdjb250ZW50LWMyXSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA5cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuIH1cblxuLy8gTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cClcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyBcbiAgICAuaW5wdXQtZ3JvdXAge1xuICAgICAgICAvL3Bvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIC5wdC00W19uZ2NvbnRlbnQtYzJdIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDlyZW0gIWltcG9ydGFudDtcbiAgICB9XG4gfVxuXG4vLyBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cClcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHsgIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth) {
        this.auth = auth;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('currentUser')) {
            this.a = JSON.parse(localStorage.getItem('currentUser'));
            if (this.a['status'] === "OK") {
                this.login = true;
            }
            else {
                this.logout = true;
                this.auth.logout();
            }
        }
        else {
            this.logout = true;
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["authenticationService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\n    <!-- <div class=\"container\" style=\"height:1300px;\">\n      <section class=\"text-center feature-box pt-5\"> -->\n          <div class=\"view intro-2 pt-30\">\n              <div class=\"full-bg-img\">\n                  <div class=\"mask rgba-black-light flex-center\">\n                      <div class=\"container\">\n                          <div class=\"white-text text-center wow fadeInUp\">\n                              <h2>English isn't hard</h2>\n                              <h5>Start learning something everyday</h5>\n                              <br>\n                              <p>The order Listening, Speaking, Reading, and Writing is need to be repeated when you learn English </p>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <section class=\"text-center pt-5 pb-2\">\n              <h3 class=\"wow fadeIn\" style=\"visibility: visible; animation-name: fadeIn;\">Our Portfolio </h3>\n          </section>\n          <!--Grid row-->\n          <div class=\"row my-4\">\n              <!--Grid column-->\n              <div class=\"col-lg-4 col-md-12\">\n                  <img src=\"assets/images/bechi1.jpg\" class=\"img-fluid z-depth-2 rounded\" alt=\"First sample image\">\n              </div>\n               <!--Grid column-->\n              <div class=\"col-lg-4 col-md-6\">\n                  <img src=\"assets/images/bechi2.jpg\" class=\"img-fluid z-depth-3 rounded\" alt=\"First sample image\">\n              </div>\n              <div class=\"col-lg-4 col-md-6\">\n                  <img src=\"assets/images/bechi3.jpg\" class=\"img-fluid z-depth-4 rounded\" alt=\"First sample image\">\n              </div>\n          </div>\n          <!--Grid row-->\n          <div class=\"row my-4\">\n              <div class=\"col-lg-4 col-md-12\">\n                  <img src=\"assets/images/bechi4.jpg\" class=\"img-fluid z-depth-2 rounded\" alt=\"First sample image\">\n              </div>\n              <div class=\"col-lg-4 col-md-6\">\n                  <img src=\"assets/images/bechi5.jpg\" class=\"img-fluid z-depth-3 rounded\" alt=\"First sample image\">\n              </div>\n              <div class=\"col-lg-4 col-md-6\">\n                  <img src=\"assets/images/bechi6.jpg\" class=\"img-fluid z-depth-4 rounded\" alt=\"First sample image\">\n              </div>\n            \n          </div>\n          <div class=\"row my-4\">\n              <div class=\"col-lg-4 col-md-12\">\n                  <img src=\"assets/images/bechi7.jpg\" class=\"img-fluid z-depth-2 rounded\" alt=\"First sample image\">\n              </div>\n              <div class=\"col-lg-4 col-md-6\">\n                  <img src=\"assets/images/bechi8.jpg\" class=\"img-fluid z-depth-3 rounded\" alt=\"First sample image\">\n              </div>\n              <div class=\"col-lg-4 col-md-6\">\n                  <img src=\"assets/images/bechi6.jpg\" class=\"img-fluid z-depth-4 rounded\" alt=\"First sample image\">\n              </div>\n            \n          </div>\n\n  </main>\n  \n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pt-30, .py-30 {\n  padding-top: 40rem !important; }\n\n.view {\n  background: url(\"/assets/images/vancouver.jpg\") no-repeat center center;\n  background-size: cover; }\n\n@media (min-width: 768px) {\n  .view {\n    overflow: visible;\n    margin-top: -56px; } }\n\n.navbar {\n  z-index: 1; }\n\n.text-small {\n  font-size: 0.75rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ29jdGhpbmhuZ3V5ZW4vRGVza3RvcC9ORy1FTkdMSVNIL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQTZCLEVBQ2hDOztBQUNEO0VBQ0ksd0VBQXVFO0VBQ3ZFLHVCQUFzQixFQUN6Qjs7QUFDRDtFQUNJO0lBQ0ksa0JBQWlCO0lBQ2pCLGtCQUFpQixFQUNwQixFQUFBOztBQUVMO0VBQ0ksV0FBVSxFQUNiOztBQUNEO0VBQ0ksbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnB0LTMwLCAucHktMzAge1xuICAgIHBhZGRpbmctdG9wOiA0MHJlbSAhaW1wb3J0YW50O1xufVxuLnZpZXcge1xuICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL3ZhbmNvdXZlci5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC52aWV3IHtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIG1hcmdpbi10b3A6IC01NnB4O1xuICAgIH1cbn1cbi5uYXZiYXIge1xuICAgIHotaW5kZXg6IDE7XG59XG4udGV4dC1zbWFsbCB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/listening/elementary/elementary.component.html":
/*!****************************************************************!*\
  !*** ./src/app/listening/elementary/elementary.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n  <div class=\"btn-group pt-4 ml-15\">\n      <button class=\"btn btn-primary btn-lg dropdown-toggle\" \n              type=\"button\" \n              data-toggle=\"dropdown\"\n              aria-haspopup=\"true\"\n              aria-expanded=\"false\"\n              mdbWavesEffect\n              >\n          {{selectedLesson}}\n      </button>\n      <div class=\"dropdown-menu dropdown dropdown-info\" >\n          <a class=\"dropdown-item\" (click)=\"selectLesson('Clap Clap Clap')\">Clap Clap Clap</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" (click)=\"selectLesson('Button Up')\">Button up</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" (click)=\"selectLesson('Come On Everyday')\">Come on everyday</a>\n      </div>\n  </div>\n  <div *ngIf=\"goto === true\">\n    <app-lesson-detail [selectedLessonTransfer]=\"selectedLessonTranfer\"></app-lesson-detail>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/listening/elementary/elementary.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/listening/elementary/elementary.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RlbmluZy9lbGVtZW50YXJ5L2VsZW1lbnRhcnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/listening/elementary/elementary.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/listening/elementary/elementary.component.ts ***!
  \**************************************************************/
/*! exports provided: ElementaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementaryComponent", function() { return ElementaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElementaryComponent = /** @class */ (function () {
    function ElementaryComponent() {
        this.selectedLesson = "SELECT LESSON";
        this.goto = false;
    }
    ElementaryComponent.prototype.ngOnInit = function () {
    };
    ElementaryComponent.prototype.selectLesson = function (lesson) {
        this.selectedLesson = lesson;
        this.selectedLessonTranfer = this.selectedLesson.replace(/\s/g, '');
        this.goto = true;
    };
    ElementaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-elementary',
            template: __webpack_require__(/*! ./elementary.component.html */ "./src/app/listening/elementary/elementary.component.html"),
            styles: [__webpack_require__(/*! ./elementary.component.scss */ "./src/app/listening/elementary/elementary.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ElementaryComponent);
    return ElementaryComponent;
}());



/***/ }),

/***/ "./src/app/listening/elementary/lesson-detail/lesson-detail.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/listening/elementary/lesson-detail/lesson-detail.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  lesson-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/listening/elementary/lesson-detail/lesson-detail.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/listening/elementary/lesson-detail/lesson-detail.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RlbmluZy9lbGVtZW50YXJ5L2xlc3Nvbi1kZXRhaWwvbGVzc29uLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/listening/elementary/lesson-detail/lesson-detail.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/listening/elementary/lesson-detail/lesson-detail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LessonDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonDetailComponent", function() { return LessonDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LessonDetailComponent = /** @class */ (function () {
    function LessonDetailComponent() {
    }
    LessonDetailComponent.prototype.ngOnInit = function () {
        console.log(this.selectedLessonTransfer);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LessonDetailComponent.prototype, "selectedLessonTransfer", void 0);
    LessonDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson-detail',
            template: __webpack_require__(/*! ./lesson-detail.component.html */ "./src/app/listening/elementary/lesson-detail/lesson-detail.component.html"),
            styles: [__webpack_require__(/*! ./lesson-detail.component.scss */ "./src/app/listening/elementary/lesson-detail/lesson-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LessonDetailComponent);
    return LessonDetailComponent;
}());



/***/ }),

/***/ "./src/app/listening/listening.component.html":
/*!****************************************************!*\
  !*** ./src/app/listening/listening.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/listening/listening.component.scss":
/*!****************************************************!*\
  !*** ./src/app/listening/listening.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top {\n  margin-top: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ29jdGhpbmhuZ3V5ZW4vRGVza3RvcC9ORy1FTkdMSVNIL3NyYy9hcHAvbGlzdGVuaW5nL2xpc3RlbmluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbGlzdGVuaW5nL2xpc3RlbmluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3B7XG4gICAgbWFyZ2luLXRvcDo1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/listening/listening.component.ts":
/*!**************************************************!*\
  !*** ./src/app/listening/listening.component.ts ***!
  \**************************************************/
/*! exports provided: ListeningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeningComponent", function() { return ListeningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListeningComponent = /** @class */ (function () {
    function ListeningComponent() {
        this.selectedLesson = "SELECT LESSON";
    }
    ListeningComponent.prototype.ngOnInit = function () {
    };
    ListeningComponent.prototype.selectLesson = function (lesson) {
        this.selectedLesson = lesson;
    };
    ListeningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listening',
            template: __webpack_require__(/*! ./listening.component.html */ "./src/app/listening/listening.component.html"),
            styles: [__webpack_require__(/*! ./listening.component.scss */ "./src/app/listening/listening.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListeningComponent);
    return ListeningComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xl-5 mx-auto mt-5\">\n          <div class=\"card wow fadeIn animated\">\n          <!-- Material form login -->\n            <div class=\"card-body\">\n              <form name=\"form\" (ngSubmit) = \"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n                  <p class=\"h4 text-center\">Sign in</p>\n                  <div [ngClass] = \"{'has-error': f.submitted && !username.valid }\">\n                    <div class=\"md-form form-sm\"> <i class=\"fa fa-envelope prefix grey-text\"></i>\n                      <input type=\"text\" \n                            id=\"username\" \n                            class=\"form-control form-control-sm\"\n                            name=\"username\"\n                            [(ngModel)]=\"model.username\"\n                            #username=\"ngModel\"\n                            required\n                            >\n                      <label for=\"username\">Username</label>\n                    </div>\n                    <small *ngIf=\"f.submitted && !username.valid\" class=\"danger-text\">Username is required</small>\n                    <small *ngIf=\"usernameError\" class=\"danger-text\">Username is incorrect</small>\n\n                </div>\n\n                <!-- Material input password -->\n                <div class=\"form-group\" [ng-class]=\"{'has-error': f.submitted && !password.valid}\">\n                    <div class=\"md-form\">\n                        <i class=\"fa fa-lock prefix grey-text\"></i>\n                        <input type=\"password\" \n                               id=\"password\" \n                               class=\"form-control\"\n                               name=\"password\"\n                               [(ngModel)] = \"model.password\"\n                               #password=\"ngModel\"\n                               required\n                               >\n                        <label for=\"password\">Your password</label>\n                    </div>\n                    <small *ngIf=\"f.submitted && !password.valid\" class=\"danger-text\">Password is required</small>\n                    <small *ngIf=\"passwordError\" class=\"danger-text\">Password is incorrect</small>\n\n                </div>\n\n          \n                <div class=\"text-center mt-4\">\n                    <button [disabled]=\"loading\" class=\"btn btn-default\" type=\"submit\">Login</button>\n                    <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                </div>\n              </form>\n\n              <div class=\"text-center mt-4\">\n                <hr>\n              </div>\n              <div class=\"text-right mt-4\">\n                  <span>Not a member? <a [routerLink]=\"['/register']\" style=\"color:#0d47a1\">SignUp</a></span><br>\n                  <span class=\"mt-4\">Forgot <a  style=\"color:#0d47a1\">password?</a> </span>\n                </div>\n            <!-- Material form login -->\n            </div>\n          </div>\n          </div>\n        </div>\n  </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-default {\n  background-color: #0d47a1 !important; }\n\n.danger-text {\n  color: #ff3547; }\n\n.mt-5 {\n  padding-top: 20vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ29jdGhpbmhuZ3V5ZW4vRGVza3RvcC9ORy1FTkdMSVNIL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FDSixFQUFDOztBQUNEO0VBQ0ksZUFBYyxFQUNqQjs7QUFDRDtFQUNJLGtCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1kZWZhdWx0e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDQ3YTEgIWltcG9ydGFudFxufVxuLmRhbmdlci10ZXh0IHtcbiAgICBjb2xvcjogI2ZmMzU0NzsgXG59XG4ubXQtNXtcbiAgICBwYWRkaW5nLXRvcDoyMHZoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/index */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authenticationService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.usernameError = false;
        this.passwordError = false;
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            if (data.message.username === 'false' && data.message.password === 'true') {
                _this.loading = false;
                _this.usernameError = true;
                _this.passwordError = false;
            }
            else if (data.message.username === 'true' && data.message.password === 'false') {
                _this.loading = false;
                _this.usernameError = false;
                _this.passwordError = true;
            }
            else {
                _this.router.navigate([_this.returnUrl]);
            }
        }, function (error) {
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_index__WEBPACK_IMPORTED_MODULE_2__["authenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/reading/i-reading/categories.model.ts":
/*!**************************************************************!*\
  !*** ./src/app/models/reading/i-reading/categories.model.ts ***!
  \**************************************************************/
/*! exports provided: categories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categories", function() { return categories; });
/* harmony import */ var _category_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.model */ "./src/app/models/reading/i-reading/category.model.ts");

var categories = /** @class */ (function () {
    function categories(data) {
        var _this = this;
        if (data) {
            this.title = data.title;
            this.content = [];
            data.content.forEach(function (element) {
                _this.content.push(new _category_model__WEBPACK_IMPORTED_MODULE_0__["category"](element));
            });
        }
    }
    return categories;
}());



/***/ }),

/***/ "./src/app/models/reading/i-reading/category.model.ts":
/*!************************************************************!*\
  !*** ./src/app/models/reading/i-reading/category.model.ts ***!
  \************************************************************/
/*! exports provided: category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category", function() { return category; });
var category = /** @class */ (function () {
    function category(data) {
        this.id = data.id;
        this.src_img = data.src_img;
        this.title = data.title;
    }
    return category;
}());



/***/ }),

/***/ "./src/app/models/reading/lessons.model.ts":
/*!*************************************************!*\
  !*** ./src/app/models/reading/lessons.model.ts ***!
  \*************************************************/
/*! exports provided: readingLessons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readingLessons", function() { return readingLessons; });
/* harmony import */ var _reading_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reading.model */ "./src/app/models/reading/reading.model.ts");

var readingLessons = /** @class */ (function () {
    function readingLessons(data) {
        var _this = this;
        if (data) {
            this.name = data.name;
            this.title = data.title;
            this.lessons = [];
            data.lessons.forEach(function (el) {
                _this.lessons.push(new _reading_model__WEBPACK_IMPORTED_MODULE_0__["readingModel"](el));
            });
        }
    }
    return readingLessons;
}());



/***/ }),

/***/ "./src/app/models/reading/reading.model.ts":
/*!*************************************************!*\
  !*** ./src/app/models/reading/reading.model.ts ***!
  \*************************************************/
/*! exports provided: readingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readingModel", function() { return readingModel; });
var readingModel = /** @class */ (function () {
    function readingModel(data) {
        this.id = data.healthId;
        this.title = data.title;
        this.audio = data.audio;
        this.content = data.content;
    }
    return readingModel;
}());



/***/ }),

/***/ "./src/app/reading/i-reading/i-reading-detail/i-reading-detail.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/reading/i-reading/i-reading-detail/i-reading-detail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n      <div *ngFor=\"let question of lesson;\">\n        <audio controls class=\"header__audio\">\n            <source src=\"#\" type=\"audio/ogg\">\n            <source src={{question.audio}} type=\"audio/mpeg\">\n            Your browser does not support the audio element.\n        </audio>\n        <div class=\"header__title\">\n                {{question.title}}\n                <div>\n                    <button class=\"btn btn-primary btn-sm\">\n                        Reading {{page.index}} of {{page.num-1}}\n                    </button>\n                </div>\n\n        </div>\n          \n          <div class=\"body\" [innerHTML] =\"question.content\" ></div>\n      </div>\n\n</div>\n<footer class=\"footer-copyright fixed-bottom \">\n    <div class = \"blue py-3 text-center text-white\">\n    <i class=\"fa fa-fast-backward pr-5 fa-lg\" (click)=\"goto(0)\"></i>\n    <i class=\"fa fa-backward pr-5 fa-lg\" (click)=\"goto(page.index - 1)\"></i>\n    <i class=\"fa fa-forward pr-5 fa-lg\" (click)=\"goto(page.index + 1)\"></i>\n    <i class=\"fa fa-fast-forward fa-lg\" (click)=\"goto(page.num-1)\"></i>\n    </div>\n  </footer>"

/***/ }),

/***/ "./src/app/reading/i-reading/i-reading-detail/i-reading-detail.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/reading/i-reading/i-reading-detail/i-reading-detail.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header__title {\n  display: block;\n  width: 100%;\n  background-image: linear-gradient(to right bottom, #7ed56f, #28b485);\n  background-size: cover;\n  background-position: top;\n  text-align: center;\n  top: 2.5vh;\n  padding-top: 5rem;\n  position: relative;\n  font-size: 4.5vh;\n  z-index: 1; }\n\n.header__audio {\n  position: absolute;\n  width: 300px;\n  height: 300px;\n  bottom: 60px;\n  right: 25%;\n  left: 50%;\n  margin-left: -150px;\n  position: -webkit-sticky;\n  position: fixed;\n  z-index: 3000; }\n\n.body {\n  position: absolute;\n  margin-top: 8vh;\n  font-size: 1.2rem;\n  padding: 1.5rem;\n  z-index: 1;\n  margin-bottom: 7rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ29jdGhpbmhuZ3V5ZW4vRGVza3RvcC9ORy1FTkdMSVNIL3NyYy9hcHAvcmVhZGluZy9pLXJlYWRpbmcvaS1yZWFkaW5nLWRldGFpbC9pLXJlYWRpbmctZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ1EsZUFBYTtFQUNiLFlBQVc7RUFDWCxxRUFBK0c7RUFDL0csdUJBQXNCO0VBQ3RCLHlCQUF3QjtFQUN4QixtQkFBa0I7RUFDbEIsV0FBUztFQUNULGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLFdBQVUsRUFDakI7O0FBRUQ7RUFDSSxtQkFBaUI7RUFDakIsYUFBVztFQUNYLGNBQVk7RUFDWixhQUFXO0VBQ1gsV0FBUztFQUNULFVBQVE7RUFDUixvQkFBa0I7RUFDbEIseUJBQXdCO0VBQ3hCLGdCQUFlO0VBRWYsY0FBYSxFQUNoQjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixnQkFBYztFQUNkLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLFdBQVU7RUFDVixvQkFBbUIsRUFFdEIiLCJmaWxlIjoic3JjL2FwcC9yZWFkaW5nL2ktcmVhZGluZy9pLXJlYWRpbmctZGV0YWlsL2ktcmVhZGluZy1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItcHJpbWFyeTogIzU1YzU3YTtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiAjN2VkNTZmO1xuJGNvbG9yLXByaW1hcnktZGFyazogIzI4YjQ4NTtcbiRjb2xvci1ncmV5LWRhcms6IGJsYWNrO1xuXG4uaGVhZGVyX190aXRsZXtcbiAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sIHJnYmEoJGNvbG9yLXByaW1hcnktbGlnaHQsIDEpLCByZ2JhKCRjb2xvci1wcmltYXJ5LWRhcmssIDEpKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRvcDoyLjV2aDtcbiAgICAgICAgcGFkZGluZy10b3A6IDVyZW07XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1zaXplOiA0LjV2aDtcbiAgICAgICAgei1pbmRleDogMTsgICBcbn1cblxuLmhlYWRlcl9fYXVkaW97XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgd2lkdGg6MzAwcHg7XG4gICAgaGVpZ2h0OjMwMHB4O1xuICAgIGJvdHRvbTo2MHB4O1xuICAgIHJpZ2h0OjI1JTtcbiAgICBsZWZ0OjUwJTtcbiAgICBtYXJnaW4tbGVmdDotMTUwcHg7XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAvLyB0b3A6MTAuNXZoO1xuICAgIHotaW5kZXg6IDMwMDA7XG59IFxuXG4uYm9keXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDo4dmg7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgcGFkZGluZzogMS41cmVtO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbWFyZ2luLWJvdHRvbTogN3JlbTtcbiAgICBcbn1cblxuXG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/reading/i-reading/i-reading-detail/i-reading-detail.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/reading/i-reading/i-reading-detail/i-reading-detail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: IReadingDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IReadingDetailComponent", function() { return IReadingDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reading_reading_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/reading/reading-service.service */ "./src/app/services/reading/reading-service.service.ts");
/* harmony import */ var _models_reading_lessons_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/reading/lessons.model */ "./src/app/models/reading/lessons.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IReadingDetailComponent = /** @class */ (function () {
    function IReadingDetailComponent(readingservice, route, router) {
        var _this = this;
        this.readingservice = readingservice;
        this.route = route;
        this.router = router;
        this.page = {
            index: 0,
            size: 1,
            num: 1
        };
        this.lessons = new _models_reading_lessons_model__WEBPACK_IMPORTED_MODULE_2__["readingLessons"](null);
        this.reading_config = [{
                name: "health", content: "assets/data/reading/"
            }];
        route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.category = params['lesson'];
        });
    }
    IReadingDetailComponent.prototype.ngOnInit = function () {
        console.log(this.id);
        console.log(this.category);
        for (var _i = 0, _a = this.reading_config; _i < _a.length; _i++) {
            var entry = _a[_i];
            this.loadLesson(entry.content);
        }
    };
    IReadingDetailComponent.prototype.ngOnChanges = function () {
        //TODO: NEED TO DOUBLE CHECK SECURE FOR THIS.ID AND THIS.CATEGORY
        for (var _i = 0, _a = this.reading_config; _i < _a.length; _i++) {
            var entry = _a[_i];
            this.loadLesson(entry.content);
        }
    };
    IReadingDetailComponent.prototype.loadLesson = function (le) {
        var _this = this;
        var index = 0;
        var url = le + "/" + this.category + "/" + this.category + ".json";
        this.readingservice.get(url).subscribe(function (res) {
            _this.lessons = new _models_reading_lessons_model__WEBPACK_IMPORTED_MODULE_2__["readingLessons"](res);
            _this.lesson = _this.lessons.lessons;
            for (var _i = 0, _a = _this.lesson; _i < _a.length; _i++) {
                var entry = _a[_i];
                if (entry.id === parseInt(_this.id) && entry.id !== 0) {
                    _this.page.index = entry.id;
                }
            }
            _this.page.num = _this.lessons.lessons.length;
            //this.page.index= 0;
            _this.page.size = 1;
            _this.getlesson(_this.page.index);
        });
    };
    IReadingDetailComponent.prototype.getlesson = function (indexArr) {
        this.lesson = (this.lessons.lessons) ? this.lessons.lessons.slice(indexArr, indexArr + this.page.size) : [];
    };
    IReadingDetailComponent.prototype.goto = function (index) {
        if (index >= 0 && index < this.page.num) {
            this.page.index = index;
            this.router.navigate(['/i-reading-detail/' + this.category + '/' + this.page.index], { relativeTo: this.route });
            this.getlesson(this.page.index);
        }
    };
    IReadingDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-i-reading',
            template: __webpack_require__(/*! ./i-reading-detail.component.html */ "./src/app/reading/i-reading/i-reading-detail/i-reading-detail.component.html"),
            styles: [__webpack_require__(/*! ./i-reading-detail.component.scss */ "./src/app/reading/i-reading/i-reading-detail/i-reading-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_reading_reading_service_service__WEBPACK_IMPORTED_MODULE_1__["ReadingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], IReadingDetailComponent);
    return IReadingDetailComponent;
}());



/***/ }),

/***/ "./src/app/reading/i-reading/i-reading-menu/i-reading-menu.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/reading/i-reading/i-reading-menu/i-reading-menu.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center pt-15\">\n  <div *ngIf=\"loading === false\" class=\"container pb-4\">\n    <div class=\"row\">\n      <div class=\"col-4\">\n        <hr>\n      </div>\n      <div class=\"col-4 text-center\">\n          <h1>{{lessonCate}}</h1>\n        </div>\n        <div class=\"col-4\">\n            <hr>\n          </div>\n    </div>\n  </div>\n  <div  class=\"table-responsive \">\n      <img *ngIf=\"loading\" src=\"assets/images/Ripple.gif\" />\n      <table *ngIf=\"loading === false\" class=\"table\">\n        <thead class=\"primary-color-dark white-text\">\n          <tr>\n            <th>ID</th>\n            <th>Title</th>\n            <th>% Read</th>\n            <th>% Test</th>\n          </tr>\n        </thead>\n        \n        <tbody>\n          <tr mdbTableCol *ngFor=\"let lesson of lessonsArr\" class=\"title\" [routerLink]=\"['/i-reading-detail',lesson.category,lesson.id]\">\n            <th scope=\"row\">{{lesson.id}}</th>\n            <th >{{lesson.title}}</th>\n            <th>{{lesson.percentAssume}}%</th>\n            <th>{{lesson.percentActual}}%</th>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/reading/i-reading/i-reading-menu/i-reading-menu.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/reading/i-reading/i-reading-menu/i-reading-menu.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pt-15 {\n  margin-top: 13vh; }\n\n.center {\n  padding: 3vh; }\n\nth {\n  font-size: 2.0vh; }\n\n.title:hover {\n  background-color: #4285F4;\n  color: white;\n  cursor: pointer; }\n\nh1 {\n  font-size: 4vh;\n  text-transform: uppercase;\n  font-weight: 700;\n  display: inline-block;\n  background-image: linear-gradient(to right, #7ed56f, #28b485);\n  -webkit-background-clip: text;\n  color: transparent;\n  letter-spacing: .2rem;\n  transition: all .2s; }\n\nhr {\n  margin-top: 1,5vh;\n  size: 30px; }\n\n/* Large devices (laptops/desktops, 992px and up) */\n\n@media only screen and (min-width: 1366px) {\n  .center {\n    padding: 3vh 32vh; } }\n\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n\n@media only screen and (min-width: 1200px) {\n  .center {\n    padding: 4vh 32vh; } }\n\nimg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ29jdGhpbmhuZ3V5ZW4vRGVza3RvcC9ORy1FTkdMSVNIL3NyYy9hcHAvcmVhZGluZy9pLXJlYWRpbmcvaS1yZWFkaW5nLW1lbnUvaS1yZWFkaW5nLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxpQkFBZ0IsRUFDbEI7O0FBQ0Q7RUFDSSxhQUFXLEVBQ2Q7O0FBQ0Q7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFFUSwwQkFBeUI7RUFDekIsYUFBWTtFQUNaLGdCQUFlLEVBQ2xCOztBQUVMO0VBQ0ksZUFBYztFQUNkLDBCQUF5QjtFQUN6QixpQkFBZ0I7RUFDaEIsc0JBQXFCO0VBQ3JCLDhEQUE2RDtFQUM3RCw4QkFBNkI7RUFDN0IsbUJBQWtCO0VBQ2xCLHNCQUFxQjtFQUNyQixvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxrQkFBaUI7RUFDakIsV0FBUyxFQUNaOztBQUNELG9EQUFvRDs7QUFDcEQ7RUFDSTtJQUNJLGtCQUFpQixFQUNwQixFQUFBOztBQUdMLHFFQUFxRTs7QUFDckU7RUFDSTtJQUNJLGtCQUFpQixFQUNwQixFQUFBOztBQUdMO0VBQ0ksZUFBYztFQUNkLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsV0FBVSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvcmVhZGluZy9pLXJlYWRpbmcvaS1yZWFkaW5nLW1lbnUvaS1yZWFkaW5nLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHQtMTV7XG4gICBtYXJnaW4tdG9wOiAxM3ZoO1xufVxuLmNlbnRlcntcbiAgICBwYWRkaW5nOjN2aDtcbn1cbnRoe1xuICAgIGZvbnQtc2l6ZTogMi4wdmg7XG59XG5cbi50aXRsZXtcbiAgICAmOmhvdmVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4NUY0O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5oMXtcbiAgICBmb250LXNpemU6IDR2aDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzdlZDU2ZiwgIzI4YjQ4NSk7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGxldHRlci1zcGFjaW5nOiAuMnJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xufVxuaHJ7XG4gICAgbWFyZ2luLXRvcDogMSw1dmg7XG4gICAgc2l6ZTozMHB4O1xufVxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzY2cHgpIHtcbiAgICAuY2VudGVye1xuICAgICAgICBwYWRkaW5nOiAzdmggMzJ2aDtcbiAgICB9XG59IFxuXG4vKiBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBsYXB0b3BzIGFuZCBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgLmNlbnRlcntcbiAgICAgICAgcGFkZGluZzogNHZoIDMydmg7XG4gICAgfVxufVxuXG5pbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/reading/i-reading/i-reading-menu/i-reading-menu.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/reading/i-reading/i-reading-menu/i-reading-menu.component.ts ***!
  \******************************************************************************/
/*! exports provided: IReadingMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IReadingMenuComponent", function() { return IReadingMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reading_reading_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/reading/reading-service.service */ "./src/app/services/reading/reading-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IReadingMenuComponent = /** @class */ (function () {
    function IReadingMenuComponent(readingservice, route) {
        var _this = this;
        this.readingservice = readingservice;
        this.route = route;
        this.reading_config = [{
                name: "health", content: "assets/data/reading/"
            }];
        route.params.subscribe(function (params) { _this.id = params['id']; });
    }
    IReadingMenuComponent.prototype.ngOnInit = function () {
        this.loadLesson(this.id);
    };
    IReadingMenuComponent.prototype.loadLesson = function (para) {
        var _this = this;
        this.loading = true;
        this.readingservice.getMenu(para).subscribe(function (res) {
            if (res.length !== 0) {
                _this.loading = false;
                _this.lessonCate = res[0].category;
                _this.lessonsArr = res;
            }
        });
    };
    IReadingMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-i-reading-menu',
            template: __webpack_require__(/*! ./i-reading-menu.component.html */ "./src/app/reading/i-reading/i-reading-menu/i-reading-menu.component.html"),
            styles: [__webpack_require__(/*! ./i-reading-menu.component.scss */ "./src/app/reading/i-reading/i-reading-menu/i-reading-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_reading_reading_service_service__WEBPACK_IMPORTED_MODULE_1__["ReadingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], IReadingMenuComponent);
    return IReadingMenuComponent;
}());



/***/ }),

/***/ "./src/app/reading/i-reading/i-reading.component.html":
/*!************************************************************!*\
  !*** ./src/app/reading/i-reading/i-reading.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-6\">\n    <div class=\"row\">\n      <div class=\"col-4\"><hr size=\"90\"></div>\n      <div class=\"col-4\"><h4 class=\"text-center text-info\">{{categories.title}}</h4></div>\n      <div class=\"col-4\"><hr size=\"90\"></div>\n    </div>\n    <div class=\"row pt-4\">\n      <div class=\"col-4 pb-4\" *ngFor=\"let cate of categoriesArr\">\n        <div class=\"thumbnail\">\n          <div [routerLink]=\"['/i-reading-menu',cate.id]\">\n              <img src=\"{{cate.src_img}}\" alt=\"\" class=\"img-fluid z-depth-2 img-thumbnail\">\n              <div class=\"caption\">\n                <h3>\n                    <h6 class=\"text-center text-info pt-3\">{{cate.title}}</h6>\n                </h3>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/reading/i-reading/i-reading.component.scss":
/*!************************************************************!*\
  !*** ./src/app/reading/i-reading/i-reading.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pt-6 {\n  padding-top: 20vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ29jdGhpbmhuZ3V5ZW4vRGVza3RvcC9ORy1FTkdMSVNIL3NyYy9hcHAvcmVhZGluZy9pLXJlYWRpbmcvaS1yZWFkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWlCLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmVhZGluZy9pLXJlYWRpbmcvaS1yZWFkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnB0LTZ7XG4gICAgcGFkZGluZy10b3A6IDIwdmg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/reading/i-reading/i-reading.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/reading/i-reading/i-reading.component.ts ***!
  \**********************************************************/
/*! exports provided: IReadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IReadingComponent", function() { return IReadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reading_reading_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/reading/reading-service.service */ "./src/app/services/reading/reading-service.service.ts");
/* harmony import */ var _models_reading_i_reading_categories_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/reading/i-reading/categories.model */ "./src/app/models/reading/i-reading/categories.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IReadingComponent = /** @class */ (function () {
    function IReadingComponent(readingservice) {
        this.readingservice = readingservice;
        this.categories = new _models_reading_i_reading_categories_model__WEBPACK_IMPORTED_MODULE_2__["categories"](null);
        this.menu_config = [{
                name: "i-reading-menu", content: "assets/data/reading/i-reading/menu.json"
            }];
    }
    IReadingComponent.prototype.ngOnInit = function () {
        for (var _i = 0, _a = this.menu_config; _i < _a.length; _i++) {
            var entry = _a[_i];
            this.loadMenu(entry.content);
        }
    };
    IReadingComponent.prototype.loadMenu = function (entry) {
        var _this = this;
        this.readingservice.get(entry).subscribe(function (res) {
            _this.categories = new _models_reading_i_reading_categories_model__WEBPACK_IMPORTED_MODULE_2__["categories"](res);
            _this.categoriesArr = _this.categories.content;
        });
    };
    IReadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-i-reading',
            template: __webpack_require__(/*! ./i-reading.component.html */ "./src/app/reading/i-reading/i-reading.component.html"),
            styles: [__webpack_require__(/*! ./i-reading.component.scss */ "./src/app/reading/i-reading/i-reading.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_reading_reading_service_service__WEBPACK_IMPORTED_MODULE_1__["ReadingService"]])
    ], IReadingComponent);
    return IReadingComponent;
}());



/***/ }),

/***/ "./src/app/reading/reading.component.html":
/*!************************************************!*\
  !*** ./src/app/reading/reading.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"reading\">\n    reading work\n</p>"

/***/ }),

/***/ "./src/app/reading/reading.component.scss":
/*!************************************************!*\
  !*** ./src/app/reading/reading.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scrollspy-example {\n  height: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ29jdGhpbmhuZ3V5ZW4vRGVza3RvcC9ORy1FTkdMSVNIL3NyYy9hcHAvcmVhZGluZy9yZWFkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3JlYWRpbmcvcmVhZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGxzcHktZXhhbXBsZSB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/reading/reading.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reading/reading.component.ts ***!
  \**********************************************/
/*! exports provided: ReadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingComponent", function() { return ReadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReadingComponent = /** @class */ (function () {
    function ReadingComponent() {
    }
    ReadingComponent.prototype.ngOnInit = function () {
    };
    ReadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reading',
            template: __webpack_require__(/*! ./reading.component.html */ "./src/app/reading/reading.component.html"),
            styles: [__webpack_require__(/*! ./reading.component.scss */ "./src/app/reading/reading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReadingComponent);
    return ReadingComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xl-5 mx-auto mt-5\">\n      <div class=\" card wow fadeIn animated\">\n      <!-- Material form login -->\n        <div class=\"card-body\">\n          <form [formGroup]=\"registerForm\" (ngSubmit) = \"onSubmit()\">\n              <p class=\"h4 text-center\">Sign in</p>\n              <div class=\"form-group\">\n                <div class=\"md-form form-sm\"> <i class=\"fa fa-user prefix grey-text\"></i>\n                  <input type=\"text\" \n                        id=\"firstname\" \n                        class=\"form-control form-control-sm\"\n                        name=\"firstname\"\n                        formControlName=\"firstname\"\n                        required\n                        >\n                  <label for=\"firstname\">Firstname</label>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                  <div class=\"md-form form-sm\"> <i class=\"fa fa-user prefix grey-text\"></i>\n                    <input type=\"text\" \n                          id=\"lastname\" \n                          class=\"form-control form-control-sm\"\n                          name=\"lastname\"\n                          formControlName=\"lastname\"\n                          required\n                          >\n                    <label for=\"lastname\">Lastname</label>\n                  </div>\n              </div>\n\n              <div class=\"form-group\">\n                  <div class=\"md-form form-sm\"> <i class=\"fa fa-user prefix grey-text\"></i>\n                    <input type=\"text\" \n                          id=\"username\" \n                          class=\"form-control form-control-sm\"\n                          name=\"username\"\n                          formControlName=\"username\"\n                          required\n                          >\n                    <label for=\"username\">Username</label>\n                  </div>\n              </div>\n\n              <div class=\"form-group\">\n                  <div class=\"md-form form-sm\"> <i class=\"fa fa-envelope prefix grey-text\"></i>\n                    <input type=\"email\" \n                          id=\"email\" \n                          class=\"form-control form-control-sm\"\n                          name=\"email\"\n                          formControlName=\"email\"\n                          required\n                          >\n                    <label for=\"email\">Email</label>\n                    <small *ngIf=\"existEmail\" class=\"danger-text\">Email is already used</small>\n                  </div>\n                 \n              </div>\n\n              <!-- Material input password -->\n              <div class=\"form-group\" [ng-class]=\"{'has-error': f.submitted && !password.valid}\">\n                  <div class=\"md-form\">\n                      <i class=\"fa fa-lock prefix grey-text\"></i>\n                      <input type=\"password\" \n                            id=\"password\" \n                            class=\"form-control\"\n                            name=\"password\"\n                            formControlName=\"password\"\n                            required\n                            >\n                      <label for=\"password\">Password</label>\n                  </div>\n            </div>\n\n      \n            <div class=\"text-center mt-4\">\n                <button [disabled]=\"loading\" class=\"btn btn-default\" type=\"submit\">SignUp</button>\n                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            </div>\n          </form>\n\n          <div class=\"text-center mt-4\">\n            <hr>\n          </div>\n          <div class=\"text-right mt-4\">\n              <span>Is already member? <a [routerLink]=\"['/login']\" style=\"color:#0d47a1\">SignIn</a></span>\n            </div>\n        <!-- Material form login -->\n        </div>\n      </div>\n      </div>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-default {\n  background-color: #0d47a1 !important; }\n\n.danger-text {\n  color: #ff3547; }\n\n.mt-5 {\n  padding-top: 15vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ29jdGhpbmhuZ3V5ZW4vRGVza3RvcC9ORy1FTkdMSVNIL3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FDSixFQUFDOztBQUNEO0VBQ0ksZUFBYyxFQUNqQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1kZWZhdWx0e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDQ3YTEgIWltcG9ydGFudFxufVxuLmRhbmdlci10ZXh0IHtcbiAgICBjb2xvcjogI2ZmMzU0NzsgXG59XG4ubXQtNXtcbiAgICBwYWRkaW5nLXRvcDogMTV2aDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/index */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.loading = false;
        this.submitted = false;
        this.existEmail = false;
        this.error = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            if (data.status === 'false' && data.message.email === 'false') {
                _this.existEmail = true;
                _this.loading = false;
            }
            else if (data.message.email === 'notchecked') {
                _this.error = true;
                _this.loading = false;
            }
            else {
                _this.router.navigate(['/login']);
            }
        }, function (error) {
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_index__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: authenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticationService", function() { return authenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var authenticationService = /** @class */ (function () {
    function authenticationService(http) {
        this.http = http;
    }
    authenticationService.prototype.login = function (username, password) {
        return this.http.post('https://pure-tor-72835.herokuapp.com/users/login', {
            username: username,
            password: password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            if (user.status === 'false') {
                return user;
            }
            else if (user && user.message.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    authenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    authenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], authenticationService);
    return authenticationService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: authenticationService, TenseService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["authenticationService"]; });

/* harmony import */ var _tense_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tense.service */ "./src/app/services/tense.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TenseService", function() { return _tense_service__WEBPACK_IMPORTED_MODULE_1__["TenseService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });






/***/ }),

/***/ "./src/app/services/reading/reading-service.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/reading/reading-service.service.ts ***!
  \*************************************************************/
/*! exports provided: ReadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingService", function() { return ReadingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReadingService = /** @class */ (function () {
    function ReadingService(http) {
        this.http = http;
    }
    ReadingService.prototype.get = function (url) {
        return this.http.get(url);
    };
    ReadingService.prototype.getMenu = function (cate) {
        return this.http.post('https://pure-tor-72835.herokuapp.com/menu/category', {
            category: cate
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            if (result.status === 'not found') {
                return [];
            }
            else if (result.status === 'ok') {
                return result.response;
            }
        }));
    };
    ReadingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ReadingService);
    return ReadingService;
}());



/***/ }),

/***/ "./src/app/services/tense.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/tense.service.ts ***!
  \*******************************************/
/*! exports provided: TenseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenseService", function() { return TenseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TenseService = /** @class */ (function () {
    function TenseService(http) {
        this.http = http;
    }
    TenseService.prototype.get = function (url) {
        return this.http.get(url);
    };
    TenseService.prototype.getAll = function () {
        return [
            { name: "Present Simple", content: "assets/data/PresentSimple.json" }
        ];
    };
    TenseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TenseService);
    return TenseService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get('/users/users');
    };
    UserService.prototype.getById = function (id) {
        return this.http.get('./users/users/' + id);
    };
    UserService.prototype.register = function (user) {
        return this.http.post('https://pure-tor-72835.herokuapp.com/users/register', user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/user/users' + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete('/users/users/' + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/dataStructure/option.ts":
/*!************************************************!*\
  !*** ./src/app/shared/dataStructure/option.ts ***!
  \************************************************/
/*! exports provided: option */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "option", function() { return option; });
var option = /** @class */ (function () {
    function option(data) {
        this.id = data.id;
        this.content = data.content;
        this.isAnswer = data.isAnswer;
    }
    return option;
}());



/***/ }),

/***/ "./src/app/shared/dataStructure/question.model.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/dataStructure/question.model.ts ***!
  \********************************************************/
/*! exports provided: question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "question", function() { return question; });
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./option */ "./src/app/shared/dataStructure/option.ts");

var question = /** @class */ (function () {
    function question(data) {
        var _this = this;
        this.id = data.id;
        this.content = data.content;
        this.isVisited = data.isVisited;
        this.options = [];
        data.options.forEach(function (op) {
            _this.options.push(new _option__WEBPACK_IMPORTED_MODULE_0__["option"](op));
        });
        this.answered = data.answered || null;
    }
    return question;
}());



/***/ }),

/***/ "./src/app/shared/dataStructure/quiz.model.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/dataStructure/quiz.model.ts ***!
  \****************************************************/
/*! exports provided: Quiz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quiz", function() { return Quiz; });
/* harmony import */ var _question_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question.model */ "./src/app/shared/dataStructure/question.model.ts");

var Quiz = /** @class */ (function () {
    function Quiz(data) {
        var _this = this;
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.questions = [];
            data.questions.forEach(function (element) {
                _this.questions.push(new _question_model__WEBPACK_IMPORTED_MODULE_0__["question"](element));
            });
        }
    }
    return Quiz;
}());



/***/ }),

/***/ "./src/app/tense-details/practices/practices.component.html":
/*!******************************************************************!*\
  !*** ./src/app/tense-details/practices/practices.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  practices works!\n</p>\n"

/***/ }),

/***/ "./src/app/tense-details/practices/practices.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/tense-details/practices/practices.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbnNlLWRldGFpbHMvcHJhY3RpY2VzL3ByYWN0aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tense-details/practices/practices.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/tense-details/practices/practices.component.ts ***!
  \****************************************************************/
/*! exports provided: PracticesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticesComponent", function() { return PracticesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PracticesComponent = /** @class */ (function () {
    function PracticesComponent() {
    }
    PracticesComponent.prototype.ngOnInit = function () {
    };
    PracticesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-practices',
            template: __webpack_require__(/*! ./practices.component.html */ "./src/app/tense-details/practices/practices.component.html"),
            styles: [__webpack_require__(/*! ./practices.component.scss */ "./src/app/tense-details/practices/practices.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PracticesComponent);
    return PracticesComponent;
}());



/***/ }),

/***/ "./src/app/tense-details/tense-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/tense-details/tense-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 pt-30 col-xl-5 mt-2 text-center\">\n    <button [routerLink]=\"['./videos']\" type=\"button\" class=\"btn primary-color-dark btn-lg btn-rounded text-lg\">\n        <i class=\"fa fa-film fa-2x pr-2\" aria-hidden=\"true\"></i>\n        <a >Video</a>\n    </button>\n    <button [routerLink]=\"['./practices']\" type=\"button\" class=\"btn primary-color-dark btn-lg btn-rounded text-lg\">\n        <i class=\"fa fa-file-text-o fa-2x pr-2\" aria-hidden=\"true\"></i>\n        <a >Practices</a>\n    </button>\n    \n</div>\n<div class=\"products-area\">\n        <router-outlet></router-outlet>\n</div>\n<!-- <div class=\"container\">\n  <h2 class=\"h1-responsive pt-30 text-center font-weight-bold my-5\">Video</h2>\n  <div class=\"embed-responsive embed-responsive-16by9\">\n      <iframe class=\"embed-responsive-item z-depth-1\"  src=\"https://www.youtube.com/embed/XkY4mo0VcIQ\" ></iframe>\n  </div>\n  <h2 class=\"h1-responsive pt-10 text-center font-weight-bold my-5\">Practices</h2>\n\n\n  <h5 class=\"font-weight-bold mb-3\">Discover the grammar</h5>\n\n    <form class=\"form-inline\">\n        <a class=\"lead grey-text w-responsive mx-auto mb-5\">\n            Are you living or working in a foreign country?<u>Do you worry</u> about making mistake\n            with someone's name? you ______(be) right to be concerned. Naming systems ______(vary)\n            a lot from culture  to culture, and people _______(tend) to have very strong feelings \n            about their names. Well, now help ______(be) available in the form of an interesting and practical\n            book by Terri Morrison.<i> Kiss, Bow, or Shake Hands: How to do Business in Sixty Countries</i>\n            gives information on cross-cultural naming customs and much more. And it ___(be not) just for businesspoeple.\n            In today's shrinking world, poeple ________( be travelle) abroad in record numbers. they ______(be fly)\n            to all corners of the world, and they _______(be email) poeple they've never met. So, if you _______(be do)\n            business abroad or making friend across cultures, I ________(recommend) this book. \n        </a>\n        Material input with help text -->\n    <!-- </form>\n    <a>\n    \n\n  </a>\n\n</div>\n -->\n\n"

/***/ }),

/***/ "./src/app/tense-details/tense-details.component.scss":
/*!************************************************************!*\
  !*** ./src/app/tense-details/tense-details.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pt-30, .py-30 {\n  padding-top: 7rem !important; }\n\n.pt-20 {\n  padding-top: 5rem !important; }\n\n.in {\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  background: transparent;\n  border-bottom: 1px solid #fff;\n  outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ29jdGhpbmhuZ3V5ZW4vRGVza3RvcC9ORy1FTkdMSVNIL3NyYy9hcHAvdGVuc2UtZGV0YWlscy90ZW5zZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQTRCLEVBQy9COztBQUNEO0VBQ0ksNkJBQTRCLEVBQy9COztBQUNEO0VBQ0ksaUJBQWdCO0VBQ2hCLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsd0JBQXVCO0VBQ3ZCLDhCQUE2QjtFQUM3QixjQUFhLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC90ZW5zZS1kZXRhaWxzL3RlbnNlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHQtMzAsIC5weS0zMCB7XG4gICAgcGFkZGluZy10b3A6IDdyZW0gIWltcG9ydGFudDtcbn1cbi5wdC0yMHtcbiAgICBwYWRkaW5nLXRvcDogNXJlbSAhaW1wb3J0YW50O1xufVxuLmlue1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tense-details/tense-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/tense-details/tense-details.component.ts ***!
  \**********************************************************/
/*! exports provided: TenseDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenseDetailsComponent", function() { return TenseDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TenseDetailsComponent = /** @class */ (function () {
    function TenseDetailsComponent() {
    }
    TenseDetailsComponent.prototype.ngOnInit = function () {
    };
    TenseDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tense-details',
            template: __webpack_require__(/*! ./tense-details.component.html */ "./src/app/tense-details/tense-details.component.html"),
            styles: [__webpack_require__(/*! ./tense-details.component.scss */ "./src/app/tense-details/tense-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TenseDetailsComponent);
    return TenseDetailsComponent;
}());



/***/ }),

/***/ "./src/app/tense-details/tense-details.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/tense-details/tense-details.module.ts ***!
  \*******************************************************/
/*! exports provided: routes, tenses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tenses", function() { return tenses; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tense_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tense-details.component */ "./src/app/tense-details/tense-details.component.ts");
/* harmony import */ var _practices_practices_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./practices/practices.component */ "./src/app/tense-details/practices/practices.component.ts");
/* harmony import */ var _videos_videos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./videos/videos.component */ "./src/app/tense-details/videos/videos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'videos', pathMatch: 'full' },
    { path: 'videos', component: _videos_videos_component__WEBPACK_IMPORTED_MODULE_5__["VideosComponent"] },
    { path: 'practices', component: _practices_practices_component__WEBPACK_IMPORTED_MODULE_4__["PracticesComponent"] },
];
var tenses = /** @class */ (function () {
    function tenses() {
    }
    tenses = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _tense_details_component__WEBPACK_IMPORTED_MODULE_3__["TenseDetailsComponent"],
                _practices_practices_component__WEBPACK_IMPORTED_MODULE_4__["PracticesComponent"],
                _videos_videos_component__WEBPACK_IMPORTED_MODULE_5__["VideosComponent"]
            ],
            exports: [
                _tense_details_component__WEBPACK_IMPORTED_MODULE_3__["TenseDetailsComponent"],
                _practices_practices_component__WEBPACK_IMPORTED_MODULE_4__["PracticesComponent"],
                _videos_videos_component__WEBPACK_IMPORTED_MODULE_5__["VideosComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], tenses);
    return tenses;
}());



/***/ }),

/***/ "./src/app/tense-details/videos/videos.component.html":
/*!************************************************************!*\
  !*** ./src/app/tense-details/videos/videos.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-30 \">\n  <div class=\"embed-responsive embed-responsive-16by9\">\n      <iframe class=\"embed-responsive-item z-depth-1\"  src=\"https://www.youtube.com/embed/XkY4mo0VcIQ\" ></iframe>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tense-details/videos/videos.component.scss":
/*!************************************************************!*\
  !*** ./src/app/tense-details/videos/videos.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pt-30, .py-30 {\n  padding-top: 3rem !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZ29jdGhpbmhuZ3V5ZW4vRGVza3RvcC9ORy1FTkdMSVNIL3NyYy9hcHAvdGVuc2UtZGV0YWlscy92aWRlb3MvdmlkZW9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQTRCLEVBQy9CIiwiZmlsZSI6InNyYy9hcHAvdGVuc2UtZGV0YWlscy92aWRlb3MvdmlkZW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnB0LTMwLCAucHktMzAge1xuICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/tense-details/videos/videos.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/tense-details/videos/videos.component.ts ***!
  \**********************************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideosComponent = /** @class */ (function () {
    function VideosComponent() {
    }
    VideosComponent.prototype.ngOnInit = function () {
    };
    VideosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videos',
            template: __webpack_require__(/*! ./videos.component.html */ "./src/app/tense-details/videos/videos.component.html"),
            styles: [__webpack_require__(/*! ./videos.component.scss */ "./src/app/tense-details/videos/videos.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VideosComponent);
    return VideosComponent;
}());



/***/ }),

/***/ "./src/app/writing/writing.component.html":
/*!************************************************!*\
  !*** ./src/app/writing/writing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>adhalsd</h1>\n<h1>asdkfjasldfkhasldhf</h1>\n<p>\n  asdkjfbaksdjbfsadjf\n  asdlfnasldfkn\n  asdlfkasldknv\n  awelfihasdfoi\n</p>\n"

/***/ }),

/***/ "./src/app/writing/writing.component.scss":
/*!************************************************!*\
  !*** ./src/app/writing/writing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dyaXRpbmcvd3JpdGluZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/writing/writing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/writing/writing.component.ts ***!
  \**********************************************/
/*! exports provided: WritingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WritingComponent", function() { return WritingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WritingComponent = /** @class */ (function () {
    function WritingComponent() {
    }
    WritingComponent.prototype.ngOnInit = function () {
    };
    WritingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-writing',
            template: __webpack_require__(/*! ./writing.component.html */ "./src/app/writing/writing.component.html"),
            styles: [__webpack_require__(/*! ./writing.component.scss */ "./src/app/writing/writing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WritingComponent);
    return WritingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ngocthinhnguyen/Desktop/NG-ENGLISH/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map