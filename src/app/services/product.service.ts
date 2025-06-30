import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ThreeCategory } from '../entities/threeCategory';
import { HttpClient } from '@angular/common/http';
import { Product } from '../entities/Product';
import { ProductDetailsDTO } from '../entities/ProductDetailsDTO';
import { PageRequestProductDTO } from '../entities/PageRequestProductDTO';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private backendHost: string = "http://localhost:8085/products/";

  constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.backendHost}`);
  }

  public getProductBySlug(productSlug: string): Observable<ProductDetailsDTO> {
    return this.http.get<ProductDetailsDTO>(`${this.backendHost}slug/${productSlug}`);
  }

  public getProductByLabel(productLabel: string): Observable<ProductDetailsDTO> {
    return this.http.get<ProductDetailsDTO>(`${this.backendHost}label/${productLabel}`);
  }

  public getProductPagination(page: number, size: number, sort: string): Observable<PageRequestProductDTO> {
    return this.http.get<PageRequestProductDTO>(`${this.backendHost}page/${page}/${size}?sort=${sort}`);
  }
  
}
