import { Component, OnInit } from '@angular/core';
import { ActorCreationDTO } from 'src/app/models/actors.model';

@Component({
  selector: 'app-creat-actor',
  templateUrl: './creat-actor.component.html',
  styleUrls: ['./creat-actor.component.css']
})
export class CreatActorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  saveChanges(actorCreationDTO: ActorCreationDTO){
    console.log(actorCreationDTO);
  }

}
