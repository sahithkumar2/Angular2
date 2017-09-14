import {Component} from '@angular/core';

@Component({
		   selector : 'sahith-app',
		   styles : [`
		            .parent {
						background: #c7c7c7;
						color: #000;
						padding: 20px;
						}
					h1 {
						text-align: center;
					}	  
		   `],
		   template: `
		   <div>
		   <h1> {{name}} </h1>
		 <sahith-book></sahith-book>
		 <pm-product></pm-product>
		   </div>`,
		   

})

export class AppComponent {
	name = "Using Angular2"
}