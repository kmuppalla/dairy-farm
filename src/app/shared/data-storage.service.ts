import { DataService } from './data.service';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { take } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  assignFetchCart: any;

    private firebaseEndpoint = 'https://dairy-business-e0bb5-default-rtdb.firebaseio.com/cart.json'; // Your Firebase endpoint

    constructor(private http: HttpClient, private dataservice: DataService){ }


    storeCart() {
        this.dataservice.cartState.pipe(take(1)).subscribe(cartItems => {
          this.http.post(this.firebaseEndpoint, cartItems)
            .subscribe(response => {
              console.log('Cart items stored successfully', response);
            }, error => {
              console.error('Error storing cart items', error);
            });
        });
      }

      fetchCart(){
        this.http.get('https://dairy-business-e0bb5-default-rtdb.firebaseio.com/cart.json').subscribe( retrieveCart =>{
          this.assignFetchCart = retrieveCart;
        }

        );
        

      }
}