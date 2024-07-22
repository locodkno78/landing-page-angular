import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL = 'https://fakestoreapi.com/products';

  constructor(private _httpClient: HttpClient) {}

  public getAllProducts(): Observable<IProduct[]> {
    //devuelve un observable de tipo productos
    return this._httpClient.get<IProduct[]>(this.baseURL);
  }

  public getProductById(id: number): Observable<IProduct> {
    //devuelve un observable de un producto
    return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`);
  }

  public getAllCategories(): Observable<Category[]> {
    //devuelve un observable de categorias
    return this._httpClient.get<Category[]>(`${this.baseURL}/categorias`);
  }

  public postProduct(product: IProduct): Observable<IProduct> {
    return this._httpClient.post<IProduct>(`${this.baseURL}`, product);
  }

  public putProduct(id: number, product: IProduct): Observable<IProduct>{
    return this._httpClient.put<IProduct>(`${this.baseURL}/${product.id}`, product);
  }

  public deleteProduct(id: number): Observable<IProduct>{
    return this._httpClient.delete<IProduct>(`${this.baseURL}/${id}`);
  }
}
