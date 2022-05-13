import { Component, OnInit } from '@angular/core';
import { genreDTO } from 'src/app/models/genre.model';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-index-genre',
  templateUrl: './index-genre.component.html',
  styleUrls: ['./index-genre.component.css']
})
export class IndexGenreComponent implements OnInit {
  genres: genreDTO[];

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.getAll().subscribe(genres =>
      {
        this.genres = genres;
      });
  }

}
