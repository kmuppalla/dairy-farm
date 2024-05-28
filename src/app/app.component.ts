import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dairy-farm';
  showCart: boolean = false;
  showHomeLink: boolean = false;

  constructor(private dataservice: DataService){
    
  }

  ngOnInit() {
    this.dataservice.homePage.subscribe((data) => {
      this.showHomeLink = data;
    });
  }


  handleCartClick(clicked: boolean){
    this.showCart = true;
  }
}
