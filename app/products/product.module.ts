import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { ProductFilterPipe } from './product-filter';
import { ProductDetailComponent } from './product-detail.component';
import {ProductListComponent } from './product-list.component';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.mdule';

@NgModule({
    imports:[
        SharedModule,
        RouterModule.forChild([
            {path:'products',component:ProductListComponent},
            {path:'product/:id',component:ProductDetailComponent},
        ])
    ],
    declarations:[
        ProductListComponent,
        ProductFilterPipe,
        ProductDetailComponent,
    ],
    providers:[ProductService]
})

export class ProductModule{

}