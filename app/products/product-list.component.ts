import {Component, OnInit} from '@angular/core';
import {IProduct} from './products';
import { ProductService } from './product.service';

@Component ({
    selector : 'pm-product',
    templateUrl : 'app/products/product-list.component.html',
    styleUrls : ['app/products/product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle:string="Product List";
    imageWidth:number=50;
    showImage:boolean=false;
    showInarow:boolean = false;
    listFilter:string;
    list:boolean=false;
    errorMessage:string;
    grid:boolean=true;
    products:IProduct[];

        constructor(private _productSerivce:ProductService){

        }
        toggleImage(): void{
            this.showImage = !this.showImage
        }

        ngOnInit(): void{
            this._productSerivce.getProducts()
                .subscribe(products=> this.products=products,
                error =>this.errorMessage=<any>error)
            console.log("this is on init");
        }

        GridView(): void{
            this.grid=true;
            this.list=false
        }
       ListView(): void{
            this.grid=false;
            this.list=true;
        }
}

