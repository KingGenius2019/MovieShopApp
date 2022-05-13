import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, Marker, marker, tileLayer } from 'leaflet';
import { CoordinatesMap } from 'src/app/models/coordinates';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }
  
  @Input()
  initialCoordinates: CoordinatesMap[] = [];
  
  ngOnInit(): void {
    this.layers = this.initialCoordinates.map(value => marker([value.latitude, value.longitude]));
  }

  @Output()
  onSelectedLocation = new EventEmitter<CoordinatesMap>();

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
        maxZoom: 8, 
      attribution: 'Angular Movies' })
    ],
    zoom: 14,
     center: latLng(6.727575266135666,  -1.6387940011918547)
  };
  
  layers: Marker<any>[] = [];

  handleMapClick(event: LeafletMouseEvent){
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    console.log({latitude, longitude});
     this.layers = [];
     this.layers.push(marker([latitude, longitude]));
     this.onSelectedLocation.emit({latitude, longitude});
  }

}
