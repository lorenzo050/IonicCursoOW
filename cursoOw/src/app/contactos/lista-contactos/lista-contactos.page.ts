import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular/standalone';
import { InfoComponent } from 'src/app/modals/info/info.component';
import { CardComponent } from 'src/app/componentes/card/card.component';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.page.html',
  styleUrls: ['./lista-contactos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,CardComponent]
})
export class ListaContactosPage implements OnInit {

  constructor(private navController: NavController,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  onClickDetalle() {
    this.navController.navigateForward("detalle-contacto");
  }

  onOpenModal() {
    this.modalController.create({
      component: InfoComponent,
      componentProps: {
        nombre: 'Laura',
        telefono:'9999999'
      }
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(result => {console.log(result)});
  }

  onEditarContacto($event:string){
    console.log($event);
  }

}
