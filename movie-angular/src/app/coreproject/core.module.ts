import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { MaterialModule } from '../material/material.module';
import { GenericListComponent } from './generic-list/generic-list.component';
import { ImgInputComponent } from './img-input/img-input.component';
import { RatingComponent } from './rating/rating.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MultipleSelectorComponent } from './multiple-selector/multiple-selector.component';
import { InputMarkdownComponent } from './input-markdown/input-markdown.component';
import { ActorsAutocompleteComponent } from './actors-autocomplete/actors-autocomplete.component';




@NgModule({
  declarations: [
    MapComponent,
    GenericListComponent,
    ImgInputComponent,
    RatingComponent,
    MultipleSelectorComponent,
    InputMarkdownComponent,
    ActorsAutocompleteComponent,
   
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LeafletModule
   
  ],
  exports: [MapComponent,
    LeafletModule,
    GenericListComponent,
    ImgInputComponent,
    RatingComponent,
    MultipleSelectorComponent,
    InputMarkdownComponent,
    ActorsAutocompleteComponent,
  ]
  
})
export class CoreModule { }
