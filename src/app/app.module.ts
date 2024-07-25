import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductTileComponent } from './product-tile/product-tile.component';
import { ProductsComponent } from './products/products.component';
import { MilkComponent } from './products/milk/milk.component';
import { CheeseComponent } from './products/cheese/cheese.component';
import { ButterComponent } from './products/butter/butter.component';
import { CartComponent } from './nav-bar/cart/cart.component';
import { HomeComponent } from './nav-bar/home/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthInterceptor } from './auth.interceptor';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyA9XlsLNyOxuM0Zh4qWHMVYtrgthxmaK1k",
  authDomain: "dairy-business-e0bb5.firebaseapp.com",
  databaseURL: "https://dairy-business-e0bb5-default-rtdb.firebaseio.com",
  projectId: "dairy-business-e0bb5",
  storageBucket: "dairy-business-e0bb5.appspot.com",
  messagingSenderId: "761427967816",
  appId: "1:761427967816:web:1c0d1d021d54c32e2b7d7d",
  measurementId: "G-KW2BX73JFY"
};

const appRoutes = [
  

  {path: 'goToMilk', component: MilkComponent},
  {path: 'goToCart', component: CartComponent},
  {path: 'goToHome', component : HomeComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductTileComponent,
    ProductsComponent,
    MilkComponent,
    CheeseComponent,
    ButterComponent,
    CartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: false}
    ),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
