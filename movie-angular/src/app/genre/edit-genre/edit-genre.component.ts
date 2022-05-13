import { Component, OnInit } from '@angular/core';
import { genreCreationDTO } from 'src/app/models/genre.model';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  constructor() { }
  model: genreCreationDTO = {name: 'Drama'};
  
  ngOnInit(): void {
  }

  
  saveChanges(genreCreationDTO: genreCreationDTO){

  }

}
