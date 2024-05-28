import { Component } from '@angular/core';
import { product } from '../shared/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  base_product: product[] = [
    {id:1, name: 'Unsalted butter', description: "Regeneratively raised organic whole milk. Pasteurized", imageUrl: '/assets/butter_unsalted.jpeg'},
    {id:2, name: 'Mozzarella cheese', description: "Regeneratively raised organic RAW milk", imageUrl: '/assets/mozarella.jpeg'},
    {id:3, name: '2% milk', description: "Regeneratively raised organic 2% milk. Pasteurized", imageUrl: '/assets/2_percent_milk.jpeg'},
    {id:4, name: 'Sweet Cream butter', description: "Regeneratively raised organic Skimmed milk. Pasteurized", imageUrl: '/assets/butter_sweet_Cream.jpeg'}
  ]
}
