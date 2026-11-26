
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaPeliculasComponent } from './components/lista-peliculas/lista-peliculas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaPeliculasComponent],
  templateUrl: './app.html',
})
export class App {
    protected readonly title = signal('PopularMovies');
}