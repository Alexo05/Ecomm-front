import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/entities/Product';
import { ProductDetailsDTO } from 'src/app/entities/ProductDetailsDTO';
import { Category } from 'src/app/entities/category';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  rootCategory: any;
  productPageDto: ProductDetailsDTO = {
    rootCategory : new Category(),
    subCategory: new Category(),
    product: new Product(),
    breadcrumbDTO: []
  };
  
  errorMessage: string = '';
  currentPage = 0;
  pageSize = 12;
  totalPages = 0;
  i=0;

  constructor(private route: ActivatedRoute, private cartService: CartService,
              private productService:ProductService,private router:Router ) { }

  ngOnInit(): void {
    const rootSlug: string = this.route.snapshot.paramMap.get('productSlug') || '';
    if (rootSlug) {
      console.log(rootSlug)
      this.productService.getProductBySlug(rootSlug).subscribe(data => {
        console.log(data)
        this.productPageDto = data;
        this.productPageDto.product = data.product;
        this.productPageDto.breadcrumbDTO = data.breadcrumbDTO;
        
      }, error => {
        this.errorMessage = error;
      });
    } else {
      console.log("Error: rootSlug is empty");
    }
  }

  addToCart(product: any) {
    this.cartService.addtoCart(product);
  }

  goToRootCategory(rootSlug: string): void {
    this.router.navigate([`/${rootSlug}`]);
  }

  goToSubCategory(rootSlug: string, subSlug: string): void {
    this.router.navigate([`/${rootSlug}/${subSlug}`]);
  }

  gotToProduct(rootSlug: string, subSlug: string, productSlug: string): void {
    this.router.navigate([`/${rootSlug}/${subSlug}/${productSlug}`]);
  }

}
