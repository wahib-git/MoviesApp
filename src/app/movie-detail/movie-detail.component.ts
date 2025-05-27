import { Component } from '@angular/core';
import { Film } from '../models/film';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AppService } from '../sevices/app.service';

@Component({
  selector: 'app-movie-detail',
  standalone: false,
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent {
  filmId?: any;
  //films: Film[]=[]
  //films: Film[] = FILMS;
  film?: Film;
  safeTrailerUrl!: SafeResourceUrl;
  showModal = false;

  constructor(private route: ActivatedRoute, private filmService: AppService  , private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.filmId = this.route.snapshot.params['id'];
    console.log("Film ID : " , this.filmId);
    this.filmService.getMovieById(this.filmId).subscribe(
      (res) =>{
        this.film = res;
        console.log("Film in movie details: " , this.film)
      },
      (err) =>{
       console.error(err)
      },
      
    )
  }
  /* ngOnInit() {
    console.log('INSIDE ngOnInit');
    this.filmId = this.route.snapshot.paramMap.get('id');
    console.log('FILM ID:', this.filmId);
    this.film = this.films.find(f => f.id === parseInt(this.filmId));
    console.log('Film:', this.film);
  } */
  openModal() {
    if (this.film && this.film.trailerUrl) {
      const embedUrl = this.film.trailerUrl.replace('watch?v=', 'embed/');
      this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
      this.showModal = true;   
    }
  }
  closeModal() {
    this.showModal = false;
  } 
}
