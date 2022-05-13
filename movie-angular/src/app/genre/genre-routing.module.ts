import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexGenreComponent } from './index-genre/index-genre.component';
import { CreateGenreComponent } from './create-genre/create-genre.component';
import { EditGenreComponent } from './edit-genre/edit-genre.component';

const routes: Routes = [
  {path: 'genres', component: IndexGenreComponent},
  {path: 'genres/create', component: CreateGenreComponent},
  {path: 'genres/edit/:id', component: EditGenreComponent},
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
export class GenreRoutingModule { }
