import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  imports: [IonicModule],
  styleUrls: ['./card.component.scss'],
  standalone: true
})
export class CardComponent  implements OnInit {

  @Input() nombre:string;
  @Input() email:string;
  @Input() telefono:string;

  @Output() editarContacto: EventEmitter<string>;

  constructor() {
    this.nombre = '';
    this.email = '';
    this.telefono = '';

    this.editarContacto = new EventEmitter();
   }

  ngOnInit() {}

  onClick(){
    this.editarContacto.emit(this.nombre);
  }
}
