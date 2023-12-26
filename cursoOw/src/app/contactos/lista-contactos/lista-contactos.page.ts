import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.page.html',
  styleUrls: ['./lista-contactos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListaContactosPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  onClickDetalle(){
    this.navController.navigateForward("detalle-contacto");
  }

}
