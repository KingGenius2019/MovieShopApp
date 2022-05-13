import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'actors', loadChildren:()=>import('./actors/actors.module').then((m)=>m.ActorsModule)},
  {path: 'genres', loadChildren:()=>import('./genre/genre.module').then((m)=>m.GenreModule)},
  {path: 'movies', loadChildren:()=>import('./movies/movies.module').then((m)=>m.MoviesModule)},
  {path: 'movietheater', loadChildren:()=>import('./movie-theater/movie-theater.module').then((m)=>m.MovieTheaterModule)},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
