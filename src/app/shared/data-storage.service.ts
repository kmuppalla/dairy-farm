import { DataService } from './data.service';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from './cart-item.model';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  assignFetchCart: any;
  cartItems: any = [];
  public transformed_cart_Items = new BehaviorSubject<[]>([]);

    private firebaseEndpoint = 'https://dairy-business-e0bb5-default-rtdb.firebaseio.com/cart.json'; // Your Firebase endpoint

    constructor(private http: HttpClient, private dataservice: DataService){ }


    storeCart(data) {
         this.dataservice.cartState.pipe(take(1)).subscribe(cartItems => {
          this.http.post(this.firebaseEndpoint, data)
            .subscribe(response => {
              console.log('Cart items stored successfully', response);
            }, error => {
              console.error('Error storing cart items', error);
            });
         });
      }

    fetchCart(): Observable<CartItem[]> {
      return this.http.get<any>('https://dairy-business-e0bb5-default-rtdb.firebaseio.com/cart.json')
        .pipe(
          map(rawData => this.processCartData(rawData)) // Process raw data within a pipe
        );
    }
    
    processCartData(rawData: any): CartItem[] {
      const cartItems: CartItem[] = [];
      for (const key in rawData) {
        if (rawData.hasOwnProperty(key)) {
          const item = rawData[key];
          const processedItem: CartItem = {
            key: item.key,
            quantity: item.quantity,
            value: item.value // Assuming value is the product object
          };
          cartItems.push(processedItem);
        }
      }
      return cartItems;
    }

    // fetchCart():Observable<[]>{

    //   let raw_data = this.http.get('https://dairy-business-e0bb5-default-rtdb.firebaseio.com/cart.json');
    //   for (const key in raw_data){
    //     if(raw_data.hasOwnProperty(key)){
    //       const item = raw_data[key];
    //       this.cartItems.push(item);
    //     }
    //   }
    //     //console.log("cartItems", this.cartItems);
    //     this.transformed_cart_Items.next(this.cartItems);
    //     return this.cartItems;
    // }
}