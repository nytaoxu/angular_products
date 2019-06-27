import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ProductService } from "../product.service";
import { Product } from "../product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  ngOnInit() {}

  public productId;
  public selectedId;
  public product_list;

  constructor(private router: Router, private productService: ProductService) {
    this.product_list = this.productService.getProductList();
  }
  onSelect(product) {
    // console.log(product)
    this.router.navigate(["/product", product.id, JSON.stringify(product)]);
    //this.router.navigate([department.id], { relativeTo: this.route });
  }
  isSelected(product) {
    return product.id === this.selectedId;
  }
  chart(typeOfChart: string) {
    if (typeOfChart === "next") {
      typeOfChart = this.nextType();
    }
    this.router.navigate(["/products", "chart", typeOfChart]);
  }
  nextType() {
    ProductListComponent.current++;
    if (ProductListComponent.current > 2) {
      ProductListComponent.current -= 3;
    }
    return this.typeArray[ProductListComponent.current];
  }
  edit(product: Product) {
    console.log(product);
    this.router.navigate(["/product/edit/", product.id]);
  }
  delete(product: Product) {
    // console.log(product);
    if (confirm("Are you sure that you want to delete this record?"))
      this.productService.deleteProduct(product);
  }
  public static current = 0;
  public typeArray = ["pie", "bar", "line"];
}
