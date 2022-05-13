import { Component, OnInit } from '@angular/core';
import { movieCreationDTO } from 'src/app/models/movies.model';

@Component({
  selector: 'app-create-movie-theater',
  templateUrl: './create-movie-theater.component.html',
  styleUrls: ['./create-movie-theater.component.css']
})
export class CreateMovieTheaterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  saveChanges(movieTheater: movieCreationDTO){
    console.log(movieTheater);
  }

}
