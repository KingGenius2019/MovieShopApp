import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-lists',
  templateUrl: './movies-lists.component.html',
  styleUrls: ['./movies-lists.component.css']
})
export class MoviesListsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input()
  movies;

  remove(index: number){
    this.movies.splice(index, 1);
  }

}
