import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateGenreComponent } from './create-genre/create-genre.component';
import { EditGenreComponent } from './edit-genre/edit-genre.component';
import { FormGenreComponent } from './form-genre/form-genre.component';
import { IndexGenreComponent } from './index-genre/index-genre.component';
import { GenreRoutingModule } from './genre-routing.module';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../coreproject/core.module';



@NgModule({
  declarations: [
    CreateGenreComponent,
    EditGenreComponent,
    FormGenreComponent,
    IndexGenreComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    GenreRoutingModule,
    CoreModule
  ]
})
export class GenreModule { }
