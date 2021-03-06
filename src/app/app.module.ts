import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomPipe } from "./custom.pipe";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { StarPipe } from "./star.pipe";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ChartComponent } from "./chart/chart.component";
import { FormsModule } from "@angular/forms";
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    ProductDetailComponent,
    ProductListComponent,
    StarPipe,
    PageNotFoundComponent,
    ChartComponent,
    ProductNewComponent,
    ProductEditComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
