import { Component, OnInit } from '@angular/core';
import { AppService } from '../../sevices/app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Film } from '../../models/film';
@Component({
  selector: 'app-add-movie',
  standalone: false,
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css',
})
export class AddMovieComponent {
  formGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    genre: new FormControl('', [Validators.required]), // Validation pour genre
    rating: new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(10),
    ]),
    year: new FormControl('', [Validators.required]), // Validation pour année
    isNew: new FormControl(false),
    trailerUrl: new FormControl('', [
      Validators.required,
      Validators.pattern('https?://.+'),
    ]),
    image: new FormControl('', [Validators.required]), // Validation pour image
  });

  constructor(private appService: AppService) {}

  selectedFile: File | null = null; // Ajoutez une variable pour stocker le fichier sélectionné

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0]; // Stockez le fichier dans la variable
    } else {
      this.selectedFile = null; // Réinitialisez si aucun fichier n'est sélectionné
      this.formGroup.patchValue({ image: null }); // Réinitialisez le champ image du formulaire
    }
  }
  onCheckboxChange(event: any) {
    this.formGroup.patchValue({ isNew: event.target.checked });
  }
  isInvalidAndTouchedOrDirty(formControl: FormControl) {
    return formControl.invalid && (formControl.touched || formControl.dirty);
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      const formData = new FormData();

      // Ajoutez les champs du formulaire
      Object.keys(this.formGroup.controls).forEach((key) => {
        if (key !== 'image') {
          // Ignorez le champ 'image' ici
          const value = this.formGroup.get(key)?.value;
          formData.append(key, value);
        }
      });
      // Ajoutez le fichier image séparément
      if (this.selectedFile) {
        formData.append('image', this.selectedFile);
      }

      this.appService.createMovie(formData).subscribe({
        next: (response) => {
          console.log('Film ajouté avec succès', response);
          this.formGroup.reset();
          this.selectedFile = null; // Réinitialisez la variable
        },
        error: (err) => {
          console.error("Erreur lors de l'ajout du film", err);
        },
      });
    } else {
      console.error('Formulaire invalide');
    }
  }
}
