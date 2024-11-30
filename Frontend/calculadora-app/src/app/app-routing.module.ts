import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcretoListaComponent } from './concreto-lista/concreto-lista.component';

const routes: Routes = [
  //12 hemos definido la lista por default
  {path:'concreto', component: ConcretoListaComponent},
  {path:'', redirectTo: 'concreto', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
