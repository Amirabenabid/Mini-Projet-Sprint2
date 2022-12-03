import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { style } from '../model/style.model';

@Component({
  selector: 'app-update-style',
  templateUrl: './update-style.component.html',
  styles: [
  ]
})
export class UpdatestyleComponent implements OnInit {
  @Input()
  style! : style;
  @Output() 
styleUpdated = new EventEmitter<style>();


@Input()
ajout!:boolean;
  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant Updatestyle ",this.style);
  }
  
  savestyle(){
    this.styleUpdated.emit(this.style);
    }
    
}
