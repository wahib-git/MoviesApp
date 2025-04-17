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

  // Créer un nouveau film avec image (multipart/form-data)
  createMovie(movieData: {
    title: string;
    description: string;
    genre: string;
    rating: string;
    year: string;
    isNew: boolean;
    trailerUrl: string;
    image: File;
  }): Observable<Film> {
    const formData = new FormData();
    formData.append('title', movieData.title);
    formData.append('description', movieData.description);
    formData.append('genre', movieData.genre);
    formData.append('rating', movieData.rating);
    formData.append('year', movieData.year);
    formData.append('isNew', String(movieData.isNew));
    formData.append('trailerUrl', movieData.trailerUrl);
    formData.append('image', movieData.image);

    return this.http.post<Film>(`${this.ROOT_URL}/movies`, formData);
  }

  // Mettre à jour un film existant (avec ou sans nouvelle image)
  updateMovie(
    id: number,
    movieData: {
      title: string;
      description: string;
      genre: string;
      rating: string;
      year: string;
      isNew: boolean;
      trailerUrl: string;
      image?: File;
    }
  ): Observable<Film> {
    const formData = new FormData();
    formData.append('title', movieData.title);
    formData.append('description', movieData.description);
    formData.append('genre', movieData.genre);
    formData.append('rating', movieData.rating);
    formData.append('year', movieData.year);
    formData.append('isNew', String(movieData.isNew));
    formData.append('trailerUrl', movieData.trailerUrl);
    if (movieData.image) {
      formData.append('image', movieData.image);
    }

    return this.http.put<Film>(`${this.ROOT_URL}/movies/${id}`, formData);
  }

  // Supprimer un film par ID
  deleteMovie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.ROOT_URL}/movies/${id}`);
  }
}
