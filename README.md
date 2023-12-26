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

```
ionic generate
```

este comando importa la ruta automaticamente

generar página dentro de otra

```
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

### Pruebas sin instalar ionic

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
```

https://ionicframework.com/docs/intro/cdn
