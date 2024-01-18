import { Component } from '@angular/core';
//import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { ContactosService } from '../services/contactos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule],
})
export class HomePage {

  contactos: any[];

  constructor( private contactosService: ContactosService) {
this.contactos=[];
  }

  ionViewDidEnter(){
   this.contactos = this.contactosService.getAll();
   console.log(this.contactos);
  }
}
