import { Component } from '@angular/core';
import { Film} from '../../models/film';
import { Router } from '@angular/router';
import { AppService } from '../../sevices/app.service';

@Component({
  selector: 'app-list-movie',
  standalone: false,
  templateUrl: './list-movie.component.html',
  styleUrl: './list-movie.component.css'
})
export class ListMovieComponent {
  films: Film[] = [];

  constructor( private appService: AppService ) {}
   
  
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
    deleteMovie(id: number) {
      // Call the service to delete a movie
      this.appService.deleteMovie(id).subscribe(
        (Data: any) => {
          console.log('Movie deleted:', Data);
          alert("Film supprimé avec succés")
          // Refresh the list of movies after deletion
          this.getallMovies();
        },
        (error: any) => {
          console.error('Error deleting movie:', error);
          alert("Erreur lors de la suppression du film")
        }
      );
    }
     

    
}
