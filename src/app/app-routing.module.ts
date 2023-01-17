import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiografiaComponent } from './pages/biografia/biografia.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'biografia'
  },
  {
    path: 'biografia',
    component: BiografiaComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'galeria',
    component: GaleriaComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
