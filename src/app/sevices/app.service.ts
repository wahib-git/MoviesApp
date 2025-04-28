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

  getAllMovies(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.ROOT_URL}/movies`);
  }

  getMovieById(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.ROOT_URL}/movies/${id}`);
  }

  createMovie(movieData: FormData): Observable<Film> {
    return this.http.post<Film>(`${this.ROOT_URL}/movies`, movieData);
  }


  updateMovie(id: number, formData: FormData): Observable<Film> {
    return this.http.put<Film>(`${this.ROOT_URL}/movies/${id}`, formData);
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete(`${this.ROOT_URL}/movies/${id}`);
  }
}
