import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { InfoComponent } from './modals/info/info.component';
import { CardComponent } from './componentes/card/card.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet,InfoComponent,CardComponent, HttpClientModule],
})
export class AppComponent {
  constructor() {}
}
