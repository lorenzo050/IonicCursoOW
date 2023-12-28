import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  imports: [IonicModule],
  styleUrls: ['./info.component.scss'],
  standalone: true
})
export class InfoComponent  implements OnInit {

  @Input() nombre!: string;
  @Input() telefono!: string;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  onCerrar(){
    this.modalController.dismiss({mensaje:"cierra el modal"}, 'close');
  }

}
