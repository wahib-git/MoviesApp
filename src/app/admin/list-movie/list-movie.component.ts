import { Component } from '@angular/core';
import { Film, FILMS } from '../../models/film';

@Component({
  selector: 'app-list-movie',
  standalone: false,
  templateUrl: './list-movie.component.html',
  styleUrl: './list-movie.component.css'
})
export class ListMovieComponent {
  films: Film[] = FILMS;
}
