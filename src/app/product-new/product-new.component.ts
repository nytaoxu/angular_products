import { Component, OnInit } from "@angular/core";
import { Product } from "../product";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-new",
  templateUrl: "./product-new.component.html",
  styleUrls: ["./product-new.component.css"]
})
export class ProductNewComponent implements OnInit {
  constructor(private productService: ProductService) {}
  ngOnInit() {}

  title = "Create New Entry";
  //topics = ['Angular', 'React', 'Vue'];
  productModel = new Product(
    6,
    "Bootcamp",
    132.15,
    5,
    "This is a good product.",
    "Utility"
  );
  //topicHasError = true;
  submitted = false;
  errorMsg = "";

  // validateTopic(value) {
  //   if (value === 'default') {
  //     this.topicHasError = true;
  //   } else {
  //     this.topicHasError = false;
  //   }
  // }

  onSubmit() {
    this.submitted = true;
    console.log(this.productModel);
    this.productService.addProduct(this.productModel);
    console.log(this.productService.getProductList().length);
    // .subscribe(
    //   response => console.log("Success!", response),
    //   error => (this.errorMsg = error.statusText)
    // );
  }
}
