import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductosService } from '../services/productos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProductosPage implements OnInit {
  private baseUrl: string = 'https://peticiones.online/api/products';

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.httpClient.get<any>(this.baseUrl).subscribe(
      (response) => {
        console.log(response);
        // Puedes procesar la respuesta aquí
      },
      (error) => {
        console.error('Error al hacer la solicitud:', error);
      }
    );
  }

}
