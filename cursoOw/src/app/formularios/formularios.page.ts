import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.page.html',
  styleUrls: ['./formularios.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule,ReactiveFormsModule]
})
export class FormulariosPage implements OnInit {

  //instancia formulario
  formulario: FormGroup;
  
  constructor() { 
    this.formulario = new FormGroup({
      nombre: new FormControl(null,[Validators.required]),
      apellidos: new FormControl(null,[Validators.required,Validators.maxLength(12)]),
      email: new FormControl(),
      password: new FormControl(),
      dni: new FormControl()
    });
  }

  ngOnInit() {
  }

  onSubmit($event: any) {
    console.log(this.formulario.value)
  }

}
