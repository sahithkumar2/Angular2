import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OrderListComponent} from './order-list.component';
import {OrderDetailComponent} from './order-detail.component';
import { SharedModule } from '../shared/shared.mdule';

@NgModule({
    imports:[
        SharedModule,
        RouterModule.forChild([
            {path:'orders',component:OrderListComponent},
            {path:'order/:id',component:OrderDetailComponent},
        ])
    ],
    declarations:[
        OrderListComponent,
        OrderDetailComponent
    ]
})

export class OrderModule{

}