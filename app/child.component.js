"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ChildComponent = /** @class */ (function () {
    function ChildComponent() {
        this.books = [
            {
                title: 'Love Story',
                price: 'Rs. 1400'
            },
            {
                title: 'Two States',
                price: 'Rs. 1700'
            },
            {
                title: 'Computer fundamentals',
                price: 'Rs. 1000'
            }
        ];
    }
    ChildComponent = __decorate([
        core_1.Component({
            selector: 'child-component',
            template: "\n\n        <div class=\"child\">\n\n            <h2>Books :</h2>\n\n            <div class=\"book\" *ngFor=\"let boook of books\">\n\n               <h4> Title : {{boook.title}} </h4> <h4>Price: {{boook.price}}</h4>\n\n            </div>\n\n        </div>\n\n  "
        })
    ], ChildComponent);
    return ChildComponent;
}());
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map