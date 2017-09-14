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
            styles: ["\n\n.child {\n\n   background : #aaa;\n\n   padding: 10px;\n\n   overflow:auto;\n\n}\n\n.book{\n\n   background : #0a0;\n\n   padding:20px;\n\n   margin:10px;\n\n   width:300px;\n\n   float:left;\n\n}\n\n  "],
            template: "\n\n<div class=\"child\">\n\n<h2>Books :</h2>\n\n<div class=\"book\" *ngFor=\"let boook of books\">\n\n<h4> Title : {{boook.title}} </h4> <h4>Price: {{boook.price}}</h4>\n\n</div>\n\n</div>\n\n  "
        })
    ], ChildComponent);
    return ChildComponent;
}());
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map