import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private ROOT_URL = 'http://localhost:8081/api/v0';

  constructor(private http: HttpClient) {}

  // Get all movies
  getAllMovies(): Observable<any> {
    return this.http.get(`${this.ROOT_URL}/movies`);
  }

  // Récupérer un film par ID
  getMovieById(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.ROOT_URL}/movies/${id}`);
  }

  // Mettre à jour un film existant (avec ou sans nouvelle image)
  createMovie(movieData: FormData): Observable<Film> {
    return this.http.post<Film>(`${this.ROOT_URL}/movies`, movieData);
  }


  updateMovie(
    id: number,
    formData: FormData
  ): Observable<Film> {
    return this.http.put<Film>(`${this.ROOT_URL}/movies/${id}`, formData);
  }

  // Supprimer un film par ID
  deleteMovie(id: number): Observable<any> {
    return this.http.delete<void>(`${this.ROOT_URL}/movies/${id}`);
  }

  
}
