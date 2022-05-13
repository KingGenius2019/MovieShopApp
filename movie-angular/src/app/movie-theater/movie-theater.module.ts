import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MovieTheaterRoutingModule } from './movie-theater-routing.module';

import { MovieTheaterFormComponent } from './movie-theater-form/movie-theater-form.component';
import { EditMovieTheaterComponent } from './edit-movie-theater/edit-movie-theater.component';
import { IndexMovieTheaterComponent } from './index-movie-theater/index-movie-theater.component';

import { CoreModule } from '../coreproject/core.module';
import { CreateMovieTheaterComponent } from './create-movie-theater/create-movie-theater.component';



@NgModule({
  declarations: [
    
    MovieTheaterFormComponent,
    EditMovieTheaterComponent,
    IndexMovieTheaterComponent,
    CreateMovieTheaterComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MovieTheaterRoutingModule,
    CoreModule

  ]
})
export class MovieTheaterModule { }
