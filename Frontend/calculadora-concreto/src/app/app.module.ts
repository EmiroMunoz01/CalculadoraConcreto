import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgregarConcretoComponent } from './agregar-concreto/agregar-concreto.component';
import { ConcretoListaComponent } from './concreto-lista/concreto-lista.component';
import { EditarConcretoComponent } from './editar-concreto/editar-concreto.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ConcretoListaComponent,
    AgregarConcretoComponent,
    EditarConcretoComponent
  ],
    //4 debemos importar el modulo http para poder utilizarlo
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
