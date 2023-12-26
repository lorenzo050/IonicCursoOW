import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-contacto',
  templateUrl: './detalle-contacto.page.html',
  styleUrls: ['./detalle-contacto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetalleContactoPage implements OnInit {

  constructor(private navController: NavController) {

  }

  ngOnInit() {
  }

  onClickVolver() {
    //this.navController.navigateBack('lista-contactos');
    this.navController.pop();
  }
}
