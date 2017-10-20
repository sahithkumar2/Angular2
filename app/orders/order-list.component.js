"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OrderListComponent = /** @class */ (function () {
    function OrderListComponent() {
        this.pageTitle = "Order List";
        this.imageWidth = 50;
        this.showImage = false;
        this.list = false;
        this.grid = true;
        this.orders = [
            {
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
                "orderName": "Leaf Rake",
                "orderCode": "GDN-0011",
                "releaseDate": "March 19, 2016",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95,
                "starRating": 3.2
            },
            {
                "orderName": "Garden Cart",
                "orderCode": "GDN-0023",
                "releaseDate": "March 18, 2016",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            }
        ];
    }
    /*constructor(private _orderSerivce:OrderService){

    }*/
    OrderListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    // ngOnInit(): void{
    //     this._orderService.getProducts()
    //         .subscribe(orders=> this.orders=orders,
    //         error =>this.errorMessage=<any>error)
    //     console.log("this is on init");
    // }
    OrderListComponent.prototype.GridView = function () {
        this.grid = true;
        this.list = false;
    };
    OrderListComponent.prototype.ListView = function () {
        this.grid = false;
        this.list = true;
    };
    OrderListComponent = __decorate([
        core_1.Component({
            selector: 'am-product',
            templateUrl: 'app/orders/order-list.component.html'
        })
    ], OrderListComponent);
    return OrderListComponent;
}());
exports.OrderListComponent = OrderListComponent;
//# sourceMappingURL=order-list.component.js.map