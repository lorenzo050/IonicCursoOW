import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLinkWithHref]
})
export class ContactosPage implements OnInit {

  arr: string[];
  constructor(
    private router: Router
  ) { 
    this.arr = ['Mario', 'Laura', 'Rocío', 'Manuel'];
  }

  //ciclo de vida
  ngOnInit() {
    console.log('[ngOnInit] contactos')
  }

  ionViewWillEnter(){
    console.log('[ionViewWillEnter] contactos')
  }

  ionViewDidEnter(){
    console.log('[ionViewDidEnter] contactos')
  }

  ionViewWillLeave(){
    console.log('[ionViewWillLeave] contactos')
  }

  ionViewDidLeave(){
    console.log('[ionViewDidLeave] contactos')
  }

  ngOnDestroy(){
    console.log('[ngOnDestroy] contactos')
  }

  pulsarNombre(contacto:any){
    console.log(contacto);
  }

  navegarMapa(){
    this.router.navigate(['/mapa'])
  }
}
