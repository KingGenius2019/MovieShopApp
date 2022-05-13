import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorCreationDTO } from 'src/app/models/actors.model';

@Component({
  selector: 'app-form-actors',
  templateUrl: './form-actors.component.html',
  styleUrls: ['./form-actors.component.css']
})
export class FormActorsComponent implements OnInit {
  formActor: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }
  @Input()
  model: ActorCreationDTO;

  @Output()
  onSaveChanges = new EventEmitter<ActorCreationDTO>();
  
  ngOnInit(): void {
    this.formActor = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      dateOfBirth: '',
      picture: '',
       biography: ''
    });
    if (this.model !== undefined){
      this.formActor.patchValue(this.model);
    }
  }

  
  onImageSelected(image){
    this.formActor.get('picture').setValue(image);
  }

  changeMarkdown(content){
    this.formActor.get('biography').setValue(content);
  }

  saveChanges()
  {
    this.onSaveChanges.emit(this.formActor.value);
  }

}
