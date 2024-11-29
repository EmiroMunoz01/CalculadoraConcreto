import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarConcretoComponent } from './agregar-concreto/agregar-concreto.component';
import { EditarConcretoComponent } from './editar-concreto/editar-concreto.component';
import { ConcretoListaComponent } from './concreto-lista/concreto-lista.component';

const routes: Routes = [
  { path: 'concreto', component: ConcretoListaComponent },
  { path: '', redirectTo : 'concreto', pathMatch : 'full' },
  { path: 'agregar-concreto', component: AgregarConcretoComponent },
  { path: 'editar-concreto/:id', component: EditarConcretoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
