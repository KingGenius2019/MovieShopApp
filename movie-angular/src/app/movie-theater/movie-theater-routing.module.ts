import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexMovieTheaterComponent } from './index-movie-theater/index-movie-theater.component';
import { EditMovieTheaterComponent } from './edit-movie-theater/edit-movie-theater.component';
import { CreateMovieTheaterComponent } from './create-movie-theater/create-movie-theater.component';

const routes: Routes = [
  {path: 'movietheaters', component: IndexMovieTheaterComponent},
  {path: 'movietheaters/create', component: CreateMovieTheaterComponent},
 {path: 'movietheaters/edit/:id', component: EditMovieTheaterComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class MovieTheaterRoutingModule { }
