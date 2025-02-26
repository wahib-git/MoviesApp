import { Component } from '@angular/core';
import { Film, FILMS } from '../models/film';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  films: Film[] = FILMS;
}
