import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-estilos',
  templateUrl: './estilos.page.html',
  styleUrls: ['./estilos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EstilosPage implements OnInit {

  mostrar: boolean;


  constructor() { 
    this.mostrar = false;
  }

  ngOnInit() {
  }


  toggleMostrar(){
    this.mostrar= !this.mostrar;
  }

}
