import { Component } from '@angular/core';
import { DataService } from '../shared/data.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  clicked: boolean = false;
  total: number = 0;
  homeClicked = false;
  currentCartFetch:[] = [];

  constructor(private dataService: DataService, private dataStorage: DataStorageService){
    // this.dataService.cartState.subscribe(cartArray => {
    //   this.total = cartArray.length;
    // })
   }

   homeClick(passClick: boolean){
    this.homeClicked = passClick;
    this.dataService.homePage.next(passClick);
   }

   cartClick(passClick: boolean){
    this.clicked = passClick;
    this.dataService.cartClicked.next(passClick);    
  
  }
  // onFetchCart(){
  //   this.dataStorage.fetchCart();
  //   // this.currentCartFetch = this.dataStorage.fetchCart();

  //  }
}
