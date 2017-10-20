import {Component} from  '@angular/core';

import {IOrder} from './orders';

@Component({
    templateUrl:'app/orders/order-detail.component.html'
})

export class OrderDetailComponent{
    pageTitle:string='Order Details';
    orders:IOrder;
}