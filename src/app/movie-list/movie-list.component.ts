import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Film} from '../models/film';
import { AppService } from '../sevices/app.service';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent {
  films : Film[] =[]; 
  constructor(private router: Router ,private appService: AppService ) {}

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
