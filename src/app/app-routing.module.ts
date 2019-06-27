import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ChartComponent } from "./chart/chart.component";
import { ProductNewComponent } from "./product-new/product-new.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/products",
    pathMatch: "full"
  },
  {
    path: "products",
    component: ProductListComponent
  },
  {
    path: "products/chart/:typeOfChart",
    component: ChartComponent
  },
  {
    path: "product/edit/:id",
    component: ProductEditComponent
  },
  {
    path: "product/:id/:product",
    component: ProductDetailComponent
  },
  {
    path: "product/new",
    component: ProductNewComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
