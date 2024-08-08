import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagEjemplosComponent } from './pag-ejemplos/pag-ejemplos.component';
import { PagPreguntasComponent } from './pag-preguntas/pag-preguntas.component';
import { PagVideosComponent } from './pag-videos/pag-videos.component';
import { InteraccionComponent } from './interaccion/interaccion.component';

const routes: Routes = [
  {
    path : 'app-pag-ejemplos',
    component : PagEjemplosComponent,
    pathMatch : 'full',
  },
  {
    path : 'app-interaccion',
    component : InteraccionComponent,
    pathMatch : 'full',
  },
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'app-pag-preguntas',
    component : PagPreguntasComponent,
    pathMatch : 'full',
  },
  {
    path : 'app-pag-videos',
    component : PagVideosComponent,
    pathMatch : 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
