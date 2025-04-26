import { Component, OnInit } from '@angular/core';
import { AppService } from '../../sevices/app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-movie',
  standalone: false,
  templateUrl: './update-movie.component.html',
  styleUrl: './update-movie.component.css'
})
export class UpdateMovieComponent implements OnInit {

  formGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    genre: new FormControl('', [Validators.required]),
    rating: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(10),
    ]),
    year: new FormControl('', [Validators.required]),
    isNew: new FormControl(false),
    trailerUrl: new FormControl('', [
      Validators.required,
      Validators.pattern('https?://.+'),
    ]),
    newImage: new FormControl(''),
  });
  selectedFile: File | null = null;
  movieId!: number;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadMovieDetails();
  }
  currentImageUrl: string | null = null;
  loadMovieDetails(): void {
    this.appService.getMovieById(this.movieId).subscribe({
      next: (movie: any) => {
        this.formGroup.patchValue({
          title: movie.title,
          description: movie.description,
          genre: movie.genre,
          rating: movie.rating,
          year: movie.year,
          isNew: movie.isNew,
          trailerUrl: movie.trailerUrl,
        });
        this.currentImageUrl = movie.image; 
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

  onCheckboxChange(event: any): void {
    this.formGroup.patchValue({ isNew: event.target.checked });
  }
  isInvalidAndTouchedOrDirty(formControl: FormControl) {
    return formControl.invalid && (formControl.touched || formControl.dirty);
  }


  onSubmit(): void {
    if (this.formGroup.valid) {
      const formData = new FormData();

      Object.keys(this.formGroup.controls).forEach((key) => {
        if (key !== 'image') {
          const value = this.formGroup.get(key)?.value;
          formData.append(key, value !== null && value !== undefined ? value : '');
        }
      });

      if (this.selectedFile) {
        formData.append('image', this.selectedFile);
      }

      this.appService.updateMovie(this.movieId, formData).subscribe({
        next: (response) => {
          console.log('Film mis à jour avec succès', response);
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error("Erreur lors de la mise à jour du film", err);
        },
      });
    } else {
      console.error('Formulaire invalide');
    }
  }

}
