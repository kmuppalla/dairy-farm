import { Cart } from './cart.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Observable } from 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  cart_list: any = {};

  public cartClicked = new BehaviorSubject<boolean>(false);

  public cartState = new BehaviorSubject<any>(null);

  public homePage = new BehaviorSubject<boolean>(true);
  public cartQuantity = new BehaviorSubject<{}>({});

  setCart(data: any) {
    let temp = this.cartState.getValue();
    //temp == null  ?  temp = data : temp['milk'] = data.quantity ;
    let x = [];
    if (temp === null) {
      x.push(data);
    } else {
      for (let i = 0; i < temp.length; i++) {
          if (temp[i].key == data.key) {
            temp[i].value = data.value;
            temp[i].quantity = data.quantity;
            x = temp;
            //break; // Assuming each key is unique, so once updated, we can exit the loop
          }
          else {
            x = [...temp, data];
          }
      }
    }
    this.cartState.next(x);
    console.log(x);
  }

}

