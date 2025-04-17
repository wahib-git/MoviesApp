import { Component } from '@angular/core';
import { Film } from '../models/film';
import { Router } from '@angular/router';
import { AppService } from '../sevices/app.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  films: Film[] = [];
 
  constructor(private router: Router ,private appService: AppService ) {}
  goToFilm() {
    this.router.navigate(['/movies-list']);
  }

  getallMovies() {
    // Call the service to get all movies
     this.appService.getAllMovies().subscribe(
      (Data: any) => {
        this.films = Data;
        console.log('Films:', this.films);
      },
    );
  }
  ngOnInit() {
    // Call the service to get all movies
    this.getallMovies();
  }
}


