import { Component, OnInit } from "@angular/core";
import { Product } from "../product";
import { ProductService } from "../product.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-product-new",
  templateUrl: "./product-new.component.html",
  styleUrls: ["./product-new.component.css"]
})
export class ProductNewComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}
  ngOnInit() {}

  title = "Add New Product Form";
  //topics = ['Angular', 'React', 'Vue'];
  productModel = new Product(this.productService.getNextId(), "", 0, 0, "", "");
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

  onSubmit(form: NgForm) {
    this.submitted = true;
    // console.log(this.productModel);
    // console.log(
    //   `This is the information I want: ${JSON.stringify(form.value)}.`
    // );
    // console.log(this.productService.getProductList().length);
    this.productService.addProduct(this.productModel);
    // console.log(this.productService.getProductList().length);
    this.router.navigate(["/"]);
    // .subscribe(
    //   response => console.log("Success!", response),
    //   error => (this.errorMsg = error.statusText)
    // );
  }
}
