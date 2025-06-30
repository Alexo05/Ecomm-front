import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbDTO } from 'src/app/entities/BreadcrumbDTO';
import { ThreeCategory } from 'src/app/entities/threeCategory';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  threeCategory: ThreeCategory = {
    categoriesTrees: [],
    allProductsPage: {
      productInfDTOS: [],
      currentPage: 0,
      totalPages: 0,
      totalElements: 0
    }
  };

  errorMessage: string = '';
  currentPage = 0;
  pageSize = 12;
  totalPages = 0;
  productSlug: any;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getProductsPageIndex(this.currentPage, this.pageSize).subscribe({
      next: (items) => {
        console.log(items)
        this.threeCategory.categoriesTrees = items.categoriesTrees;
        this.threeCategory.allProductsPage = items.allProductsPage;
        this.currentPage = items.allProductsPage.currentPage;

      },
      error: (err) => {
        this.errorMessage = `Error: ${err.message}`;
        console.error('There was an error!', err);
      }
    });
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.loadCategories();
  }

  generateArray(length: number): any[] {
    return Array.from({ length }, (_, i) => i);
  }

  goToPreviousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadCategories();
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.threeCategory.allProductsPage.totalPages - 1) {
      this.currentPage++;
      this.loadCategories();
    }
  }

  @Output() addToCartEvent = new EventEmitter<any>();

  addToCart(product: any) {
    this.cartService.addtoCart(product);
    console.log(product);
    console.log(this.cartService.cartItemList)
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
