import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MoviesFilterComponent } from './movies-filter/movies-filter.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';

const routes: Routes = [
  {path: 'movies/create', component: CreateMovieComponent},
  {path: 'movies/edit/:id', component: EditMovieComponent},
  {path: 'movies/filter', component: MoviesFilterComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], exports: [
    RouterModule
  ]
})
export class MoviesRoutingModule { }
