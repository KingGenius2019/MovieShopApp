import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { toBase64 } from 'src/app/utilities/util';

@Component({
  selector: 'app-img-input',
  templateUrl: './img-input.component.html',
  styleUrls: ['./img-input.component.css']
})
export class ImgInputComponent implements OnInit {

  constructor() { }
  imageBase64: string;

  
  // receive data when in edit mode
    @Input()
    urlCurrentImage: string;
  
    @Output()
    onImageSelected = new EventEmitter<File>();
    
  ngOnInit(): void {
  }

  
  change(event){
    if (event.target.files.length > 0){
      const file: File = event.target.files[0];
      toBase64(file).then((value: string) => this.imageBase64 = value);
      this.onImageSelected.emit(file);
      this.urlCurrentImage = null;
    }
  }

}
