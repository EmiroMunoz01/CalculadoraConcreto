import { Component } from '@angular/core';
import { ConcretoService } from '../concreto.service';
import { Concreto } from '../concreto';

@Component({
  selector: 'app-concreto-lista',
  templateUrl: './concreto-lista.component.html',
})
export class ConcretoListaComponent {
  //5 definiremos un arreglo de objetos de tipo concreto, es la informacion que vamos a procesar
  concreto: Concreto[];
  //6 agregaremos el constructor, en donde recibiremos algunos elementos, como primer parametro recibimos concretoServicio, sera de tipo concretoService, con este concretoService nos podremos conectar a la capa de servicio que estamos creando en angular, de esta forma nos podremos concectar al servicio y llamar el metodo de obtenerConcretoLista

  constructor(private concretoServicio: ConcretoService) {}

  //7 definiremos el metodo ngOnInit para poder inicializar algunas cuestiones despues del constructor
  ngOnInit() {
    //8 cargaremos todos los productos usando el metodo obtenerConcreto
    this.obtenerConcreto();
  }

  private obtenerConcreto() {
    //9 aqui es donde consumiremos los datos del observable, nos suscribimos

    this.concretoServicio.obtenerProductosLista().subscribe(
      //10 asignaremos los valores a la variable datos, al suscribirnos recibiremos el listado, esto esta configurado en el observable
      (datos) => {
        this.concreto = datos;
      }
    );


  }

  //11 de esta forma ya podremos iterar los valores desde la vista
}
