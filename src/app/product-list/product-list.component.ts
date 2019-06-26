import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  ngOnInit() {

  }

  public productId;
  public selectedId;
  
  product_list = [
    {
      id: 1,
      title: 'macbook',
      price: 1299,
      rating: 3,
      description: 'This is a laptop made by Apple Inc.',
      category: 'Computer/Laptop'
    },
    {
      id: 2,
      title: 'alienbook',
      price: 1799,
      rating: 5,
      description: 'This is a laptop made by Dell Inc.',
      category: 'Computer/Laptop'
    },
    {
      id: 3,
      title: 'iphone',
      price: 1599,
      rating: 4,
      description: 'This is a cell phone made by Apple Inc.',
      category: 'Cell phone'
    },
    {
      id: 4,
      title: 'ipad',
      price: 799,
      rating: 5,
      description: 'This is pad made by Apple Inc.',
      category: 'Pad'
    },
    {
      id: 5,
      title: 'kindle',
      price: 199,
      rating: 5,
      description: 'This is a laptop made by Amazon Inc.',
      category: 'Pad'
    }
  ]
  constructor(private router: Router) {}
  onSelect(product) {
    console.log(product)
    this.router.navigate(['/products', product.id, JSON.stringify(product)]);
     //this.router.navigate([department.id], { relativeTo: this.route });
  }
  isSelected(product) { 
    return product.id === this.selectedId; 
  }

}
