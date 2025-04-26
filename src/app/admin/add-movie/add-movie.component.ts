import { Component} from '@angular/core';
import { AppService } from '../../sevices/app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    image: new FormControl('', [Validators.required]), 
  });

  constructor(private appService: AppService) {}

  selectedFile: File | null = null; 

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0]; 
    } else {
      this.selectedFile = null; 
      this.formGroup.patchValue({ image: null }); 
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

      Object.keys(this.formGroup.controls).forEach((key) => {
        if (key !== 'image') {
          // Ignorez le champ 'image' ici
          const value = this.formGroup.get(key)?.value;
          formData.append(key, value);
        }
      });

      if (this.selectedFile) {
        formData.append('image', this.selectedFile);
      }

      this.appService.createMovie(formData).subscribe({
        next: (response) => {
          console.log('Film ajouté avec succès', response);
          this.formGroup.reset();
          this.selectedFile = null; 
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
