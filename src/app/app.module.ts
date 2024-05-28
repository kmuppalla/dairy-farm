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
import { HttpClientModule } from '@angular/common/http';


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
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
