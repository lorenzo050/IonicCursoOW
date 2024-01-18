# IonicCursoOW

Curso Ionic OpenWebinars

conocer version ionic :

```
ionic --version
```

### Empezar con ionic:

```
ionic start
```

->angular
->blank : empezar codigo de 0 . aqui se puedan usar otras plantillas , como sidemenu que tiene ya un menu lateral

ejecutar ionic en el navegador:

```
ionic serve
```

#### crear otra página:

```bash
ionic generate
 ionic generate page action
```

este comando importa la ruta automaticamente

generar página dentro de otra

```bash
ionic generate page contactos/ListaContactos
```

### Enrutamiento

```html
<a routerLink="/mapa">Ir a mapa</a>
```

hay que importar esto para que funcione en el .ts

```javascript
import { RouterLinkWithHref } from "@angular/router";
```

ion-back-button

### Ciclos de vida en ionic

https://ionicframework.com/docs/angular/lifecycle

```javascript
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
```

### Iconos ionic

no funcionan con la ultima version de ionic
usar https://github.com/FortAwesome/angular-fontawesome
https://ionic.io/ionicons/usage

```
<ion-icon name="list"></ion-icon>
```

comprobar su importacion

### ion-tabs

PONER DENTRO DE UN ION-TOOLBAR FUERA DEL ION-CONTENT, si no , da error

```html
<ion-toolbar>
  <ion-tabs>
    <ion-tab-bar slot="botton">
      <ion-tab-button href="lista-contactos">
        <ion-label>Listados</ion-label>
        <!--<ion-icon name="list"></ion-icon>-->
      </ion-tab-button>
      <ion-tab-button href="nuevo-contacto">
        <ion-label>Nuevo</ion-label>
        <!-- <ion-icon name="clipboard"></ion-icon>-->
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</ion-toolbar>
```

### Navegacion nav-controller

```typescript
constructor( private navController: NavController) {

  }
```

```html
<ion-button (click)="onClickDetalle()">Ir al detalle</ion-button>
```

```javascript
onClickDetalle(){
    this.navController.navigateForward("detalle-contacto");
  }
```

### side-menu - menu lateral
https://ionicframework.com/docs/api/menu

### ventana modal -> ventana emergente , como alert
ejemplo : modals\info , ejecucion en lista-contacto

```javascript
import { ModalController } from '@ionic/angular/standalone';
 constructor(
    private modalController: ModalController
  ) { }
this.modalController.dismiss({mensaje:"cierra el modal"}, 'close');
```

en la pagina donde lo queremos abrir
```javascript
import { ModalController } from '@ionic/angular/standalone';
import { InfoComponent } from 'src/app/modals/info/info.component';

 constructor(private navController: NavController,
    private modalController: ModalController) { }

 onOpenModal() {
    this.modalController.create({
      component: InfoComponent,
      componentProps: {
        nombre: 'Laura',
        telefono:'9999999'
      }
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(result => {console.log(result)});
  }
```

### Grid - maquetacion
```html
  <ion-grid>
    <ion-row>
      <ion-col>1</ion-col>
      <ion-col size="auto">2</ion-col>
      <ion-col>3</ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="2">1</ion-col>
      <ion-col size="3">2</ion-col>
      <ion-col size="6">3</ion-col>
      <ion-col size="1">4</ion-col>
    </ion-row>

    <ion-row>
      <ion-col size="12" size-sm="3">1</ion-col>
      <ion-col size="12" size-sm="2">2</ion-col>
      <ion-col size="12" size-sm="7">3</ion-col>
    </ion-row>

    <!--Desplazar columnas -->
    <ion-row>
      <ion-col offset="1">1</ion-col>
      <ion-col offset="2">2</ion-col>
      <ion-col offset="3">3</ion-col>
    </ion-row>

    <ion-row>
      <ion-col offset="0" offset-md="2">1</ion-col>
      <ion-col offset="2">2</ion-col>
      <ion-col offset="3">3</ion-col>
    </ion-row>
  </ion-grid>
```

# Crear componente
ionic generate
>component

# Componentes nativos IONIC
### ion-text - diferenciar tipos de texto cambiando su color
```html
<ion-text color="warning">
    <h1>Titulo pagina</h1>
  </ion-text>

  <p>
    Lorem ipsum dolor sit <ion-text color="danger">consectetur adipisicing elit</ion-text> . Quo, placeat? Earum
    laboriosam quasi similique, non fugiat itaque ea labore? Qui illum
    dignissimos officia totam illo maiores nemo perferendis distinctio tempora!
  </p>
```
### ion-list
```html
<ion-list [inset]="true" lines="inset">
    <ion-list-header color="success">
      <ion-label>Ciudades de españa</ion-label>
      <ion-button>ver todas</ion-button>
    </ion-list-header>
    <ion-item>
      <ion-label>Madrid</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Barcelona</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Valencia</ion-label>
    </ion-item>
  </ion-list>
```

