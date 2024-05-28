
import { observable } from 'rxjs';
import { DataService } from './../../shared/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  cartQuantity: {};
  totalQuantity: any;
  clicked: boolean;
  products:[] = [];

  constructor(private dataService: DataService){
  }

  ngOnInit(): void {
    if (this.dataService.cartState.subscribe(cartArray => cartArray == null)){
      this.dataService.cartState.subscribe(cartArray => {
        this.totalQuantity = cartArray;
        this.products = cartArray;
        console.log(this.products)      
      });  

    }
    else{
      this.dataService.cartState.subscribe(cartArray => {
        this.totalQuantity = cartArray;
        this.products = cartArray;
        console.log(this.products)
      });

    }
    // this.dataService.cartState.subscribe(cartArray => {
    //   this.totalQuantity = cartArray;
    //   this.products = cartArray;
    //   console.log(this.products)
    
    // });
  }  

}