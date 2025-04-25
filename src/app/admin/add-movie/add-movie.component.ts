import { Component, OnInit } from '@angular/core';
import { AppService } from '../../sevices/app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Film } from '../../models/film';
@Component({
  selector: 'app-add-movie',
  standalone: false,
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.css'
})
export class AddMovieComponent implements OnInit {
  

  formGroup!: FormGroup;
 
  constructor(private formBuilder: FormBuilder,
    private appService: AppService ) { } 
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      title: [''],
      description: [''],
      year: [''], 
      genre: [''],
      rating: [''], 
      trailerUrl: [''], 
      image: [null],
      isNew: [false] 
    });
  }
  selectedFile: File | null = null; 

  // Define a method to handle file input change event
  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0]; 
    } else {
      this.selectedFile = null; 
    }
  }
  onSubmit(): void {
    if (this.formGroup.valid) {
      const formData = new FormData();
      Object.keys(this.formGroup.controls).forEach((key) => {
        if (key !== 'image') { 
          const value = this.formGroup.get(key)?.value;
          formData.append(key, value);
        }
      });
  
      // Ajoutez le fichier séparément
      if (this.selectedFile) {
        formData.append('image', this.selectedFile);
      }
  
      this.appService.createMovie(formData).subscribe(
        (response: Film) => {
          console.log('Movie added successfully:', response);
          this.formGroup.reset();
          this.selectedFile = null; 
        },
        (error) => {
          console.error('Error adding movie:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
  onCheckboxChange(event: any) {
    this.formGroup.patchValue({ isNew: event.target.checked }); 
  }
}