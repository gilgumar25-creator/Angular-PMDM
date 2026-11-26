import { Component, inject, OnInit, signal } from '@angular/core';
import { MoviesService } from '../../services/movies-services';
import { Pelicula } from '../../interfaces/peliculas';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-lista-peliculas',
  standalone: true,
  imports: [],
  templateUrl: './lista-peliculas.html',
})
export class ListaPeliculasComponent implements OnInit {
  private moviesService = inject(MoviesService);

  peliculas = signal<Pelicula[]>([]);
  cargando = signal(true);
  error = signal<string | null>(null);
  urlImagen = environment.urlImagen;

  ngOnInit(): void {
    this.moviesService.getPopularMovies().subscribe({
      next: (respuesta) => {
        this.peliculas.set(respuesta.results);
        this.cargando.set(false);
      },
      error: () => {
        this.error.set('No se pudieron cargar las películas.');
        this.cargando.set(false);
      },
    });
  }
}