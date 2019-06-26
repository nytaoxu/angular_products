import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public productId;
  public product;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productId = parseInt(params.get('id'));
      this.product = JSON.parse(params.get('product'));
      console.log(this.product);
    });
  }

  goPrevious() {
    let previousId = this.productId - 1;
    this.router.navigate(['/products', previousId]);
  }

  goNext() {
    let nextId = this.productId + 1;
    this.router.navigate(['/products', nextId]);
  }

  goBack() {
    this.router.navigate(['/products']);
  }

}
