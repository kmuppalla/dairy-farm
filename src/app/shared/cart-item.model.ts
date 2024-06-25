import { product } from "./product.model";
export interface CartItem {
    key: number; // Adjust to string if product IDs are strings
    quantity: number;
    value: product; // Use your defined product interface
  }