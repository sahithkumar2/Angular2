import { Component } from '@angular/core';

@Component({

  selector: 'child-component',

  
  template: `

        <div class="child">

            <h2>Books :</h2>

            <div class="book" *ngFor="let boook of books">

               <h4> Title : {{boook.title}} </h4> <h4>Price: {{boook.price}}</h4>

            </div>

        </div>

  `

  })

export class ChildComponent {

  books = [

    {

      title : 'Love Story',

      price : 'Rs. 1400'

    },

    {

  title : 'Two States',

  price : 'Rs. 1700'

    },

    {

  title : 'Computer fundamentals',

  price : 'Rs. 1000'

    }

  ]

}