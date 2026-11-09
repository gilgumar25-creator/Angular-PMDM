import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioReactivoComponent } from './components/formulario-reactivo-component/formulario-reactivo-component';

@Component({
  imports: [RouterOutlet, FormularioReactivoComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('reactive-form');
}
