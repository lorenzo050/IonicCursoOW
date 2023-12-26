import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'contactos',
    loadComponent: () => import('./contactos/contactos.page').then( m => m.ContactosPage)
  },
  {
    path: 'mapa',
    loadComponent: () => import('./mapa/mapa.page').then( m => m.MapaPage)
  },
  {
    path: 'lista-contactos',
    loadComponent: () => import('./contactos/lista-contactos/lista-contactos.page').then( m => m.ListaContactosPage)
  },
  {
    path: 'nuevo-contacto',
    loadComponent: () => import('./contactos/nuevo-contacto/nuevo-contacto.page').then( m => m.NuevoContactoPage)
  },
  {
    path: 'detalle-contacto',
    loadComponent: () => import('./contactos/detalle-contacto/detalle-contacto.page').then( m => m.DetalleContactoPage)
  },
];
