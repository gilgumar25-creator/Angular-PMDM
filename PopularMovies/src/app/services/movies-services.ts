import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PeliculasPopulares } from '../interfaces/peliculas';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  private http = inject(HttpClient);

  getPopularMovies(pagina = 1): Observable<PeliculasPopulares> {
    const parametros = new HttpParams()
      .set('api_key', environment.claveApi)
      .set('page', pagina);

    return this.http.get<PeliculasPopulares>(
      `${environment.urlApi}/movie/popular`,
      { params: parametros }
    );
  }
}