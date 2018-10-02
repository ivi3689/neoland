import { Component } from '@angular/core';
import {Tarea} from './models/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  listadoTarea: Tarea[]
  

  constructor(){
  	this.listadoTarea = []
  }
  handleMandarTarea($event){
  	this.listadoTarea.push($event)
  }

}
