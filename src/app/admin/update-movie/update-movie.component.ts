import { Component, OnInit } from '@angular/core';
import { AppService } from '../../sevices/app.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-movie',
  standalone: false,
  templateUrl: './update-movie.component.html',
  styleUrl: './update-movie.component.css'
})
export class UpdateMovieComponent implements OnInit {

  movieId : any;
  movie : any
  currentImageUrl: string | null = null; 
  selectedFile: File | null = null; 
  constructor(private router:Router, private activatedRoute : ActivatedRoute , private movieService : AppService){}
 
  ngOnInit(): void {
    this.movieId = this.activatedRoute.snapshot.params['id'];
    this.loadMovieDetails();
  }

  loadMovieDetails(): void {
    this.movieService.getMovieById(this.movieId).subscribe({
      next: (res) => {
        this.movie = res;
        this.currentImageUrl = res.image; 
        console.log('Film : ', this.movie);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des détails du film', err);
      },
    });
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0]; 
    } else {
      this.selectedFile = null;
    }
  }
 
  onUpdate(updateForm: any): void {
    const formData = new FormData();

   
    Object.keys(updateForm.value).forEach((key) => {
      if (key !== 'image') {
        const value = updateForm.value[key];
        formData.append(key, value !== null && value !== undefined ? value : '');
      }
    });

    
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.movieService.updateMovie(this.movieId, formData).subscribe({
      next: (res) => {
        alert('Film mis à jour avec succès');
        this.router.navigate(['/admin']); 
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour du film', err);
      },
    });
  }
 /*  ngOnInit(){
      this.movieId = this.activatedRoute.snapshot.params['id'];
      console.log("Film ID : " , this.movieId);
      this.movieService.getMovieById(this.movieId).subscribe(
        (res) =>{
          this.movie = res;
          console.log("Film : " , this.movie)
        },
        (err) =>{
         console.error(err)
        },
        
      )
  }

  onUpdate(data :any){
    this.movieService.updateMovie(this.movieId , data).subscribe(
      (res) =>{
        alert("Film mis a jour avec succés")
      },
      (err) =>{
        console.error(err)
      }
    )
  }
   */

}