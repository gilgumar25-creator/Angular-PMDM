import { Component, signal } from '@angular/core';
import { CustomProgressBar } from './components/custom-progress-bar/custom-progress-bar'

@Component({
  imports: [CustomProgressBar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  /*protected readonly title = signal('ProgressBar');*/
  progreso = signal(30);
  colorElegido = signal("primary")

  colores = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];

  subir() {
    this.progreso.update((valor) => Math.min(100, valor + 10));

  }

  bajar() {
    this.progreso.update((valor) =>Math.max(0,valor - 10) );
  }

  reiniciar() {
    this.progreso.set(0);
  }
}
