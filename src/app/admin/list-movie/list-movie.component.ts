import { Component } from '@angular/core';
import { Film} from '../../models/film';
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
       this.appService.getAllMovies().subscribe(
        (Data: any) => {
          this.films = Data;
          console.log('Films:', this.films);
        },
      );
    }
    ngOnInit() {
      this.getallMovies();
    }
    deleteMovie(id: number) {
      this.appService.deleteMovie(id).subscribe(
        () => {
          console.log('Movie deleted');
          alert("Film supprimé avec succés")
          this.getallMovies();
        },
        (error: any) => {
          console.error('Error deleting movie:', error);
          alert("Erreur lors de la suppression du film")
        }
      );
    }
     

    
}
