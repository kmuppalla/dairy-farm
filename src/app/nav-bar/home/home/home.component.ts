import { product } from './../../../shared/product.model';
import { DataService } from './../../../shared/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  products: any;

  constructor(private dataService: DataService){}

  base_product: product[] = [
    {id:1, name: 'Unsalted butter', description: "Regeneratively raised organic whole milk. Pasteurized", imageUrl: '/assets/butter_unsalted.jpeg'},
    {id:2, name: 'Mozzarella cheese', description: "Regeneratively raised organic RAW milk", imageUrl: '/assets/mozarella.jpeg'},
    {id:3, name: '2% milk', description: "Regeneratively raised organic 2% milk. Pasteurized", imageUrl: '/assets/2_percent_milk.jpeg'},
    {id:4, name: 'Sweet Cream butter', description: "Regeneratively raised organic Skimmed milk. Pasteurized", imageUrl: '/assets/butter_sweet_Cream.jpeg'}
  ]   
  
ngOnInit(): void {
    this.dataService.cartState.subscribe(cartArray => {
      this.products = cartArray;    
    });



}
}
