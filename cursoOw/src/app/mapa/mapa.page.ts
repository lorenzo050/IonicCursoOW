import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MapaPage implements OnInit {

  constructor() { }

   //ciclo de vida
   ngOnInit() {
    console.log('[ngOnInit] mapa')
  }

  ionViewWillEnter(){
    console.log('[ionViewWillEnter] mapa')
  }

  ionViewDidEnter(){
    console.log('[ionViewDidEnter] mapa')
  }

  ionViewWillLeave(){
    console.log('[ionViewWillLeave] mapa')
  }

  ionViewDidLeave(){
    console.log('[ionViewDidLeave] mapa')
  }

  ngOnDestroy(){
    console.log('[ngOnDestroy] mapa')
  }
}
