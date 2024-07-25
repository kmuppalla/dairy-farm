
import { observable } from 'rxjs';
import { DataService } from './../../shared/data.service';
import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

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

  constructor(private dataService: DataService, private dataStorageService: DataStorageService,private db: AngularFireDatabase){
  }

  ngOnInit(): void {
    // this.db.list('cart').valueChanges().subscribe(data => {
    //   console.log("data from angular fire realtime db query ", data)
    //   this.products = data;
    // });
      this.dataStorageService.fetchCart().then(raw_data => {
        // for (const key in raw_data){
        //   if(raw_data.hasOwnProperty(key)){
        //     const item = raw_data[key];
        //     this.products.push(item);
        //   }
        // }
        this.products = raw_data;
        // console.log("cartItems", cartItems);
      });
      console.log("products", this.products);
      }
  }  