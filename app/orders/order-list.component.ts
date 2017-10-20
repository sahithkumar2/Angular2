import {Component, OnInit} from '@angular/core';
import {IOrder} from './orders';


@Component ({
    selector : 'am-product',
    templateUrl : 'app/orders/order-list.component.html'
    
})

export class OrderListComponent {
    pageTitle:string="Order List";
    imageWidth:number=50;
    showImage:boolean=false;
    listFilter:string;
    list:boolean=false;
    errorMessage:string;
    grid:boolean=true;
    orders:IOrder[] = [
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
    ]

        /*constructor(private _orderSerivce:OrderService){

        }*/
        toggleImage(): void{
            this.showImage = !this.showImage
        }

        // ngOnInit(): void{
        //     this._orderService.getProducts()
        //         .subscribe(orders=> this.orders=orders,
        //         error =>this.errorMessage=<any>error)
        //     console.log("this is on init");
        // }

        GridView(): void{
            this.grid=true;
            this.list=false
        }
       ListView(): void{
            this.grid=false;
            this.list=true;
        }
}

