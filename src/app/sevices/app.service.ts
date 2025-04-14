import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private ROOT_URL = 'http://localhost:8080/api/v0';
  
  constructor(private http: HttpClient) {}

  // Get all movies
  getAllMovies(): Observable<any> {
    return this.http.get(`${this.ROOT_URL}/movies`);
  }
}
