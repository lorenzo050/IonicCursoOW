import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private baseUrl: string;

  constructor(
    private httpClientModule: HttpClientModule,
    private httpClient: HttpClient
  ) { 
    this.baseUrl = 'https://peticiones.online/api/products';
  }

  getAll(){
   return this.httpClient.get(this.baseUrl);
  }
}
