import {Component} from '@angular/core';

@Component({
		   selector : 'sahith-app',
		   template: `
		   <div>
		   <h1> {{name}} </h1>
		 <sahith-book></sahith-book>
		 <pm-product></pm-product>
	
		
		   </div>`,
		   

})

export class AppComponent {
	name :string  = "Using Angular2.0"
}