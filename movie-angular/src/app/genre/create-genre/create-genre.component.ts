import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { genreCreationDTO } from 'src/app/models/genre.model';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  constructor(private genreService: GenreService, private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(genreCreationDTO: genreCreationDTO){
    // ... save the genre
    console.log(genreCreationDTO)
    this.genreService.create(genreCreationDTO).subscribe(() => {
      this.router.navigate(['/genres']);
    }, error => console.error(error));
    

  }
 

  }
  


