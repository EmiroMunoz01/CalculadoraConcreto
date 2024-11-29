import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConcretoListaComponent } from "./concreto-lista/concreto-lista.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConcretoListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora-concreto';
}
