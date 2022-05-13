import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { FormMovieComponent } from './form-movie/form-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MoviesFilterComponent } from './movies-filter/movies-filter.component';
import { MoviesListsComponent } from './movies-lists/movies-lists.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { CoreModule } from '../coreproject/core.module';



@NgModule({
  declarations: [
    FormMovieComponent,
    EditMovieComponent,
    MoviesFilterComponent,
    MoviesListsComponent,
    CreateMovieComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MoviesRoutingModule,
    CoreModule
  ],
  exports: [MoviesListsComponent]
})
export class MoviesModule { }
