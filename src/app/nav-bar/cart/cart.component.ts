
import { observable } from 'rxjs';
import { DataService } from './../../shared/data.service';
import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  cartQuantity: {};
  totalQuantity: any;
  clicked: boolean;
  products: any = [];

  constructor(private dataService: DataService, private dataStorageService: DataStorageService){
  }

  ngOnInit(): void {
      this.dataStorageService.fetchCart().subscribe(cartItems => {
        this.products = cartItems;
        console.log("cartItems", cartItems);
      });
      console.log("products", this.products);
      }
  }  