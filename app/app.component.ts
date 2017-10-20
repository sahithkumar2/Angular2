import {Component} from '@angular/core';

import {OrderService} from './orders/order.service';

@Component({
		   selector : 'sahith-app',
		   template: `
		   <div>
		   <nav class='navbar navbar-default'>
			   <div class='container-fluid'>
				   <a class='navbar-brand'>{{pageTitle}}</a>
				   <ul class='nav navbar-nav'>
					   <li><a [routerLink]="['/welcome']">Home</a></li>
					   <li><a [routerLink]="['/products']">Product List</a></li>
					   <li><a [routerLink]="['/orders']">Orders List </a></li>
				   </ul>
			   </div>
		   </nav>
		   <div class='container'>
			   <router-outlet></router-outlet>
		   </div>
		</div>
`,
		   providers:[ OrderService],
		   
		   styleUrls :['app/app.component.css']  
		   

})

export class AppComponent {
	name :string  = "Using Angular2.0"
	text1 : string = "Text1"
	text2 : string = "text2";  

	// var arr=["abc","xyz","mno"];
    // count:int= 0;
	// setInterval(function(){
    //     for(let i=0;i<3;i++){
			
	// 	}
	// 	name = arr[i]
	// },1000);
}