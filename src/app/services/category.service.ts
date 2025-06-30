import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ThreeCategory } from '../entities/threeCategory';
import { Category } from '../entities/category';
import { PageRequestCategoryDTO } from '../entities/PageRequestDTO';
import { CategoryPageDTO } from '../entities/CategoryPageDTO';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) { }
  backendHost : string ="http://localhost:8085/categories/";

  public getAllCategories(page: number, size: number):Observable<PageRequestCategoryDTO>{
    return this.http.get<PageRequestCategoryDTO>(`${this.backendHost}page/${page}/${size}`)
  }

  public getProductsPageIndex(page: number, size: number): Observable<ThreeCategory> {
    return this.http.get<ThreeCategory>(`${this.backendHost}${page}/${size}`);
  }
  
  public getCategoryBySlug(categorySlug: string): Observable<CategoryPageDTO> {
    return this.http.get<CategoryPageDTO>(`${this.backendHost}slug/${categorySlug}`);
  }

  public getCategoryByLabel(categoryLabel: string): Observable<CategoryPageDTO> {
    return this.http.get<CategoryPageDTO>(`${this.backendHost}label/${categoryLabel}`);
  }
}
