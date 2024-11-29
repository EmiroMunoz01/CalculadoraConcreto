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

  //1 metodo que sera con el que nos vamos a comunicar para obtener todos los objetos de tipo concreto

  //2 regresaras un objeto de tipo observable, debemos suscribirnos para recuperar los objetos de tipo concreto
  obtenerProductosLista(): Observable<Concreto[]> {
    //3 usaremos el objeto de clienteHttp para llamar la peticion get, ademas estamos indicando que es un arreglo de objetos de tipo concreto, y como parametro pasamos el urlBase, es la url con la que haremos la peticion

    //debemos suscribirnos a este metodo porque devuelve un objeto de tipo observable que retornara todos los objetos de tipo concreto, pero esto lo haremos desde el componente concreto lista
    return this.clienteHttp.get<Concreto[]>(this.urlBase);
  }
}
