import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/data.service';

import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dairy-farm';
  showCart: boolean = false;
  showHomeLink: boolean = false;

  constructor(private dataservice: DataService,private afAuth: AngularFireAuth){ 
    this.anonymousLogin();
   }

  ngOnInit() {
    this.dataservice.homePage.subscribe((data) => {
      this.showHomeLink = data;
    });
  }


  handleCartClick(clicked: boolean){
    this.showCart = true;
  }

   // Anonymous login
   async anonymousLogin() {
    try {
      const result = await this.afAuth.signInAnonymously();
      console.log('firebase user id', result.user.uid);
      debugger;
      let x =result.user.uid;
      //let x =await result.user.getIdToken();
      localStorage.setItem("firebaseUid", x);
      return result;
    } catch (error) {
      console.error('Error during anonymous login', error);
      throw error;
    }

  }
  // Get the current user's ID token
  // async getIdToken(): Promise<string | null> {
  //   const user = await this.afAuth.currentUser;
  //   if (user) {
  //     return user.getIdToken();
  //   } else {
  //     throw new Error('No user is currently signed in');
  //   }
  // }
}
