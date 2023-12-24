import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLinkWithHref]
})
export class ContactosPage implements OnInit {

  arr: string[];
  constructor() { 
    this.arr = ['Mario', 'Laura', 'Rocío', 'Manuel'];
  }

  ngOnInit() {
  }

  pulsarNombre(contacto:any){
    console.log(contacto);
  }
}
