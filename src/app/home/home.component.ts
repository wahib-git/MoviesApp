import { Component } from '@angular/core';
import { Film, FILMS } from '../models/film';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  films: Film[] = FILMS;

  constructor(private router: Router) {}
  goToFilm() {
    this.router.navigate(['/movies-list']);
  }
}
