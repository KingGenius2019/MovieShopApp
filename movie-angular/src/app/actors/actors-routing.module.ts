import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexActorsComponent } from './index-actors/index-actors.component';
import { EditActorComponent } from './edit-actor/edit-actor.component';
import { CreatActorComponent } from './creat-actor/creat-actor.component';


const routes: Routes = [
  {path: 'actors', component: IndexActorsComponent},
  {path: 'actors/create', component: CreatActorComponent},
  {path: 'actors/edit/:id', component: EditActorComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class ActorsRoutingModule { }
