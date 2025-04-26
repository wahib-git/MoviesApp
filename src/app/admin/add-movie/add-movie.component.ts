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
  selectedFile!: File; 
 
  constructor(private formBuilder: FormBuilder, private appService: AppService ) { } 

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

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedFile = file;
  }
  
  onSubmit() {
   
    const movieData = {
      description: this.formGroup.get('description')?.value,
      title: this.formGroup.get('title')?.value,
      year: this.formGroup.get('year')?.value,  
      genre: this.formGroup.get('genre')?.value,
      rating: this.formGroup.get('rating')?.value,
      trailerUrl: this.formGroup.get('trailerUrl')?.value,
      isNew: this.formGroup.get('isNew')?.value,
      image: this.selectedFile 

    };
  
    this.appService.createMovie(movieData).subscribe(response => {
      console.log('Film créé', response);
    });
  }
  onCheckboxChange(event: any) {
    this.formGroup.patchValue({ isNew: event.target.checked }); 
  }
}