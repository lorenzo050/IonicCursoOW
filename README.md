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

### Enrutamiento
```html
<a routerLink="/mapa">Ir a mapa</a>
```
hay que importar esto para que funcione en el .ts
```angular
import { RouterLinkWithHref } from '@angular/router';
```

ion-back-button

### Pruebas sin instalar ionic
```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css" />
```
https://ionicframework.com/docs/intro/cdn