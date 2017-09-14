"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = "Using Angular2";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'sahith-app',
            styles: ["\n\t\t            .parent {\n\t\t\t\t\t\tbackground: #c7c7c7;\n\t\t\t\t\t\tcolor: #000;\n\t\t\t\t\t\tpadding: 20px;\n\t\t\t\t\t\t}\n\t\t\t\t\th1 {\n\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t}\t  \n\t\t   "],
            template: "\n\t\t   <div>\n\t\t   <h1> {{name}} </h1>\n\t\t <sahith-book></sahith-book>\n\t\t <pm-product></pm-product>\n\t\t   </div>",
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map