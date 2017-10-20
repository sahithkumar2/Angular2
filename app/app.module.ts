import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import { AppComponent }  from './app.component';
import {BookComponent} from './book.component';
import {headerComponent} from './header/header.component';
import {WelcomeComponent} from './home/welcome.component';
import { ProductModule } from './products/product.module';
import {OrderModule} from './orders/order.module';

@NgModule({
  imports: [
    OrderModule,
    ProductModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'welcome',component:WelcomeComponent},
      {path:'', redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
      
      
    ])


  ],
  declarations: [
    AppComponent, BookComponent,
    headerComponent,
   WelcomeComponent
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