## ion-item-sliding
botones deslizables

```html
 <ion-list>
    <ion-item-sliding>
      <ion-item>
        <ion-label>botones derecha</ion-label>
      </ion-item>

      <ion-item-options >
        <ion-item-option color="danger">Borrar</ion-item-option>
        <ion-item-option color="success">Editar</ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-list>
```

## Action sheet 
Botones emergentes

```javascript
 constructor(
    private actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
  }

  async onPresentSheet(){
  const sheet = await this.actionSheetController.create({
      header: 'Cabecera',
      subHeader:'Subtitulo',
      buttons:[
        {text: 'Eliminar', role:'destructive', data: {action:'eliminar'} },
        {text: 'Compartir', data: {action:'compartir'} },
        {text: 'Cancelar', role:'cancel', data: {action:'cancelar'} }
      ]
    });

    await sheet.present();
    const result = await sheet.onDidDismiss();
    console.log(result);
  }
```

## Alert controller

```javascript
constructor( private alertController: AlertController,
    private loadingController: LoadingController) { }

  async ngOnInit() {
   const loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 3000
    });
    
    await loading.present();
  }

 async openAlert(){
   const alert= await this.alertController.create({
      header: 'Titutlo alerta',
      subHeader:'Subtitulo alerta',
      message:'Esto es una alerta',
      buttons:[
        {text: 'Confirmar',role: 'confirm',handler:()=>{ //handler es para lanzar/ejecutar alguna funcion
          console.log('Confirmación')
        }},
        {text: 'Cancelar',role: 'cancel',handler:()=>{ //handler es para lanzar/ejecutar alguna funcion
          console.log('Cancelar')
        }}
      ],
      inputs:[
        {placeholder:'Introduce tu nombre'},
        {placeholder:'Introduce tu correo', attributes: {maxlength:8}},
        {type: 'number', placeholder: 'Introduce tu edad',min:1,max:99}
      ]
    });

    await alert.present();

    const result = await alert.onDidDismiss();
    console.log(result);
  }
```

## Loading controller
```javascript
constructor( private alertController: AlertController,
    private loadingController: LoadingController) { }


 async ngOnInit() {
   const loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 3000
    });
    
    await loading.present();
  }
```

# Estilos
## Aplicar mediaquery
```html
<div class="ion-text-md-uppercase">
```

## Ocultar
```html
<div class="ion-hide">
  ```

## Ocultar con código
```html
<div [ngClass]="{ 'ion-hide' : mostrar }">
    <h3>Titulo</h3>
    <p class="ion-padding-top ion-margin">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eum libero
      deleniti veniam totam esse nobis, enim quidem sapiente maiores aperiam,
      corporis fugit maxime sunt delectus quisquam! Voluptatum, harum aperiam.
    </p>
  </div>

  <ion-button (click)="toggleMostrar()">Mostrar</ion-button>
  ```

```javascript
  mostrar: boolean;

  constructor() { 
    this.mostrar = false;
  }

  toggleMostrar(){
    this.mostrar= !this.mostrar;
  }
```


## Formularios

### Formularios tipo Model

```javascript
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

  //instancia formulario
  formulario: FormGroup;
  
  constructor() { 
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
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
```

```html
<form [formGroup]="formulario" (ngSubmit)="onSubmit($event)">
  <ion-item>
    <ion-label position="floating">Nombre</ion-label>
    <ion-input type="text" formControlName="nombre"></ion-input>
  </ion-item>
  <ion-item>
    <ion-label>Apellidos</ion-label>
    <ion-input type="text" formControlName="apellidos"></ion-input>
  </ion-item>
  <ion-item>
    <ion-label>Edad</ion-label>
    <ion-input type="number" formControlName="edad"></ion-input>
  </ion-item>
  <ion-item>
    <ion-label>Email</ion-label>
    <ion-input type="email" formControlName="email"></ion-input>
  </ion-item>
  <ion-item>
    <ion-label>Password</ion-label>
    <ion-input type="password" formControlName="password"></ion-input>
  </ion-item>
  <ion-item>
    <ion-label>DNI</ion-label>
    <ion-input type="text" formControlName="dni"></ion-input>
  </ion-item>
  <ion-button type="submit">Enviar</ion-button>
</form>
```

https://ionicframework.com/docs/api/input


## Servicios para peticiones http / bases de datos

ionic generate service services/Contactos

import { HttpClientModule } from '@angular/common/http';

### Pruebas sin instalar ionic

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
```

https://ionicframework.com/docs/intro/cdn
