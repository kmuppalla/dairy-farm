import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { product } from '../shared/product.model';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { DataService } from '../shared/data.service'; 
import { Subscription } from 'rxjs';
import { filter } from 'rxjs-compat/operator/filter';
import { DataStorageService } from '../shared/data-storage.service';

function isNavigationEnd(event: any): event is NavigationEnd {
  return event instanceof NavigationEnd;
}

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrl: './product-tile.component.css'
})


export class ProductTileComponent {
  @Input() base_product: product;
  @Input() base_productId: any;
  @Input() cartQuantity: number;
  products:{ key: string, quantity: number }[] = [];
  quantity:number;
  numbers: number[] = [];
  cart_click : boolean = false;

  isInCartRoute: boolean = false;
  private routeSub: Subscription;

  constructor(private dataService: DataService, private router: Router,  private dataStorageService: DataStorageService){  
    
    for (let i=1; i <= 50; i++){
      this.numbers.push(i);
    }
  }

  ngOnInit(){
    this.recieveClick();
    this.getQuantity();
    this.routeSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isInCartRoute = this.router.url === '/goToCart';
      }
    });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  addToCart(){
    //this.dataService.setCart({'key':'milk', 'value':this.quantity});
    this.dataService.setCart({'key': this.base_product.id, 'quantity': this.quantity, 'value': this.base_product});
    // Store cart to Firebase
    this.dataStorageService.storeCart({'key': this.base_product.id, 'quantity': this.quantity, 'value': this.base_product});
  }

  // // deleteItemFromCart(data: any){
  // //   this.dataStorageService.fetchCart.subscribe(cartArray => {
      

  // //   }
  //   )
  //}

  increment(x:any){
    this.quantity = x;
  }

  recieveClick(){
    this.dataService.cartClicked.subscribe(c => {
    this.cart_click = c; 
    return this.cart_click});
  }

  receiveCartItems(){
    this.dataService.cartState.subscribe(cartArray => {
      this.products = cartArray;
    });
  }

  getQuantity(){
    if(this.cartQuantity != null){
    this.quantity = this.cartQuantity;}
    else 
      this.quantity = 1;
  }

  get isAddToCartDisabled(): boolean {
    return this.cartQuantity > 0 || this.isInCartRoute;
  }
}
