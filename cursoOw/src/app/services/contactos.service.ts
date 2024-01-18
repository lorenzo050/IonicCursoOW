import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  private arrContactos : any[];


  constructor() { 
    this.arrContactos = [
      {nombre: 'Laura', apellidos: 'García', edad: 34},
      {nombre: 'Luis', apellidos: 'Lope', edad: 60},
      {nombre: 'Ine', apellidos: 'García', edad: 20}
    ]
  }

  getAll(){
    return this.arrContactos;
  }
}
