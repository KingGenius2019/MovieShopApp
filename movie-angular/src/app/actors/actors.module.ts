import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ActorsRoutingModule } from './actors-routing.module';
import { FormActorsComponent } from './form-actors/form-actors.component';
import { CreatActorComponent } from './creat-actor/creat-actor.component';
import { EditActorComponent } from './edit-actor/edit-actor.component';
import { IndexActorsComponent } from './index-actors/index-actors.component';

import { CoreModule } from '../coreproject/core.module';



@NgModule({
  declarations: [
    FormActorsComponent,
    CreatActorComponent,
    EditActorComponent,
    IndexActorsComponent,
   
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ActorsRoutingModule,
    CoreModule
  ]
})
export class ActorsModule { }
