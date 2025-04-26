import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Film} from '../models/film';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  films : Film[] =[]; 
}
