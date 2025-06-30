import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PageRequestCategoryDTO } from 'src/app/entities/PageRequestDTO';
import { Category } from 'src/app/entities/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent  implements OnInit{
  categories: Category[] = [];
  pageRequestDTO!: Observable<PageRequestCategoryDTO>;

  errorMessage: string = '';
  currentPage = 0;
  pageSize = 3;
  totalPages = 0;
  totalElements = 0;

  constructor(private router: Router, private productService: ProductService,private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getAllCategories(this.currentPage, this.pageSize).subscribe({
      next: (items) => {
      this.categories = items.elements;
      this.totalElements = items.totalElements;
      this.totalPages = items.totalPages;
      console.log(items)
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

  goToNextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++; 
      this.loadCategories();
    }
  }
}
