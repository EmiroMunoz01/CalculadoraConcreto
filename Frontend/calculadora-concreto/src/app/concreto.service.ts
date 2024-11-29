import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Concreto } from './concreto';

@Injectable({
  providedIn: 'root',
})
export class ConcretoService {
  private urlBase = 'http://localhost:8080/concreto-app/concreto';

  constructor(private clienteHttp: HttpClient) {}

  //metodo que sera con el que nos vamos a comunicar para obtener todos los objetos de tipo concreto

  //regresaras un objeto de tipo observable, debemos suscribirnos para recuperar los objetos de tipo concreto
  obtenerProductosLista(): Observable<Concreto[]> {
    //usaremos el objeto de clienteHttp para llamar la peticion get, ademas estamos indicando que es un arreglo de objetos de tipo concreto, y como parametro pasamos el urlBase, es la url con la que haremos la peticion
    return this.clienteHttp.get<Concreto[]>(this.urlBase);
  }
}
