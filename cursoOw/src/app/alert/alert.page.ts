import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlertPage implements OnInit {

  constructor( private alertController: AlertController,
    private loadingController: LoadingController) { }

  async ngOnInit() {
   const loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 3000
    });
    
    await loading.present();
  }

 async openAlert(){
   const alert= await this.alertController.create({
      header: 'Titutlo alerta',
      subHeader:'Subtitulo alerta',
      message:'Esto es una alerta',
      buttons:[
        {text: 'Confirmar',role: 'confirm',handler:()=>{ //handler es para lanzar/ejecutar alguna funcion
          console.log('Confirmación')
        }},
        {text: 'Cancelar',role: 'cancel',handler:()=>{ //handler es para lanzar/ejecutar alguna funcion
          console.log('Cancelar')
        }}
      ],
      inputs:[
        {placeholder:'Introduce tu nombre'},
        {placeholder:'Introduce tu correo', attributes: {maxlength:8}},
        {type: 'number', placeholder: 'Introduce tu edad',min:1,max:99}
      ]
    });

    await alert.present();

    const result = await alert.onDidDismiss();
    console.log(result);
  }
}
