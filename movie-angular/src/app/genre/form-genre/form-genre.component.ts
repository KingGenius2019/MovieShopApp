import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { genreCreationDTO } from 'src/app/models/genre.model';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {
  formGenre: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  @Input()
  model: genreCreationDTO;

   @Output()
  onSaveChanges: EventEmitter<genreCreationDTO> = new EventEmitter<genreCreationDTO>();

  ngOnInit(): void {
    this.formGenre = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required, Validators.minLength(3), firstLetterUppercase()]
      }]
    });

    if (this.model !== undefined){
      this.formGenre.patchValue(this.model);
    }

  }

   
  saveChanges(genreCreationDTO: genreCreationDTO){
    this.onSaveChanges.emit(this.formGenre.value);
 }

 getErrorMessageFieldName(){
  const field = this.formGenre.get('name');

  if (field.hasError('required')){
    return 'The name field is required';
  }

  if (field.hasError('minlength')){
    return 'The minimum length is 3';
  }

  if (field.hasError('firstLetterUppercase')){
    return field.getError('firstLetterUppercase').message;
  }

  return '';
}

}
