import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConcretoListaComponent } from './concreto-lista/concreto-lista.component';
import { ConcretoComponent } from './concreto/concreto.component';

@NgModule({
  declarations: [
    AppComponent,
    ConcretoListaComponent,
    ConcretoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
