import { Injectable } from "@angular/core";
import { Product } from "./product";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  product_list = [
    {
      id: 1,
      title: "macbook",
      price: 1299,
      rating: 3,
      description: "This is a laptop made by Apple Inc.",
      category: "Computer/Laptop"
    },
    {
      id: 2,
      title: "alienbook",
      price: 1799,
      rating: 5,
      description: "This is a laptop made by Dell Inc.",
      category: "Computer/Laptop"
    },
    {
      id: 3,
      title: "iphone",
      price: 1599,
      rating: 4,
      description: "This is a cell phone made by Apple Inc.",
      category: "Cell phone"
    },
    {
      id: 4,
      title: "ipad",
      price: 799,
      rating: 5,
      description: "This is pad made by Apple Inc.",
      category: "Pad"
    },
    {
      id: 5,
      title: "kindle",
      price: 199,
      rating: 5,
      description: "This is a laptop made by Amazon Inc.",
      category: "Pad"
    }
  ];

  private static currentId = 6;

  constructor() {}

  getProductList() {
    return this.product_list;
  }
  addProduct(productModel: Product) {
    this.product_list.push(productModel);
  }
  getNextId() {
    return ProductService.currentId++;
  }
  deleteProduct(product: Product) {
    let index = this.product_list.indexOf(product);
    if (index < 0) {
      return false;
    }
    this.product_list.splice(index, 1);
    console.log("deleted");
  }
  getProductById(id: number) {
    for (let x of this.product_list) {
      if (x.id === id) return x;
    }
    return null;
  }
  editProduct(product: Product) {
    let p: Product = this.getProductById(product.id);
    if (!p) return;
    p.title = product.title;
    p.price = product.price;
    p.rating = product.rating;
    p.description = product.description;
    p.category = product.category;
  }
}
