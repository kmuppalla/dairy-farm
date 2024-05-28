import { Component } from '@angular/core';
import { product } from '../../shared/product.model'; 

@Component({
  selector: 'app-milk',
  templateUrl: './milk.component.html',
  styleUrl: './milk.component.css'
})
export class MilkComponent {
  base_product: product[] = [
    {id:1, name: 'Whole milk', description: "Regeneratively raised organic whole milk. Pasteurized", imageUrl: '/assets/whole_milk.jpeg'},
    {id:2, name: 'RAW milk', description: "Regeneratively raised organic RAW milk", imageUrl: '/assets/RAW_milk.jpeg'},
    {id:3, name: '2% milk', description: "Regeneratively raised organic 2% milk. Pasteurized", imageUrl: '/assets/2_percent_milk.jpeg'},
    {id:4, name: 'Skimmed milk', description: "Regeneratively raised organic Skimmed milk. Pasteurized", imageUrl: '/assets/skimmed_milk.jpeg'}
  ]

}
