import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-action',
  templateUrl: './action.page.html',
  styleUrls: ['./action.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ActionPage implements OnInit {

  constructor(
    private actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
  }

  async onPresentSheet(){
  const sheet = await this.actionSheetController.create({
      header: 'Cabecera',
      subHeader:'Subtitulo',
      buttons:[
        {text: 'Eliminar', role:'destructive', data: {action:'eliminar'} },
        {text: 'Compartir', data: {action:'compartir'} },
        {text: 'Cancelar', role:'cancel', data: {action:'cancelar'} }
      ]
    });

    await sheet.present();
    const result = await sheet.onDidDismiss();
    console.log(result);
  }

  

}
